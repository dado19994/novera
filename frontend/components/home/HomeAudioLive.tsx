import { Badge } from "@/components/ui/Badge";
import type { LiveRoomSummary } from "@/types/api";
import styles from "./homeAudioLive.module.css";

interface HomeAudioLiveProps {
  rooms: LiveRoomSummary[];
}

export function HomeAudioLive({ rooms }: HomeAudioLiveProps) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Audio live</p>
          <h2>Rooms broadcasting now</h2>
        </div>
        <span>{rooms.length} rooms</span>
      </div>

      <div className={styles.roomGrid}>
        {rooms.slice(0, 3).map((room) => (
          <article className={styles.roomCard} key={room.id}>
            <div className={styles.wave} aria-hidden="true">
              {Array.from({ length: 12 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>
            <div className={styles.roomCopy}>
              <div className={styles.roomTop}>
                <h3>{room.title}</h3>
                <Badge tone="audio">{room.status ?? "room"}</Badge>
              </div>
              {room.topic ? <p>{room.topic}</p> : null}
              <small>
                {room.listeners_count ?? 0} listeners ·{" "}
                {room.speakers_count ?? 0} speakers
              </small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
