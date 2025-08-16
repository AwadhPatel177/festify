import React from "react";
import { Link } from "react-router-dom";
const items = [
  {
    id: "janmashtami",
    title: "Krishna Janmashtami",
    subtitle: "Shubh Janmashtami",
    gradient: "from-indigo-400 to-indigo-600",
    emoji: "🦚",
  },
  {
    id: "independence",
    title: "Independence Day",
    subtitle: "15 August",
    gradient: "from-emerald-400 to-emerald-600",
    emoji: "🇮🇳",
  },
];
export function Highlights() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-bold">Highlights</h2>
        <Link
          to="/festival/janmashtami"
          className="text-sm text-sky-600 hover:underline"
        >
          See all
        </Link>
      </div>
      <div className="mt-4 flex gap-4 overflow-x-auto pb-2 snap-x">
        {items.map((x) => (
          <Link
            to={`/festival/${x.id}`}
            key={x.id}
            className={`min-w-[80%] sm:min-w-[48%] lg:min-w-[32%] snap-start rounded-2xl px-6 py-5 text-white bg-gradient-to-br ${x.gradient} shadow-md hover:shadow-lg transition`}
          >
            <div className="text-4xl">{x.emoji}</div>
            <div className="mt-2 text-2xl font-bold">{x.title}</div>
            <div className="opacity-90 text-xs">{x.subtitle}</div>
            <div className="mt-5 inline-flex items-center gap-2 text-xs bg-white/20 rounded-full px-3 py-1 hover:">
              Browse templates →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
