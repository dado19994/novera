import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { OpenCallSummary } from "@/types/api";
import styles from "./openCalls.module.css";

interface OpenCallsProps {
  openCalls: OpenCallSummary[];
}

export function OpenCalls({ openCalls }: OpenCallsProps) {
  if (openCalls.length === 0) {
    return <p className={styles.empty}>No open calls returned yet.</p>;
  }

  return (
    <div className={styles.cardList}>
      {openCalls.map((openCall) => (
        <Card key={openCall.id}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>{openCall.title}</h3>
            <Badge tone={openCall.district?.tone}>
              {openCall.status ?? "open"}
            </Badge>
          </div>
          <p className={styles.bodyText}>
            {openCall.role_needed ?? "Role needed"}
          </p>
          <p className={styles.meta}>
            {openCall.urgency ?? "listed"}
            {openCall.district?.name ? ` · ${openCall.district.name}` : ""}
          </p>
        </Card>
      ))}
    </div>
  );
}
