"use client";

import { useState } from "react";
import AdminLayout from "@/admin/components/layout/AdminLayout";
import { Plus, Trash2 } from "lucide-react";

/* ================= TYPES ================= */

type GenderCount = {
  male: number;
  female: number;
};

type Category = {
  total: GenderCount;
  filled: GenderCount;
};

type Course = {
  id: string;
  code: string;
  name: string;
  categories: {
    st: Category;
    sc: Category;
    obc: Category;
    gen: Category;
  };
  totalSeats: number;
  totalFilled: number;
};

/* ================= PAGE ================= */

export default function AdminSeatAvailability() {
  /* HEADER */
  const [title, setTitle] = useState("Counselling Updates");
  const [subtitle, setSubtitle] = useState(
    "Category & gender-wise seat status (after first counseling round)"
  );

  /* NOTICE STRIP */
  const [notice, setNotice] = useState(
    "Seat availability shown below is based on First Round of Counseling (2025). Data may change in subsequent rounds."
  );

  /* FOOT NOTE */
  const [footNote, setFootNote] = useState(
    "Note: Seat data is indicative and subject to change during counseling."
  );

  /* COURSES */
  const [courses, setCourses] = useState<Course[]>([
    {
      id: "bca",
      code: "BCA",
      name: "Bachelor of Computer Applications",
      categories: {
        st: { total: { male: 10, female: 10 }, filled: { male: 6, female: 5 } },
        sc: { total: { male: 12, female: 8 }, filled: { male: 9, female: 6 } },
        obc:{ total:{ male:20,female:15}, filled:{ male:14,female:10}},
        gen:{ total:{ male:18,female:17}, filled:{ male:11,female:9}},
      },
      totalSeats: 60,
      totalFilled: 40,
    },
  ]);

  const updateCategory = (
    ci: number,
    cat: keyof Course["categories"],
    field: "total" | "filled",
    gender: "male" | "female",
    value: number
  ) => {
    const copy = [...courses];
    copy[ci].categories[cat][field][gender] = value;
    setCourses(copy);
  };

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ================= HEADER ================= */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Page Header</h2>

          <div className="space-y-1 max-w-3xl">
            <label className="text-sm font-medium">Page Title</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-1 max-w-3xl">
            <label className="text-sm font-medium">Page Subtitle</label>
            <textarea
              className="w-full border rounded px-3 py-2 h-20"
              value={subtitle}
              onChange={e => setSubtitle(e.target.value)}
            />
          </div>
        </section>

        {/* ================= NOTICE STRIP ================= */}
        <section className="space-y-2">
          <h2 className="text-xl font-bold">Notice Strip</h2>
          <label className="text-sm font-medium">Scrolling Notice Text</label>
          <textarea
            className="w-full border rounded px-3 py-2 h-16"
            value={notice}
            onChange={e => setNotice(e.target.value)}
          />
        </section>

        {/* ================= COURSES ================= */}
        <section className="space-y-8">
          <h2 className="text-xl font-bold">Course-wise Seat Details</h2>

          {courses.map((course, ci) => (
            <div
              key={course.id}
              className="border rounded-xl p-6 space-y-6 bg-white"
            >
              {/* BASIC INFO */}
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Course Code</label>
                  <input
                    className="w-full border rounded px-2 py-1"
                    value={course.code}
                    onChange={e => {
                      const c=[...courses]; c[ci].code=e.target.value; setCourses(c);
                    }}
                  />
                </div>

                <div className="space-y-1 col-span-2">
                  <label className="text-sm font-medium">Course Name</label>
                  <input
                    className="w-full border rounded px-2 py-1"
                    value={course.name}
                    onChange={e => {
                      const c=[...courses]; c[ci].name=e.target.value; setCourses(c);
                    }}
                  />
                </div>
              </div>

              {/* CATEGORY TABLE */}
              <div className="space-y-4">
                <div className="grid grid-cols-6 text-xs font-semibold">
                  <span>Category</span>
                  <span>Total M</span>
                  <span>Total F</span>
                  <span>Filled M</span>
                  <span>Filled F</span>
                </div>

                {(["st","sc","obc","gen"] as const).map(cat => (
                  <div key={cat} className="grid grid-cols-6 gap-2 items-center">
                    <span className="uppercase font-medium">{cat}</span>

                    {(["male","female"] as const).map(g => (
                      <input
                        key={g+"t"}
                        type="number"
                        className="border rounded px-2 py-1"
                        value={course.categories[cat].total[g]}
                        onChange={e =>
                          updateCategory(ci, cat, "total", g, +e.target.value)
                        }
                      />
                    ))}

                    {(["male","female"] as const).map(g => (
                      <input
                        key={g+"f"}
                        type="number"
                        className="border rounded px-2 py-1"
                        value={course.categories[cat].filled[g]}
                        onChange={e =>
                          updateCategory(ci, cat, "filled", g, +e.target.value)
                        }
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* TOTALS */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Total Seats</label>
                  <input
                    type="number"
                    className="w-full border rounded px-2 py-1"
                    value={course.totalSeats}
                    onChange={e => {
                      const c=[...courses]; c[ci].totalSeats=+e.target.value; setCourses(c);
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium">Total Filled</label>
                  <input
                    type="number"
                    className="w-full border rounded px-2 py-1"
                    value={course.totalFilled}
                    onChange={e => {
                      const c=[...courses]; c[ci].totalFilled=+e.target.value; setCourses(c);
                    }}
                  />
                </div>
              </div>

              <button
                className="text-red-500 text-sm flex items-center gap-1"
                onClick={() =>
                  setCourses(courses.filter((_,idx)=>idx!==ci))
                }
              >
                <Trash2 size={14}/> Remove Course
              </button>
            </div>
          ))}

          <button
            onClick={() =>
              setCourses([
                ...courses,
                {
                  id: Date.now().toString(),
                  code: "",
                  name: "",
                  categories: {
                    st:{total:{male:0,female:0},filled:{male:0,female:0}},
                    sc:{total:{male:0,female:0},filled:{male:0,female:0}},
                    obc:{total:{male:0,female:0},filled:{male:0,female:0}},
                    gen:{total:{male:0,female:0},filled:{male:0,female:0}},
                  },
                  totalSeats: 0,
                  totalFilled: 0,
                },
              ])
            }
            className="bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2"
          >
            <Plus size={16}/> Add Course
          </button>
        </section>

        {/* ================= FOOT NOTE ================= */}
        <section className="space-y-2">
          <h2 className="text-xl font-bold">Footer Note</h2>
          <textarea
            className="w-full border rounded px-3 py-2 h-16"
            value={footNote}
            onChange={e => setFootNote(e.target.value)}
          />
        </section>

      </div>
    </AdminLayout>
  );
}
