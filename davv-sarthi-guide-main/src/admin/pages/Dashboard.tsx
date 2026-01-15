"use client";

import { useState } from "react";
import AdminLayout from "@/admin/components/layout/AdminLayout";
import { Plus, Trash2 } from "lucide-react";

/* ================= TYPES ================= */

type Stat = {
  label: string;
  value: string;
};

type MarqueeItem = {
  text: string;
};

type ImportantDates = {
  UG: string;
  PG: string;
};

/* ================= PAGE ================= */

export default function AdminIndex() {
  /* NOTICE POPUP */
  const [noticeTitle, setNoticeTitle] = useState("Admission Notice – 2025");
  const [noticeText, setNoticeText] = useState(
    "Admissions will be conducted as per CUET guidelines and university merit rules."
  );

  /* IMPORTANT DATES */
  const [dates, setDates] = useState<ImportantDates>({
    UG: "2026-06-15",
    PG: "2026-06-30",
  });

  /* ANNOUNCEMENT BAR */
  const [announcement, setAnnouncement] = useState(
    "Admissions Open 2025 · UG & PG via CUET"
  );

  /* HERO SECTION */
  const [heroBadge, setHeroBadge] = useState("Welcome to DAVV Sarthi");
  const [heroTitle, setHeroTitle] = useState(
    "Your Journey to DAVV Starts Here"
  );
  const [heroSubtitle, setHeroSubtitle] = useState(
    "One platform to explore courses, understand eligibility, follow admission steps, and track important dates for DAVV admissions."
  );


  /* STATS */
  const [stats, setStats] = useState<Stat[]>([
    { label: "Students", value: "50,000+" },
    { label: "Courses", value: "120+" },
    { label: "NAAC Grade", value: "A+" },
  ]);

  /* MARQUEE */
  const [marquee, setMarquee] = useState<MarqueeItem[]>([
    { text: "Admissions 2025 open via CUET (UG / PG)" },
    { text: "Centralized counseling as per DAVV norms" },
    { text: "Previous year cutoffs available" },
    { text: "Document verification mandatory" },
    { text: "Merit based seat allotment" },
    { text: "Multiple counseling rounds" },
  ]);

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ================= NOTICE POPUP ================= */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Admission Notice Popup</h2>

          <div className="space-y-1">
            <label className="text-sm font-medium">Notice Title</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={noticeTitle}
              onChange={e => setNoticeTitle(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Notice Description</label>
            <textarea
              className="w-full border rounded px-3 py-2 h-20"
              value={noticeText}
              onChange={e => setNoticeText(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium">UG Last Date</label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2"
                value={dates.UG}
                onChange={e =>
                  setDates({ ...dates, UG: e.target.value })
                }
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">PG Last Date</label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2"
                value={dates.PG}
                onChange={e =>
                  setDates({ ...dates, PG: e.target.value })
                }
              />
            </div>
          </div>
        </section>

        {/* ================= ANNOUNCEMENT BAR ================= */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold">Top Announcement Bar</h2>
          <input
            className="w-full border rounded px-3 py-2"
            value={announcement}
            onChange={e => setAnnouncement(e.target.value)}
          />
        </section>

        {/* ================= HERO CONTENT ================= */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Hero Section</h2>

          <div className="space-y-1">
            <label className="text-sm font-medium">Badge Text</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={heroBadge}
              onChange={e => setHeroBadge(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Main Heading</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={heroTitle}
              onChange={e => setHeroTitle(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Sub Heading</label>
            <textarea
              className="w-full border rounded px-3 py-2 h-20"
              value={heroSubtitle}
              onChange={e => setHeroSubtitle(e.target.value)}
            />
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Stats Cards</h2>

          {stats.map((s,i)=>(
            <div key={i} className="grid grid-cols-2 gap-4">
              <input className="border rounded px-3 py-2"
                value={s.value}
                onChange={e=>{
                  const x=[...stats]; x[i].value=e.target.value; setStats(x);
                }} />
              <input className="border rounded px-3 py-2"
                value={s.label}
                onChange={e=>{
                  const x=[...stats]; x[i].label=e.target.value; setStats(x);
                }} />
            </div>
          ))}

          <button
            onClick={()=>setStats([...stats,{label:"",value:""}])}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl"
          >
            + Add Stat
          </button>
        </section>

        {/* ================= MARQUEE ================= */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Marquee Items</h2>

          {marquee.map((m,i)=>(
            <div key={i} className="flex gap-2">
              <input className="flex-1 border rounded px-3 py-2"
                value={m.text}
                onChange={e=>{
                  const x=[...marquee]; x[i].text=e.target.value; setMarquee(x);
                }} />
              <button
                className="text-red-500"
                onClick={()=>setMarquee(marquee.filter((_,idx)=>idx!==i))}
              >
                <Trash2/>
              </button>
            </div>
          ))}

          <button
            onClick={()=>setMarquee([...marquee,{text:""}])}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl"
          >
            + Add Marquee Item
          </button>
        </section>

      </div>
    </AdminLayout>
  );
}
