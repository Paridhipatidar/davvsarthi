import { useState } from "react";
import AdminLayout from  "../components/layout/AdminLayout";
import { Plus, Trash2, Save } from "lucide-react";

/* ================= TYPES ================= */

type ReservationRule = {
  id: number;
  category: string;          // SC / ST / OBC / EWS / PwD / UR
  percentage: number;        // Reservation %
  domicile: string;          // MP / All India
  applicableFor: string;     // UG / Integrated / All
  notes: string;             // PDF notes
};

/* ================= INITIAL DATA (FROM PDF) ================= */

const initialReservations: ReservationRule[] = [
  {
    id: 1,
    category: "Scheduled Caste (SC)",
    percentage: 16,
    domicile: "Madhya Pradesh",
    applicableFor: "All Programmes",
    notes: "As per MP Government rules",
  },
  {
    id: 2,
    category: "Scheduled Tribe (ST)",
    percentage: 20,
    domicile: "Madhya Pradesh",
    applicableFor: "All Programmes",
    notes: "Applicable to MP domicile candidates only",
  },
  {
    id: 3,
    category: "Other Backward Class (OBC)",
    percentage: 14,
    domicile: "Madhya Pradesh",
    applicableFor: "All Programmes",
    notes: "Non-creamy layer only",
  },
  {
    id: 4,
    category: "Economically Weaker Section (EWS)",
    percentage: 10,
    domicile: "All India",
    applicableFor: "All Programmes",
    notes: "As per Government of India norms",
  },
  {
    id: 5,
    category: "Persons with Disabilities (PwD)",
    percentage: 5,
    domicile: "All India",
    applicableFor: "All Programmes",
    notes: "Horizontal reservation",
  },
];

/* ================= COMPONENT ================= */

const Reservation = () => {
  const [rules, setRules] =
    useState<ReservationRule[]>(initialReservations);

  /* ---------- HANDLERS ---------- */

  const updateRule = (
    id: number,
    field: keyof ReservationRule,
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
        category: "",
        percentage: 0,
        domicile: "",
        applicableFor: "",
        notes: "",
      },
    ]);
  };

  const deleteRule = (id: number) => {
    setRules(rules.filter((r) => r.id !== id));
  };

  const saveReservation = () => {
    console.log("Reservation Policy:", rules);
    alert("Reservation policy saved successfully!");
  };

  return (
    <AdminLayout>
      <div className="space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold">Reservation Policy</h1>
          <p className="text-sm text-muted-foreground">
            Category-wise reservation as per CUET-UG admission brochure
          </p>
        </div>

        {/* RESERVATION TABLE */}
        <div className="bg-card border rounded-xl p-5 overflow-x-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Reservation Rules</h2>
            <button
              onClick={addRule}
              className="flex items-center gap-1 text-sm"
            >
              <Plus size={16} /> Add Category
            </button>
          </div>

          <table className="w-full text-sm border-collapse border">
            <thead className="bg-muted">
              <tr>
                <th className="border p-2">Category</th>
                <th className="border p-2">Reservation %</th>
                <th className="border p-2">Domicile</th>
                <th className="border p-2">Applicable For</th>
                <th className="border p-2">Notes</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {rules.map((rule) => (
                <tr key={rule.id}>
                  <td className="border p-2">
                    <input
                      value={rule.category}
                      onChange={(e) =>
                        updateRule(rule.id, "category", e.target.value)
                      }
                      className="border p-1 w-full"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      type="number"
                      value={rule.percentage}
                      onChange={(e) =>
                        updateRule(
                          rule.id,
                          "percentage",
                          Number(e.target.value)
                        )
                      }
                      className="border p-1 w-24"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      value={rule.domicile}
                      onChange={(e) =>
                        updateRule(rule.id, "domicile", e.target.value)
                      }
                      className="border p-1 w-full"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      value={rule.applicableFor}
                      onChange={(e) =>
                        updateRule(
                          rule.id,
                          "applicableFor",
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
          onClick={saveReservation}
          className="flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-lg"
        >
          <Save size={16} /> Save Reservation Policy
        </button>

        {/* NOTE */}
        <p className="text-xs text-muted-foreground">
          Note: Reservation percentages are applied as per applicable
          Government and University regulations.
        </p>
      </div>
    </AdminLayout>
  );
};

export default Reservation;
