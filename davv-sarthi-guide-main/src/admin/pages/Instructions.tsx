"use client";

import { useState } from "react";
import AdminLayout from "@/admin/components/layout/AdminLayout";
import { Plus, Trash2 } from "lucide-react";

/* ================= TYPES ================= */

type AdmissionStatus = "completed" | "ongoing" | "upcoming";

type AdmissionStep = {
  id: number;
  title: string;
  description: string;
  status: AdmissionStatus;
};

type Instruction = {
  id: number;
  text: string;
};

type MeritRule = {
  priority: number;
  text: string;
};

type MeritGroup = {
  id: number;
  group: string;
  rules: MeritRule[];
};

/* ================= PAGE ================= */

export default function AdminAdmissions() {
  /* HEADER */
  const [pageTitle, setPageTitle] = useState("Admissions Overview");
  const [pageDescription, setPageDescription] = useState(
    "Complete admission process, important instructions, and merit determination rules for CUET (UG) admissions"
  );

  /* ADMISSION PROCESS */
  const [steps, setSteps] = useState<AdmissionStep[]>([
    {
      id: 1,
      title: "CUET (UG) Result Declaration",
      description:
        "Declaration of CUET (UG) result by the National Testing Agency (NTA).",
      status: "ongoing",
    },
  ]);

  /* INSTRUCTIONS */
  const [instructions, setInstructions] = useState<Instruction[]>([
    { id: 1, text: "Admission is strictly based on CUET (UG) merit." },
  ]);

  /* MERIT RULES */
  const [meritGroups, setMeritGroups] = useState<MeritGroup[]>([
    {
      id: 1,
      group: "Group B",
      rules: [
        { priority: 1, text: "Higher CUET (UG) aggregate score" },
        { priority: 2, text: "Higher score in English" },
      ],
    },
  ]);

  /* FOOT NOTE */
  const [footNote, setFootNote] = useState(
    "Note: Admission procedures and merit rules are subject to change as per University and Government notifications."
  );

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ================= PAGE HEADER ================= */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Page Header</h2>

          <div className="space-y-1 max-w-3xl">
            <label className="text-sm font-medium">Page Title</label>
            <input
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={pageTitle}
              onChange={(e) => setPageTitle(e.target.value)}
            />
          </div>

          <div className="space-y-1 max-w-3xl">
            <label className="text-sm font-medium">Page Description</label>
            <textarea
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={pageDescription}
              onChange={(e) => setPageDescription(e.target.value)}
            />
          </div>
        </section>

        {/* ================= ADMISSION PROCESS ================= */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold">Admission Process</h2>

          {steps.map((step, index) => (
            <div
              key={step.id}
              className="border rounded-xl p-6 space-y-4 bg-white"
            >
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 space-y-1">
                  <label className="text-sm font-medium">Step Title</label>
                  <input
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    value={step.title}
                    onChange={(e) =>
                      setSteps(s =>
                        s.map((x, i) =>
                          i === index ? { ...x, title: e.target.value } : x
                        )
                      )
                    }
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium">Status</label>
                  <select
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    value={step.status}
                    onChange={(e) =>
                      setSteps(s =>
                        s.map((x, i) =>
                          i === index
                            ? { ...x, status: e.target.value as AdmissionStatus }
                            : x
                        )
                      )
                    }
                  >
                    <option value="completed">Completed</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="upcoming">Upcoming</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">Description</label>
                <textarea
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-1 focus:ring-blue-600"
                  value={step.description}
                  onChange={(e) =>
                    setSteps(s =>
                      s.map((x, i) =>
                        i === index
                          ? { ...x, description: e.target.value }
                          : x
                      )
                    )
                  }
                />
              </div>

              <button
                className="text-red-500 text-sm flex items-center gap-1"
                onClick={() =>
                  setSteps(s => s.filter((_, i) => i !== index))
                }
              >
                <Trash2 size={14} /> Remove Step
              </button>
            </div>
          ))}

          <button
            onClick={() =>
              setSteps(s => [
                ...s,
                {
                  id: Date.now(),
                  title: "",
                  description: "",
                  status: "upcoming",
                },
              ])
            }
            className="bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2"
          >
            <Plus size={16} /> Add Step
          </button>
        </section>

        {/* ================= IMPORTANT INSTRUCTIONS ================= */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold">Important Instructions</h2>

          {instructions.map((inst, index) => (
            <div key={inst.id} className="flex gap-3">
              <textarea
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm h-16 resize-none focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={inst.text}
                onChange={(e) =>
                  setInstructions(i =>
                    i.map((x, idx) =>
                      idx === index ? { ...x, text: e.target.value } : x
                    )
                  )
                }
              />
              <button
                className="text-red-500"
                onClick={() =>
                  setInstructions(i =>
                    i.filter((_, idx) => idx !== index)
                  )
                }
              >
                <Trash2 />
              </button>
            </div>
          ))}

          <button
            onClick={() =>
              setInstructions(i => [
                ...i,
                { id: Date.now(), text: "" },
              ])
            }
            className="bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2"
          >
            <Plus size={16} /> Add Instruction
          </button>
        </section>

        {/* ================= MERIT RULES ================= */}
        {/* ================= MERIT RULES ================= */}
<section className="space-y-6">
  <h2 className="text-xl font-bold">Merit Determination Rules</h2>

  {meritGroups.map((group, gIndex) => (
    <div
      key={group.id}
      className="border rounded-xl p-6 space-y-5 bg-white"
    >
      {/* GROUP HEADER */}
      <div className="flex items-center justify-between gap-4">
        <input
          className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-blue-600"
          value={group.group}
          onChange={(e) =>
            setMeritGroups(m =>
              m.map((g, i) =>
                i === gIndex ? { ...g, group: e.target.value } : g
              )
            )
          }
        />

        <button
          className="text-red-500 text-sm"
          onClick={() =>
            setMeritGroups(m => m.filter((_, i) => i !== gIndex))
          }
        >
          Delete Group
        </button>
      </div>

      {/* RULES */}
      <div className="space-y-3">
        {group.rules.map((rule, rIndex) => (
          <div key={rIndex} className="flex gap-3 items-center">
            <input
              type="number"
              className="w-20 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={rule.priority}
              onChange={(e) =>
                setMeritGroups(m =>
                  m.map((g, i) =>
                    i === gIndex
                      ? {
                          ...g,
                          rules: g.rules.map((r, j) =>
                            j === rIndex
                              ? { ...r, priority: +e.target.value }
                              : r
                          ),
                        }
                      : g
                  )
                )
              }
            />

            <input
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={rule.text}
              onChange={(e) =>
                setMeritGroups(m =>
                  m.map((g, i) =>
                    i === gIndex
                      ? {
                          ...g,
                          rules: g.rules.map((r, j) =>
                            j === rIndex
                              ? { ...r, text: e.target.value }
                              : r
                          ),
                        }
                      : g
                  )
                )
              }
            />

            <button
              className="text-red-500"
              onClick={() =>
                setMeritGroups(m =>
                  m.map((g, i) =>
                    i === gIndex
                      ? {
                          ...g,
                          rules: g.rules.filter((_, j) => j !== rIndex),
                        }
                      : g
                  )
                )
              }
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* ADD RULE */}
      <button
        onClick={() =>
          setMeritGroups(m =>
            m.map((g, i) =>
              i === gIndex
                ? {
                    ...g,
                    rules: [
                      ...g.rules,
                      {
                        priority: g.rules.length + 1,
                        text: "",
                      },
                    ],
                  }
                : g
            )
          )
        }
        className="text-blue-600 text-sm font-medium"
      >
        + Add Rule
      </button>
    </div>
  ))}

  {/* ADD GROUP */}
  <button
    onClick={() =>
      setMeritGroups(m => [
        ...m,
        {
          id: Date.now(),
          group: "New Group",
          rules: [{ priority: 1, text: "" }],
        },
      ])
    }
    className="bg-blue-600 text-white px-4 py-2 rounded-xl"
  >
    + Add Merit Group
  </button>
</section>

        {/* ================= FOOT NOTE ================= */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Foot Note</h2>
          <textarea
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm h-16 resize-none focus:outline-none focus:ring-1 focus:ring-blue-600"
            value={footNote}
            onChange={(e) => setFootNote(e.target.value)}
          />
        </section>

      </div>
    </AdminLayout>
  );
}
