import React from "react";
import { Link, useLocation } from "react-router-dom";
export function Header() {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-4xl">🎊</span>
          <span className="text-3xl font-extrabold bg-gradient-to-r from-[#FF6B35] via-[#FFD166] via-50% via-[#06D6A0] to-[#4DA8DA] text-transparent bg-clip-text">
            Festify
          </span>
        </Link>
        <nav className="text-sm text-slate-600 flex items-center gap-4">
          <Link
            className={
              pathname === "/"
                ? "text-slate-900 font-medium"
                : "hover:text-slate-900"
            }
            to="/"
          >
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}
