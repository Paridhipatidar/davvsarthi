import { useState } from "react";
import AdminLayout from  "../components/layout/AdminLayout";
import { Plus, Trash2, Save } from "lucide-react";

/* ================= TYPES ================= */

type CutoffRecord = {
  id: number;
  year: string;
  course: string;
  department: string;
  category: string;
  lastRank: string;
  admitted: string; // Yes / No
};

/* ================= INITIAL DATA ================= */

const initialCutoffs: CutoffRecord[] = [
  // ---------- 2023 ----------
  { id: 1, year: "2023", course: "M.Tech IT", department: "IT", category: "UR-O", lastRank: "74", admitted: "Yes" },
  { id: 2, year: "2023", course: "M.Tech IT", department: "IT", category: "UR-F", lastRank: "146", admitted: "Yes" },
  { id: 3, year: "2023", course: "M.Tech AI & DS", department: "CS", category: "UR-O", lastRank: "93", admitted: "Yes" },
  { id: 4, year: "2023", course: "M.Tech AI & DS", department: "CS", category: "UR-F", lastRank: "197", admitted: "Yes" },
  { id: 5, year: "2023", course: "MCA", department: "Computer Applications", category: "UR-O", lastRank: "346", admitted: "Yes" },
  { id: 6, year: "2023", course: "MCA", department: "Computer Applications", category: "UR-F", lastRank: "538", admitted: "Yes" },

  // ---------- 2025 ----------
  { id: 7, year: "2025", course: "MBA (Management Science)", department: "Management", category: "UR-O", lastRank: "250", admitted: "Yes" },
  { id: 8, year: "2025", course: "MBA (Finance)", department: "Management", category: "UR-O", lastRank: "200", admitted: "Yes" },
  { id: 9, year: "2025", course: "MBA (E-Commerce)", department: "Management", category: "UR-O", lastRank: "220", admitted: "Yes" },
  { id: 10, year: "2025", course: "MBA (Tourism)", department: "Tourism", category: "UR-O", lastRank: "180", admitted: "Yes" },

  { id: 11, year: "2025", course: "MBA (Management Science)", department: "Management", category: "OBC", lastRank: "350", admitted: "Yes" },
  { id: 12, year: "2025", course: "MBA (Finance)", department: "Management", category: "OBC", lastRank: "370", admitted: "Yes" },
  { id: 13, year: "2025", course: "BBA (Business Decision)", department: "Management", category: "OBC", lastRank: "470", admitted: "Yes" },
  { id: 14, year: "2025", course: "BBA (Aviation)", department: "Aviation Studies", category: "OBC", lastRank: "800", admitted: "Yes" },
  { id: 15, year: "2025", course: "MCA", department: "Computer Applications", category: "OBC", lastRank: "300", admitted: "Yes" },
];

/* ================= COMPONENT ================= */

const PreviousYearCutoffs = () => {
  const [cutoffs, setCutoffs] = useState<CutoffRecord[]>(initialCutoffs);

  const updateCutoff = (
    id: number,
    field: keyof CutoffRecord,
    value: string
  ) => {
    setCutoffs((prev) =>
      prev.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const addRecord = () => {
    setCutoffs([
      ...cutoffs,
      {
        id: Date.now(),
        year: "",
        course: "",
        department: "",
        category: "",
        lastRank: "",
        admitted: "Yes",
      },
    ]);
  };

  const deleteRecord = (id: number) => {
    setCutoffs(cutoffs.filter((row) => row.id !== id));
  };

  const saveCutoffs = () => {
    console.log("Saved Cutoff Data:", cutoffs);
    alert("Previous year cutoff data saved successfully");
  };

  return (
    <AdminLayout>
      <div className="space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-xl font-bold">
            Previous Year Admission Cut-offs
          </h1>
          <p className="text-sm text-muted-foreground">
            Historical cutoff ranks (for reference only)
          </p>
        </div>

        {/* DISCLAIMER */}
        <div className="border border-yellow-600 bg-yellow-50 p-3 text-xs">
          <strong>Disclaimer:</strong> The cutoff ranks displayed are based on
          previous admission cycles and are provided only for reference.
          Cutoffs may vary each year depending on seat availability and merit.
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border">
            <thead className="bg-muted">
              <tr>
                <th className="border px-2 py-2">Year</th>
                <th className="border px-2 py-2">Course</th>
                <th className="border px-2 py-2">Department</th>
                <th className="border px-2 py-2">Category</th>
                <th className="border px-2 py-2">Last Rank</th>
                <th className="border px-2 py-2">Admitted</th>
                <th className="border px-2 py-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {cutoffs.map((row) => (
                <tr key={row.id}>
                  {(
                    ["year", "course", "department", "category", "lastRank", "admitted"] as (keyof CutoffRecord)[]
                  ).map((field) => (
                    <td key={field} className="border px-2 py-1">
                      <input
                        value={row[field]}
                        onChange={(e) =>
                          updateCutoff(row.id, field, e.target.value)
                        }
                        className="border px-1 py-1 w-full"
                      />
                    </td>
                  ))}

                  <td className="border px-2 py-1 text-center">
                    <button
                      onClick={() => deleteRecord(row.id)}
                      className="text-destructive"
                    >
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3">
          <button onClick={addRecord} className="border px-3 py-2 text-sm">
            <Plus size={14} /> Add Record
          </button>

          <button onClick={saveCutoffs} className="border px-4 py-2 text-sm">
            <Save size={14} /> Save Cutoffs
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PreviousYearCutoffs;
