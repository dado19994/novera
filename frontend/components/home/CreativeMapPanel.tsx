"use client";

import { ArrowRight, Minus, Plus, X } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import {
  mapCategories,
  mapDistricts,
  mapRoutes,
  mapSignals,
  type MapCategory,
  type MapDistrict,
} from "./creativeMapData";
import styles from "./creativeMapPanel.module.css";

interface CreativeMapPanelProps {
  cityName: string;
}

const zoomLabels = ["Signal view", "Pulse view", "Flow view"];

function getDistrictToneClass(tone: MapDistrict["tone"]) {
  return styles[tone];
}

function getCategoryClass(category: MapCategory) {
  return styles[`category${category[0].toUpperCase()}${category.slice(1)}` as keyof typeof styles];
}

function getDistrictById(districtId: string | null) {
  return mapDistricts.find((district) => district.id === districtId) ?? null;
}

function getStatsLine(district: MapDistrict) {
  return `${district.stats.spaces} spaces · ${district.stats.calls} calls · ${district.stats.artists} artists`;
}

export function CreativeMapPanel({ cityName }: CreativeMapPanelProps) {
  const [selectedDistrictId, setSelectedDistrictId] = useState<string | null>(null);
  const [hoveredDistrictId, setHoveredDistrictId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<MapCategory | null>(null);
  const [mapZoomLevel, setMapZoomLevel] = useState(1);

  const selectedDistrict = useMemo(
    () => getDistrictById(selectedDistrictId),
    [selectedDistrictId],
  );

  useEffect(() => {
    function closeSelectedDistrict(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedDistrictId(null);
      }
    }

    window.addEventListener("keydown", closeSelectedDistrict);
    return () => window.removeEventListener("keydown", closeSelectedDistrict);
  }, []);

  function toggleCategory(category: MapCategory) {
    setActiveCategory((currentCategory) => (
      currentCategory === category ? null : category
    ));
  }

  function selectDistrict(districtId: string) {
    setSelectedDistrictId((currentDistrict) => (
      currentDistrict === districtId ? null : districtId
    ));
  }

  function isDistrictActive(districtId: string) {
    return selectedDistrictId === districtId || hoveredDistrictId === districtId;
  }

  function isCategoryMuted(category: MapCategory, districtId?: string) {
    if (districtId && selectedDistrictId === districtId) {
      return false;
    }

    return activeCategory !== null && activeCategory !== category;
  }

  function isDistrictMuted(district: MapDistrict) {
    if (selectedDistrictId === district.id || hoveredDistrictId === district.id) {
      return false;
    }

    if (selectedDistrictId !== null) {
      return true;
    }

    return activeCategory !== null && !district.categories.includes(activeCategory);
  }

  return (
    <article className={styles.panel}>
      <div className={styles.copy}>
        <p>{cityName.toUpperCase()}</p>
        <h2>CREATIVE MAP</h2>
        <strong>The city is the canvas.</strong>
        <span>Explore live rooms, spaces and open calls nearby.</span>
        <ul className={styles.legend} aria-label="Creative Map categories">
          {mapCategories.map((category) => (
            <li key={category.id}>
              <button
                type="button"
                className={`${styles.legendButton} ${getCategoryClass(category.id)} ${
                  activeCategory === category.id ? styles.legendButtonActive : ""
                } ${activeCategory && activeCategory !== category.id ? styles.legendButtonMuted : ""}`}
                aria-pressed={activeCategory === category.id}
                onClick={() => toggleCategory(category.id)}
              >
                <i aria-hidden="true" />
                {category.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={`${styles.locations} ${selectedDistrict ? styles.locationsMuted : ""}`}
          onClick={() => {
            setActiveCategory(null);
            setSelectedDistrictId("centro");
          }}
        >
          VIEW ALL LOCATIONS <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>

      <div
        className={styles.map}
        aria-label={`${cityName} Creative Map district signals`}
        style={{ "--map-zoom": mapZoomLevel } as CSSProperties}
      >
        <svg className={styles.routes} viewBox="0 0 720 500" role="img" aria-label="Creative signal routes">
          {mapRoutes.map((route) => (
            <path
              key={route.id}
              className={`${getCategoryClass(route.category)} ${
                isDistrictActive(route.districtId) ? styles.routeActive : ""
              } ${isCategoryMuted(route.category, route.districtId) ? styles.routeMuted : ""}`}
              d={route.path}
            />
          ))}
        </svg>
        <span className={styles.pulse} aria-hidden="true" />

        {mapDistricts.map((district) => (
          <button
            key={district.id}
            type="button"
            className={`${styles.label} ${getDistrictToneClass(district.tone)} ${
              selectedDistrictId === district.id ? styles.labelSelected : ""
            } ${isDistrictMuted(district) ? styles.labelMuted : ""}`}
            style={{ left: `${district.x}%`, top: `${district.y}%` }}
            aria-label={`Select ${district.name} district. ${district.pulse}`}
            aria-pressed={selectedDistrictId === district.id}
            onClick={() => selectDistrict(district.id)}
            onMouseEnter={() => setHoveredDistrictId(district.id)}
            onMouseLeave={() => setHoveredDistrictId(null)}
          >
            {district.name.toUpperCase()}
          </button>
        ))}

        {mapSignals.map((signal) => (
          <button
            key={signal.id}
            type="button"
            className={`${styles.node} ${signal.size === "large" ? styles.nodeLarge : ""} ${
              signal.size === "medium" ? styles.nodeMedium : ""
            } ${getCategoryClass(signal.category)} ${
              selectedDistrictId === signal.districtId ? styles.nodeSelected : ""
            } ${isDistrictActive(signal.districtId) ? styles.nodeActive : ""} ${
              isCategoryMuted(signal.category, signal.districtId) ? styles.nodeMuted : ""
            }`}
            style={{ left: `${signal.x}%`, top: `${signal.y}%` }}
            aria-label={`Select ${getDistrictById(signal.districtId)?.name ?? "district"} signal: ${signal.title}, ${signal.status}`}
            aria-pressed={selectedDistrictId === signal.districtId}
            onClick={() => selectDistrict(signal.districtId)}
            onMouseEnter={() => setHoveredDistrictId(signal.districtId)}
            onMouseLeave={() => setHoveredDistrictId(null)}
          >
            <span>{signal.title}</span>
          </button>
        ))}
      </div>

      {selectedDistrict ? (
        <section
          className={styles.detailPanel}
          aria-label={`${selectedDistrict.name} District Pulse`}
          style={{
            "--card-x": `${selectedDistrict.popover.x}%`,
            "--card-y": `${selectedDistrict.popover.y}%`,
            "--card-offset-x": selectedDistrict.popover.offsetX,
            "--card-offset-y": selectedDistrict.popover.offsetY,
          } as CSSProperties}
        >
          <div className={styles.detailHeader}>
            <p>District Pulse</p>
            <button
              type="button"
              className={styles.closeDetail}
              aria-label="Close selected district"
              onClick={() => setSelectedDistrictId(null)}
            >
              <X size={15} aria-hidden="true" />
            </button>
          </div>
          <h3>{selectedDistrict.name}</h3>
          <strong>{selectedDistrict.pulse}</strong>
          <span className={styles.detailDescription}>{selectedDistrict.description}</span>
          <p className={styles.detailStatsLine}>{getStatsLine(selectedDistrict)}</p>
          <div className={styles.signalCard}>
            <p>Selected Signal</p>
            <b>{selectedDistrict.featuredSignal.title}</b>
          </div>
          <a className={styles.detailCta} href={`#${selectedDistrict.id}`}>
            View signals <ArrowRight size={15} aria-hidden="true" />
          </a>
        </section>
      ) : null}

      <div className={styles.zoom}>
        <span aria-live="polite">{zoomLabels[mapZoomLevel]}</span>
        <button
          type="button"
          aria-label="Zoom in map"
          onClick={() => setMapZoomLevel((currentLevel) => Math.min(currentLevel + 1, 2))}
        >
          <Plus size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Zoom out map"
          onClick={() => setMapZoomLevel((currentLevel) => Math.max(currentLevel - 1, 0))}
        >
          <Minus size={18} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
