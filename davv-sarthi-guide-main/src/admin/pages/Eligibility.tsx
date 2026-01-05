import { useState } from "react";
import AdminLayout from  "../components/layout/AdminLayout";
import { Plus, Trash2, Save } from "lucide-react";

/* ================= TYPES ================= */

type EligibilityRule = {
  id: number;
  group: string;              // B / C / D / E / F
  qualification: string;      // 10+2 / Equivalent
  cuetSubjects: string;       // CUET subject mapping
  minimumCriteria: string;    // % / rule
  notes: string;              // NEP / Special conditions
};

/* ================= INITIAL DATA (FROM PDF) ================= */

const initialRules: EligibilityRule[] = [
  {
    id: 1,
    group: "B",
    qualification: "10+2 or equivalent",
    cuetSubjects: "English + General Aptitude Test",
    minimumCriteria: "As per CUET-UG score",
    notes: "Applicable for Management, Commerce and Arts programs",
  },
  {
    id: 2,
    group: "C",
    qualification: "10+2 with Science stream",
    cuetSubjects: "English, Physics, Chemistry, Mathematics",
    minimumCriteria: "Mathematics compulsory",
    notes: "Integrated & Dual Degree programs",
  },
  {
    id: 3,
    group: "D",
    qualification: "10+2 with Mathematics",
    cuetSubjects: "English, Physics, Mathematics",
    minimumCriteria: "Mathematics mandatory",
    notes: "NEP-2020 multiple exit option",
  },
  {
    id: 4,
    group: "E",
    qualification: "10+2 with PCB / PCM",
    cuetSubjects: "English, Physics, Chemistry, Mathematics / Biology",
    minimumCriteria: "Biology allowed in place of Mathematics",
    notes: "Pharmacy programs",
  },
  {
    id: 5,
    group: "F",
    qualification: "10+2 with PCB",
    cuetSubjects: "English, Physics, Chemistry, Biology",
    minimumCriteria: "Biology compulsory",
    notes: "Hospital Administration programs",
  },
];

/* ================= COMPONENT ================= */

const Eligibility = () => {
  const [rules, setRules] = useState<EligibilityRule[]>(initialRules);

  /* ---------- HANDLERS ---------- */

  const updateRule = (
    id: number,
    field: keyof EligibilityRule,
    value: string
  ) => {
    setRules((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, [field]: value } : r
      )
    );
  };

  const addRule = () => {
    setRules([
      ...rules,
      {
        id: Date.now(),
        group: "",
        qualification: "",
        cuetSubjects: "",
        minimumCriteria: "",
        notes: "",
      },
    ]);
  };

  const deleteRule = (id: number) => {
    setRules(rules.filter((r) => r.id !== id));
  };

  const saveEligibility = () => {
    console.log("Eligibility Rules Saved:", rules);
    alert("Eligibility criteria updated successfully!");
  };

  return (
    <AdminLayout>
      <div className="space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold">Eligibility Criteria</h1>
          <p className="text-sm text-muted-foreground">
            Admin-managed group-wise eligibility rules (CUET UG)
          </p>
        </div>

        {/* ELIGIBILITY TABLE */}
        <div className="bg-card border rounded-xl p-5 overflow-x-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Group-wise Eligibility</h2>
            <button
              onClick={addRule}
              className="flex items-center gap-1 text-sm"
            >
              <Plus size={16} /> Add Group Rule
            </button>
          </div>

          <table className="w-full text-sm border-collapse border">
            <thead className="bg-muted">
              <tr>
                <th className="border p-2">Group</th>
                <th className="border p-2">Qualification</th>
                <th className="border p-2">CUET Subjects</th>
                <th className="border p-2">Minimum Criteria</th>
                <th className="border p-2">Notes</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {rules.map((rule) => (
                <tr key={rule.id}>
                  <td className="border p-2 text-center">
                    <input
                      value={rule.group}
                      onChange={(e) =>
                        updateRule(rule.id, "group", e.target.value)
                      }
                      className="border p-1 w-12 text-center"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      value={rule.qualification}
                      onChange={(e) =>
                        updateRule(
                          rule.id,
                          "qualification",
                          e.target.value
                        )
                      }
                      className="border p-1 w-full"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      value={rule.cuetSubjects}
                      onChange={(e) =>
                        updateRule(
                          rule.id,
                          "cuetSubjects",
                          e.target.value
                        )
                      }
                      className="border p-1 w-full"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      value={rule.minimumCriteria}
                      onChange={(e) =>
                        updateRule(
                          rule.id,
                          "minimumCriteria",
                          e.target.value
                        )
                      }
                      className="border p-1 w-full"
                    />
                  </td>

                  <td className="border p-2">
                    <textarea
                      value={rule.notes}
                      onChange={(e) =>
                        updateRule(rule.id, "notes", e.target.value)
                      }
                      className="border p-1 w-full"
                      rows={2}
                    />
                  </td>

                  <td className="border p-2 text-center">
                    <button
                      onClick={() => deleteRule(rule.id)}
                      className="text-destructive"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SAVE */}
        <button
          onClick={saveEligibility}
          className="flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-lg"
        >
          <Save size={16} /> Save Eligibility Rules
        </button>

        {/* NOTE */}
        <p className="text-xs text-muted-foreground">
          Note: Eligibility rules apply uniformly to all CUET (UG) candidates.
        </p>
      </div>
    </AdminLayout>
  );
};

export default Eligibility;
