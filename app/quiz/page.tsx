"use client";

import React, { useState } from "react";

type Rec = { name: string; description: string; category?: string; link: string };

export default function QuizPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Rec[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    setLoading(true);
    setError("");
    setResults([]);
    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setResults(data);
    } catch (e: any) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold">Quick Quiz</h1>
        <p className="text-gray-600 mt-1">Answer a few questions and we’ll match you to the right tools.</p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            className="rounded-xl border border-gray-400 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="What do you need AI for? (e.g. writing, coding)"
            onChange={(e) => setAnswers((s) => ({ ...s, goal: e.target.value }))}
          />
          <select className="rounded-xl border border-gray-400 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500" onChange={(e) => setAnswers((s) => ({ ...s, budget: e.target.value }))}>
            <option value="">Budget</option>
            <option value="Free">Free</option>
            <option value="Freemium">Freemium</option>
            <option value="Paid">Paid</option>
          </select>
          <select className="rounded-xl border border-gray-400 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500" onChange={(e) => setAnswers((s) => ({ ...s, level: e.target.value }))}>
            <option value="">Skill level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <button onClick={submit} disabled={loading} className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-white shadow-md transition hover:bg-indigo-700 disabled:opacity-60">
            {loading ? "Generating…" : "Get Recommendation"}
          </button>
        </div>

        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

        {results.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-4">
            {results.map((r, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100">
                <h3 className="text-lg font-bold">{r.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{r.description}</p>
                <a href={r.link} target="_blank" className="mt-3 inline-block text-indigo-600">
                  Visit
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-sm sm:-top-80">
        <div
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        ></div>
      </div>
    </main>
  );
}
