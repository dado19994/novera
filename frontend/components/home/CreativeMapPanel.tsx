import { ArrowRight, Minus, Plus } from "lucide-react";
import styles from "./creativeMapPanel.module.css";

const labels = [
  { name: "SAN LORENZO", x: 70, y: 14, tone: "violet" },
  { name: "PIGNETO", x: 83, y: 21, tone: "magenta" },
  { name: "CENTRO", x: 57, y: 48, tone: "hot" },
  { name: "OSTIENSE", x: 36, y: 54, tone: "violet" },
  { name: "TRASTEVERE", x: 30, y: 86, tone: "violet" },
  { name: "TESTACCIO", x: 76, y: 72, tone: "amber" },
];

interface CreativeMapPanelProps {
  cityName: string;
}

export function CreativeMapPanel({ cityName }: CreativeMapPanelProps) {
  return (
    <article className={styles.panel}>
      <div className={styles.copy}>
        <p>{cityName.toUpperCase()}</p>
        <h2>CREATIVE MAP</h2>
        <strong>The city is the canvas.</strong>
        <span>Explore live rooms, spaces and open calls nearby.</span>
        <ul className={styles.legend} aria-label="Map legend">
          <li>
            <i className={styles.venues} /> Spaces
          </li>
          <li>
            <i className={styles.artists} /> Artists
          </li>
          <li>
            <i className={styles.collectives} /> Collectives
          </li>
          <li>
            <i className={styles.events} /> Events
          </li>
        </ul>
        <a className={styles.locations} href="#locations">
          VIEW ALL LOCATIONS <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>

      <div className={styles.map} aria-hidden="true">
        <svg className={styles.routes} viewBox="0 0 720 500" role="img">
          <path d="M72 392 C170 266 250 244 344 188 C438 132 530 86 652 62" />
          <path d="M110 108 C205 154 315 96 426 148 C548 206 596 310 673 368" />
          <path d="M94 456 C210 332 334 378 420 264 C492 170 586 144 650 196" />
          <path d="M248 76 C304 150 292 274 378 350 C450 410 536 384 646 422" />
          <path d="M392 52 C390 148 464 196 466 302 C468 378 430 420 398 468" />
          <path d="M34 246 C144 218 216 156 314 188 C410 220 500 286 684 288" />
          <path d="M30 304 L690 108" />
          <path d="M144 44 L620 456" />
          <path d="M196 468 L664 238" />
        </svg>
        <span className={styles.pulse} />
        {labels.map((label) => (
          <span
            key={label.name}
            className={`${styles.label} ${styles[label.tone as keyof typeof styles]}`}
            style={{ left: `${label.x}%`, top: `${label.y}%` }}
          >
            {label.name}
          </span>
        ))}
        <span className={`${styles.node} ${styles.nodeLarge}`} />
        <span className={`${styles.node} ${styles.nodeA}`} />
        <span className={`${styles.node} ${styles.nodeB}`} />
        <span className={`${styles.node} ${styles.nodeC}`} />
        <span className={`${styles.node} ${styles.nodeD}`} />
      </div>

      <div className={styles.zoom} aria-hidden="true">
        <button type="button">
          <Plus size={18} />
        </button>
        <button type="button">
          <Minus size={18} />
        </button>
      </div>
    </article>
  );
}
