"use client";

import { useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import AdminLayout from "@/admin/components/layout/AdminLayout";
import { Plus, Search, Pencil, Trash2, X } from "lucide-react";

/* ================= TYPES ================= */

interface Course {
  id: string;
  code: string;
  name: string;
  group: string;
  duration: string;
  academicYear: string;
  cuetSubjects: string;
  remarks?: string;
  totalSeats: number;
  filledSeats: number;
  sortOrder: number;
}

/* ================= DATA ================= */

const initialCourses: Course[] = [
  {
    id: "bca",
    code: "BCA",
    name: "Bachelor of Computer Applications",
    group: "D",
    duration: "3 / 4 Years",
    academicYear: "2025-26",
    cuetSubjects: "English, Physics, Mathematics",
    remarks: "Multiple exit option available",
    totalSeats: 120,
    filledSeats: 45,
    sortOrder: 1,
  },
];

/* ================= MODAL (PORTAL) ================= */

const CourseEditor = ({
  course,
  onSave,
  onClose,
}: {
  course: Course;
  onSave: (course: Course) => void;
  onClose: () => void;
}) => {
  const [form, setForm] = useState<Course>(course);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const update = (k: keyof Course, v: any) =>
    setForm({ ...form, [k]: v });

  if (!mounted) return null;

return createPortal(
  <div className="fixed inset-0 z-[9999] bg-black/50">
    {/* wrapper below navbar */}
    <div className="absolute inset-0 pt-16 flex justify-center">
      <div className="bg-white w-full max-w-3xl h-[calc(100vh-4rem)] rounded-t-2xl shadow-xl flex flex-col">

        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-bold">Edit Course</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* ================= BODY ================= */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-10">

          {/* BASIC INFORMATION */}
          <section className="space-y-4">
            <h3 className="font-semibold text-base">Basic Information</h3>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Course Code
                </label>
                <input
                  className="input"
                  value={form.code}
                  onChange={e => update("code", e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Course Name
                </label>
                <input
                  className="input"
                  value={form.name}
                  onChange={e => update("name", e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Group
                </label>
                <input
                  className="input"
                  value={form.group}
                  onChange={e => update("group", e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Duration
                </label>
                <input
                  className="input"
                  value={form.duration}
                  onChange={e => update("duration", e.target.value)}
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Academic Year
                </label>
                <input
                  className="input"
                  value={form.academicYear}
                  onChange={e => update("academicYear", e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* SEATS */}
          <section className="space-y-4">
            <h3 className="font-semibold text-base">Seats</h3>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Total Seats
                </label>
                <input
                  type="number"
                  className="input"
                  value={form.totalSeats}
                  onChange={e => update("totalSeats", +e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Filled Seats
                </label>
                <input
                  type="number"
                  className="input"
                  value={form.filledSeats}
                  onChange={e => update("filledSeats", +e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* STUDENT VISIBLE CONTENT */}
          <section className="space-y-4">
            <h3 className="font-semibold text-base">
              Student Visible Content
            </h3>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  CUET Subjects
                </label>
                <textarea
                  className="input h-28 resize-none"
                  value={form.cuetSubjects}
                  onChange={e => update("cuetSubjects", e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Remarks
                </label>
                <textarea
                  className="input h-28 resize-none"
                  value={form.remarks}
                  onChange={e => update("remarks", e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* DISPLAY */}
          <section className="space-y-4">
            <h3 className="font-semibold text-base">Display</h3>

            <div className="max-w-xs">
              <label className="block text-sm font-medium mb-1">
                Sort Order
              </label>
              <input
                type="number"
                className="input"
                value={form.sortOrder}
                onChange={e => update("sortOrder", +e.target.value)}
              />
            </div>
          </section>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="border-t px-6 py-4 bg-white">
          <button
            onClick={() => onSave(form)}
            className="w-full rounded-xl bg-blue-600 py-3 text-white font-medium text-base"
          >
            Save Course
          </button>
        </div>
      </div>
    </div>
  </div>,
  document.body
);

};

/* ================= PAGE ================= */

export default function AdminCourses() {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<Course | null>(null);

  const filteredCourses = useMemo(
    () =>
      courses
        .filter(c =>
          JSON.stringify(c).toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => a.sortOrder - b.sortOrder),
    [search, courses]
  );

  return (
  <AdminLayout>
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Courses Management</h1>

        <button
          onClick={() =>
            setEditing({
              id: crypto.randomUUID(),
              code: "",
              name: "",
              group: "",
              duration: "",
              academicYear: "",
              cuetSubjects: "",
              remarks: "",
              totalSeats: 0,
              filledSeats: 0,
              sortOrder: courses.length + 1,
            })
          }
          className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-xl text-white"
        >
          <Plus size={16} /> Add Course
        </button>
      </div>

      {/* SEARCH */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <input
          className="w-full rounded-xl border px-10 py-2 text-sm"
          placeholder="Search anything..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="p-3">Order</th>
              <th className="p-3">Code</th>
              <th className="p-3">Name</th>
              <th className="p-3">Group</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Academic Year</th>
              <th className="p-3">Seats</th>
              <th className="p-3">CUET Subjects</th>
              <th className="p-3">Remarks</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredCourses.map((course) => (
              <tr key={course.id} className="border-t align-top">

                <td className="p-3 text-center">
                  {course.sortOrder}
                </td>

                <td className="p-3 font-semibold">
                  {course.code}
                </td>

                <td className="p-3">
                  {course.name}
                </td>

                <td className="p-3 text-center">
                  {course.group}
                </td>

                <td className="p-3">
                  {course.duration}
                </td>

                <td className="p-3">
                  {course.academicYear}
                </td>

                <td className="p-3 text-center">
                  {course.filledSeats}/{course.totalSeats}
                </td>

                <td className="p-3 max-w-xs">
                  {course.cuetSubjects}
                </td>

                <td className="p-3 max-w-xs italic">
                  {course.remarks}
                </td>

                <td className="p-3">
                  <div className="flex justify-center gap-2">
                    <button onClick={() => setEditing(course)}>
                      <Pencil size={16} />
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() =>
                        setCourses((c) =>
                          c.filter((x) => x.id !== course.id)
                        )
                      }
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {editing && (
        <CourseEditor
          course={editing}
          onClose={() => setEditing(null)}
          onSave={(updated) => {
            setCourses((c) =>
              c.some((x) => x.id === updated.id)
                ? c.map((x) =>
                    x.id === updated.id ? updated : x
                  )
                : [...c, updated]
            );
            setEditing(null);
          }}
        />
      )}
    </div>
  </AdminLayout>
);
}