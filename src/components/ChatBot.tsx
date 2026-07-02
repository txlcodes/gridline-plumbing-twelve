"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { site } from "@/lib/site";

type Msg = { from: "bot" | "user"; text: string };
type Stage = "menu" | "name" | "phone" | "issue" | "done";

const quickReplies = [
  { key: "emergency", label: "🚨 Emergency" },
  { key: "book", label: "📅 Book a Visit" },
  { key: "services", label: "🔧 Services" },
  { key: "areas", label: "📍 Service Area" },
  { key: "human", label: "💬 Talk to a Human" },
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<Stage>("menu");
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: "Hi! 👋 I'm the Gridline assistant. How can we help today?" },
  ]);
  const [input, setInput] = useState("");
  const [lead, setLead] = useState({ name: "", phone: "", issue: "" });
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  const push = (m: Msg) => setMsgs((p) => [...p, m]);

  const handleQuick = (key: string) => {
    const label = quickReplies.find((q) => q.key === key)?.label ?? key;
    push({ from: "user", text: label });
    setTimeout(() => {
      switch (key) {
        case "emergency":
          push({
            from: "bot",
            text: `For urgent issues — burst pipes, major leaks, sewer backups — call us right now at ${site.phone}. We run 24/7 emergency service.`,
          });
          break;
        case "services":
          push({
            from: "bot",
            text: "We handle repipes & water lines, drain & sewer, water heaters, fixtures & remodels, leak detection, and new construction. Want to book a visit?",
          });
          break;
        case "areas":
          push({
            from: "bot",
            text: "We serve Aurora and the south Denver metro — Centennial, Parker, Littleton, Highlands Ranch, Denver, Castle Rock and nearby. Are you in the area?",
          });
          break;
        case "book":
        case "human":
          push({ from: "bot", text: "Happy to help! What's your name?" });
          setStage("name");
          break;
      }
    }, 350);
  };

  const handleSend = () => {
    const val = input.trim();
    if (!val) return;
    push({ from: "user", text: val });
    setInput("");
    setTimeout(() => {
      if (stage === "name") {
        setLead((l) => ({ ...l, name: val }));
        push({ from: "bot", text: `Thanks ${val}! What's the best phone number to reach you?` });
        setStage("phone");
      } else if (stage === "phone") {
        setLead((l) => ({ ...l, phone: val }));
        push({ from: "bot", text: "Got it. Briefly, what plumbing issue can we help with?" });
        setStage("issue");
      } else if (stage === "issue") {
        setLead((l) => ({ ...l, issue: val }));
        push({
          from: "bot",
          text: "Perfect — thanks! Our team will reach out shortly. For the fastest response you can also contact us directly below. 👇",
        });
        setStage("done");
      } else {
        push({ from: "bot", text: `Thanks! For immediate help, call us at ${site.phone}.` });
      }
    }, 350);
  };

  return (
    <>
      {/* launcher — bottom LEFT so it never collides with FloatingCall (bottom-right) */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 left-5 z-40 h-14 w-14 rounded-full bg-grad text-white shadow-lg grid place-items-center hover:scale-105 transition"
        aria-label="Open chat"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {open && (
        <div className="fixed bottom-24 left-5 z-40 w-[340px] max-w-[calc(100vw-2.5rem)] rounded-2xl bg-white shadow-2xl border border-mist overflow-hidden flex flex-col">
          <div className="bg-grad-deep text-white px-4 py-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-green-400 pulsedot" />
            <div>
              <p className="font-display font-semibold text-sm leading-tight">Gridline Plumbing</p>
              <p className="text-xs text-mist/80">Typically replies in minutes</p>
            </div>
          </div>

          <div className="flex-1 max-h-80 overflow-y-auto px-3 py-4 space-y-2 bg-fog">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm ${
                  m.from === "bot"
                    ? "bg-white text-slate rounded-tl-sm border border-mist"
                    : "bg-brand text-white ml-auto rounded-tr-sm"
                }`}
              >
                {m.text}
              </div>
            ))}

            {stage === "menu" && (
              <div className="flex flex-wrap gap-2 pt-1">
                {quickReplies.map((q) => (
                  <button
                    key={q.key}
                    onClick={() => handleQuick(q.key)}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-mist hover:border-brand hover:text-brand transition"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            )}

            {stage === "done" && (
              <div className="flex flex-col gap-2 pt-1">
                <a href={site.phoneHref} className="btn btn-primary justify-center text-sm py-2">
                  <Phone size={16} /> Call {site.phone}
                </a>
                <a href={`sms:${site.phone.replace(/[^0-9+]/g, "")}`} className="btn btn-ghost justify-center text-sm py-2">
                  <MessageCircle size={16} /> Text Us
                </a>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {stage !== "menu" && stage !== "done" && (
            <div className="p-2 border-t border-mist flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message…"
                className="flex-1 px-3 py-2 text-sm rounded-lg bg-fog outline-none focus:ring-2 focus:ring-brand/40"
              />
              <button onClick={handleSend} className="h-9 w-9 grid place-items-center rounded-lg bg-brand text-white">
                <Send size={16} />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
