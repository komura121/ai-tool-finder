"use client";

import React from "react";

type Item = {
  name: string;
  description: string;
  badge: string;
  link: string;
  logo?: React.ReactNode;
};

const FEATURED: Item[] = [
  {
    name: "Jasper",
    description: "AI copywriter for brainstorming writing",
    badge: "Writing",
    link: "#",
    logo: <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-blue-100 text-lg">🙂</span>,
  },
  {
    name: "Copy.ai",
    description: "Generate marketing copy in seconds",
    badge: "Writing",
    link: "#",
    logo: <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white text-sm font-semibold">copy.ai</div>,
  },
  {
    name: "Writesonic",
    description: "AI writing assistant for long-form content",
    badge: "Writing",
    link: "#",
    logo: <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm font-bold">ws</div>,
  },
];

export default function FeaturedGrid() {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
      {FEATURED.map((tool) => (
        <div key={tool.name} className="group rounded-3xl bg-white p-6 shadow-xl ring-1 ring-gray-100 transition hover:shadow-xl">
          <div className="flex items-center gap-3">
            {tool.logo}
            <h3 className="text-xl font-bold">{tool.name}</h3>
          </div>
          <p className="mt-3 text-sm text-gray-600">{tool.description}</p>
          <span className="mt-4 inline-flex w-fit items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">{tool.badge}</span>
          <a href={tool.link} className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-white shadow-md transition hover:bg-indigo-700">
            Visit
          </a>
        </div>
      ))}
    </div>
  );
}
