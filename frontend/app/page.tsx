import { getHomeData } from "@/lib/api";
import type {
  ActivitySummary,
  EventSummary,
  LiveRoomSummary,
  OpenCallSummary,
} from "@/types/api";

function EmptyState({ label }: { label: string }) {
  return <p className="text-sm text-zinc-500">No {label} returned yet.</p>;
}

function EventList({ events }: { events: EventSummary[] }) {
  if (events.length === 0) {
    return <EmptyState label="featured events" />;
  }

  return (
    <ul className="space-y-2">
      {events.map((event) => (
        <li key={event.id} className="border-b border-zinc-200 pb-2">
          <strong>{event.title}</strong>
          <span className="ml-2 text-sm text-zinc-600">
            {event.type ?? "event"} · {event.status ?? "unknown"}
          </span>
        </li>
      ))}
    </ul>
  );
}

function LiveRoomList({ rooms }: { rooms: LiveRoomSummary[] }) {
  if (rooms.length === 0) {
    return <EmptyState label="live rooms" />;
  }

  return (
    <ul className="space-y-2">
      {rooms.map((room) => (
        <li key={room.id} className="border-b border-zinc-200 pb-2">
          <strong>{room.title}</strong>
          <span className="ml-2 text-sm text-zinc-600">
            {room.status ?? "unknown"} · {room.listeners_count ?? 0} listeners
          </span>
          {room.topic ? <p className="text-sm text-zinc-600">{room.topic}</p> : null}
        </li>
      ))}
    </ul>
  );
}

function OpenCallList({ openCalls }: { openCalls: OpenCallSummary[] }) {
  if (openCalls.length === 0) {
    return <EmptyState label="open calls" />;
  }

  return (
    <ul className="space-y-2">
      {openCalls.map((openCall) => (
        <li key={openCall.id} className="border-b border-zinc-200 pb-2">
          <strong>{openCall.title}</strong>
          <span className="ml-2 text-sm text-zinc-600">
            {openCall.role_needed ?? "role"} · {openCall.status ?? "unknown"}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ActivityList({ activities }: { activities: ActivitySummary[] }) {
  if (activities.length === 0) {
    return <EmptyState label="activities" />;
  }

  return (
    <ul className="space-y-2">
      {activities.map((activity) => (
        <li key={activity.id} className="border-b border-zinc-200 pb-2">
          <strong>{activity.title}</strong>
          {activity.description ? (
            <p className="text-sm text-zinc-600">{activity.description}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default async function Home() {
  let homeData;

  try {
    homeData = await getHomeData();
  } catch (error) {
    const details = error instanceof Error ? error.message : "Unknown error";

    return (
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-4 px-6 py-12">
        <h1 className="text-3xl font-semibold">Novera API Connection</h1>
        <div className="border border-red-200 bg-red-50 p-4 text-red-900">
          <p>
            Unable to load Novera API. Make sure Laravel is running on
            http://127.0.0.1:8000.
          </p>
          <p className="mt-2 text-sm">{details}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-6 py-12">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-zinc-500">
          Diagnostic page
        </p>
        <h1 className="text-3xl font-semibold">Novera API Connection</h1>
        <p className="text-zinc-600">
          Connected city: <strong>{homeData.city.name}</strong>
        </p>
      </header>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Stats</h2>
        <dl className="grid gap-3 sm:grid-cols-4">
          {Object.entries(homeData.stats).map(([label, value]) => (
            <div key={label} className="border border-zinc-200 p-3">
              <dt className="text-sm text-zinc-500">{label}</dt>
              <dd className="text-2xl font-semibold">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Featured Events</h2>
        <EventList events={homeData.featured_events} />
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Live Rooms</h2>
        <LiveRoomList rooms={homeData.live_rooms} />
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Open Calls</h2>
        <OpenCallList openCalls={homeData.open_calls} />
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Activities</h2>
        <ActivityList activities={homeData.activities} />
      </section>
    </main>
  );
}
