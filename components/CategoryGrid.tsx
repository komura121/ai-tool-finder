import React from "react";

const CATEGORIES = [
  { name: "Writing", icon: "✏️" },
  { name: "Coding", icon: "</>" },
  { name: "Image", icon: "🖼️" },
  { name: "Video", icon: "🎬" },
  { name: "Music", icon: "🎵" },
  { name: "Productivity", icon: "🗂️" },
];

export default function CategoryGrid() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
      {CATEGORIES.map((c) => (
        <button key={c.name} className="flex flex-col items-center gap-2 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
          <span className="text-2xl" aria-hidden>
            {c.icon}
          </span>
          <span className="text-sm font-medium text-gray-700">{c.name}</span>
        </button>
      ))}
    </div>
  );
}
