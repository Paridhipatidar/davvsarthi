import { useState } from "react";
import AdminLayout from  "../components/layout/AdminLayout";
import { Plus, Trash2, Save, ArrowUp, ArrowDown } from "lucide-react";

/* ================= TYPES ================= */

type MeritRule = {
  id: number;
  group: string;          // B / C / D / E / F
  priority: number;       // Order of application
  rule: string;           // Rule description
  remarks: string;        // PDF notes
};

/* ================= INITIAL DATA (FROM PDF) ================= */

const initialMeritRules: MeritRule[] = [
  {
    id: 1,
    group: "B",
    priority: 1,
    rule: "Higher CUET (UG) aggregate score",
    remarks: "Primary merit criteria",
  },
  {
    id: 2,
    group: "B",
    priority: 2,
    rule: "Higher score in English",
    remarks: "Tie-breaking rule",
  },
  {
    id: 3,
    group: "B",
    priority: 3,
    rule: "Older candidate preferred",
    remarks: "Based on Date of Birth",
  },

  {
    id: 4,
    group: "C",
    priority: 1,
    rule: "Higher CUET aggregate in PCM subjects",
    remarks: "Physics, Chemistry, Mathematics",
  },
  {
    id: 5,
    group: "C",
    priority: 2,
    rule: "Higher score in Mathematics",
    remarks: "Tie-breaker",
  },
  {
    id: 6,
    group: "C",
    priority: 3,
    rule: "Older candidate preferred",
    remarks: "DOB comparison",
  },
];

/* ================= COMPONENT ================= */

const MeritRules = () => {
  const [rules, setRules] = useState<MeritRule[]>(initialMeritRules);

  /* ---------- HELPERS ---------- */

  const updateRule = (
    id: number,
    field: keyof MeritRule,
    value: string | number
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
        priority: 1,
        rule: "",
        remarks: "",
      },
    ]);
  };

  const deleteRule = (id: number) => {
    setRules(rules.filter((r) => r.id !== id));
  };

  const moveRule = (id: number, direction: "up" | "down") => {
    const index = rules.findIndex((r) => r.id === id);
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === rules.length - 1)
    )
      return;

    const updated = [...rules];
    const swapIndex = direction === "up" ? index - 1 : index + 1;

    [updated[index], updated[swapIndex]] = [
      updated[swapIndex],
      updated[index],
    ];

    setRules(updated);
  };

  const saveMeritRules = () => {
    console.log("Merit Rules:", rules);
    alert("Merit rules saved successfully!");
  };

  return (
    <AdminLayout>
      <div className="space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold">Merit Rules</h1>
          <p className="text-sm text-muted-foreground">
            Group-wise merit and tie-breaking rules as per CUET-UG admission brochure
          </p>
        </div>

        {/* MERIT RULES TABLE */}
        <div className="bg-card border rounded-xl p-5 overflow-x-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Merit Rule Configuration</h2>
            <button
              onClick={addRule}
              className="flex items-center gap-1 text-sm"
            >
              <Plus size={16} /> Add Rule
            </button>
          </div>

          <table className="w-full text-sm border-collapse border">
            <thead className="bg-muted">
              <tr>
                <th className="border p-2">Group</th>
                <th className="border p-2">Priority</th>
                <th className="border p-2">Merit Rule</th>
                <th className="border p-2">Remarks</th>
                <th className="border p-2">Order</th>
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

                  <td className="border p-2 text-center">
                    <input
                      type="number"
                      value={rule.priority}
                      onChange={(e) =>
                        updateRule(
                          rule.id,
                          "priority",
                          Number(e.target.value)
                        )
                      }
                      className="border p-1 w-16 text-center"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      value={rule.rule}
                      onChange={(e) =>
                        updateRule(rule.id, "rule", e.target.value)
                      }
                      className="border p-1 w-full"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      value={rule.remarks}
                      onChange={(e) =>
                        updateRule(rule.id, "remarks", e.target.value)
                      }
                      className="border p-1 w-full"
                    />
                  </td>

                  <td className="border p-2 text-center space-x-1">
                    <button onClick={() => moveRule(rule.id, "up")}>
                      <ArrowUp size={14} />
                    </button>
                    <button onClick={() => moveRule(rule.id, "down")}>
                      <ArrowDown size={14} />
                    </button>
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
          onClick={saveMeritRules}
          className="flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-lg"
        >
          <Save size={16} /> Save Merit Rules
        </button>

        {/* NOTE */}
        <p className="text-xs text-muted-foreground">
          Note: Merit rules are applied sequentially in the order defined above
          during counseling and seat allotment.
        </p>
      </div>
    </AdminLayout>
  );
};

export default MeritRules;
