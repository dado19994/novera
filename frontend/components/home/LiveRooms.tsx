import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { LiveRoomSummary } from "@/types/api";
import styles from "./liveRooms.module.css";

interface LiveRoomsProps {
  rooms: LiveRoomSummary[];
}

export function LiveRooms({ rooms }: LiveRoomsProps) {
  if (rooms.length === 0) {
    return <p className={styles.empty}>No live rooms returned yet.</p>;
  }

  return (
    <div className={styles.cardList}>
      {rooms.map((room) => (
        <Card key={room.id}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>{room.title}</h3>
            <Badge tone={room.district?.tone}>{room.status ?? "room"}</Badge>
          </div>
          {room.topic ? <p className={styles.bodyText}>{room.topic}</p> : null}
          <p className={styles.meta}>
            {room.listeners_count ?? 0} listeners · {room.speakers_count ?? 0}{" "}
            speakers
          </p>
        </Card>
      ))}
    </div>
  );
}
