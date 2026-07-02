"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/site";
import Reveal from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 bg-white">
      <div className="container-x max-w-3xl">
        <Reveal className="text-center">
          <span className="kicker justify-center">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Questions, answered.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 50}>
                <div className="card overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-display font-semibold text-ink">{f.q}</span>
                    <span className="shrink-0 h-8 w-8 rounded-lg bg-brand/10 grid place-items-center text-brand">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-steel leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
