import React from "react";
import { Link, useParams } from "react-router-dom";
import { FESTIVALS } from "../festivals/index.jsx";

export function FestivalPage() {
  const { festivalId } = useParams();
  const fest = FESTIVALS.find((f) => f.id === festivalId);

  if (!fest) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-2xl font-bold">Category not found</h1>
        <Link to="/" className="text-sky-600 underline mt-4 inline-block">
          Back to home
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <div className="flex items-center gap-3">
        <div className="text-3xl">{fest.emoji}</div>
        <h1 className="text-2xl font-bold">{fest.name} — Templates</h1>
      </div>
      <p className="text-slate-600 mt-1">{fest.description}</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {fest.templates.map((t) => (
          <div
            key={t.id}
            className="rounded-2xl border bg-white overflow-hidden hover:shadow-md transition"
          >
            <div className="h-56 grid place-items-center bg-slate-50 overflow-hidden">
              <div className="transform scale-[0.32] origin-top pointer-events-none">
                {t.preview()}
              </div>
            </div>

            <div className="p-4">
              <div className="font-semibold">{t.title}</div>
              <div className="text-xs text-slate-500">
                {t.tags?.join(" • ")}
              </div>
              <div className="text-xs text-slate-600 mt-2">
                Default: “{t.defaultMessage}”
              </div>
              <Link
                to={`/edit/${fest.id}/${t.id}`}
                className="mt-3 inline-flex items-center justify-center rounded-xl px-4 py-2 bg-black text-white text-sm"
              >
                Use & Customize
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link to="/" className="text-sky-600 hover:underline">
          ← Back
        </Link>
      </div>
    </section>
  );
}
