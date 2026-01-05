import { useState } from "react";
import AdminLayout from  "../components/layout/AdminLayout";
import { Plus, Trash2, Save } from "lucide-react";

/* ================= TYPES ================= */

type Program = {
  id: number;
  group: string;           // B / C / D / E / F
  name: string;            // Programme name
  duration: string;        // 3 / 4 / 5 Years
  cuetSubjects: string;    // Subject mapping
};

/* ================= INITIAL DATA (FROM PDF) ================= */

const initialPrograms: Program[] = [
  // ---------- GROUP B ----------
  {
    id: 1,
    group: "B",
    name: "M.B.A. (Management Science)",
    duration: "5 Years",
    cuetSubjects: "English, General Aptitude Test",
  },
  {
    id: 2,
    group: "B",
    name: "M.B.A. (Tourism)",
    duration: "5 Years",
    cuetSubjects: "English, General Aptitude Test",
  },
  {
    id: 3,
    group: "B",
    name: "B.Com. (Hons.)",
    duration: "4 Years",
    cuetSubjects: "English, General Aptitude Test",
  },

  // ---------- GROUP C ----------
  {
    id: 4,
    group: "C",
    name: "M.Tech. (IT) Integrated Dual Degree",
    duration: "5 Years",
    cuetSubjects: "English, Physics, Chemistry, Mathematics",
  },
  {
    id: 5,
    group: "C",
    name: "M.C.A.",
    duration: "5 Years",
    cuetSubjects: "English, Physics, Chemistry, Mathematics",
  },

  // ---------- GROUP D ----------
  {
    id: 6,
    group: "D",
    name: "B.C.A.",
    duration: "3 / 4 Years",
    cuetSubjects: "English, Physics, Mathematics",
  },

  // ---------- GROUP E ----------
  {
    id: 7,
    group: "E",
    name: "B.Pharm",
    duration: "4 Years",
    cuetSubjects: "English, Physics, Chemistry, Mathematics / Biology",
  },

  // ---------- GROUP F ----------
  {
    id: 8,
    group: "F",
    name: "M.B.A. (Hospital Administration)",
    duration: "5 Years",
    cuetSubjects: "English, Physics, Chemistry, Biology",
  },
];

/* ================= COMPONENT ================= */

const Programs = () => {
  const [programs, setPrograms] = useState<Program[]>(initialPrograms);

  const updateProgram = (
    id: number,
    field: keyof Program,
    value: string
  ) => {
    setPrograms((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, [field]: value } : p
      )
    );
  };

  const addProgram = () => {
    setPrograms([
      ...programs,
      {
        id: Date.now(),
        group: "",
        name: "",
        duration: "",
        cuetSubjects: "",
      },
    ]);
  };

  const removeProgram = (id: number) => {
    setPrograms(programs.filter((p) => p.id !== id));
  };

  const savePrograms = () => {
    console.log("CUET Program Mapping:", programs);
    alert("Programs & CUET subject mapping saved successfully!");
  };

  return (
    <AdminLayout>
      <div className="space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold">Programs & CUET Subject Mapping</h1>
          <p className="text-sm text-muted-foreground">
            Manage group-wise programmes and CUET (UG) 2025 subject requirements
          </p>
        </div>

        {/* TABLE */}
        <div className="bg-card border rounded-xl p-5 overflow-x-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Programme Configuration</h2>
            <button
              onClick={addProgram}
              className="flex items-center gap-1 text-sm"
            >
              <Plus size={16} /> Add Programme
            </button>
          </div>

          <table className="w-full text-sm border-collapse border">
            <thead className="bg-muted">
              <tr>
                <th className="border p-2">Group</th>
                <th className="border p-2">Programme Name</th>
                <th className="border p-2">Duration</th>
                <th className="border p-2">CUET (UG) Subjects</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {programs.map((p) => (
                <tr key={p.id}>
                  <td className="border p-2">
                    <input
                      value={p.group}
                      onChange={(e) =>
                        updateProgram(p.id, "group", e.target.value)
                      }
                      className="border p-1 w-12 text-center"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      value={p.name}
                      onChange={(e) =>
                        updateProgram(p.id, "name", e.target.value)
                      }
                      className="border p-1 w-full"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      value={p.duration}
                      onChange={(e) =>
                        updateProgram(p.id, "duration", e.target.value)
                      }
                      className="border p-1 w-full"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      value={p.cuetSubjects}
                      onChange={(e) =>
                        updateProgram(p.id, "cuetSubjects", e.target.value)
                      }
                      className="border p-1 w-full"
                    />
                  </td>

                  <td className="border p-2 text-center">
                    <button
                      onClick={() => removeProgram(p.id)}
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
          onClick={savePrograms}
          className="flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-lg"
        >
          <Save size={16} /> Save Program Mapping
        </button>
      </div>
    </AdminLayout>
  );
};

export default Programs;
