import React from "react";
import { Highlights } from "./Highlights.jsx";
import { Link } from "react-router-dom";
const sections = [
  {
    id: "janmashtami",
    name: "Krishna Janmashtami",
    emoji: "🦚",
    colors: "from-indigo-50 to-indigo-100",
  },
  {
    id: "independence",
    name: "Independence Day",
    emoji: "🇮🇳",
    colors: "from-emerald-50 to-emerald-100",
  },
  {
    id: "raksha",
    name: "Raksha Bandhan",
    emoji: "🎁",
    colors: "from-sky-50 to-cyan-100",
  },
  {
    id: "birthday",
    name: "Birthday",
    emoji: "🎂",
    colors: "from-pink-50 to-rose-100",
  },
  {
    id: "poster",
    name: "Poster",
    emoji: "📜",
    colors: "from-amber-50 to-orange-100",
  },
  {
    id: "navratri",
    name: "Navratri",
    emoji: "🕉️",
    colors: "from-red-50 to-orange-100",
  },
  {
    id: "diwali",
    name: "Diwali",
    emoji: "🪔",
    colors: "from-yellow-50 to-amber-100",
  },
  {
    id: "holi",
    name: "Holi",
    emoji: "🎨",
    colors: "from-fuchsia-50 to-purple-100",
  },
];
export function Home() {
  return (
    <>
      <Highlights />
      <section className="mx-auto max-w-7xl px-4 py-6">
        <h2 className="text-xl font-bold">Categories</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sections.map((s) => (
            <Link
              key={s.id}
              to={`/festival/${s.id}`}
              className={`rounded-2xl border bg-gradient-to-br ${s.colors} hover:shadow-md transition p-5 flex items-center justify-between`}
            >
              <div>
                <div className="font-semibold">{s.name}</div>
                <div className="text-xs text-slate-600">
                  Tap to browse templates
                </div>
              </div>
              <div className="text-4xl">{s.emoji}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
