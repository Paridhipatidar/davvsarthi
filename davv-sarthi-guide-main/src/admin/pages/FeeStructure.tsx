import { useState } from "react";
import AdminLayout from  "../components/layout/AdminLayout";
import { Plus, Trash2, Save } from "lucide-react";

/* ================= TYPES ================= */

type ProgramFee = {
  id: number;
  group: string;
  program: string;
  duration: string;
  feePerYear: number | string;
};

type StudentServiceFee = {
  id: number;
  head: string;
  oddBoys: number;
  oddGirls: number;
  evenBoys: number;
  evenGirls: number;
};

/* ================= INITIAL DATA ================= */

const initialProgramFees: ProgramFee[] = [
  { id: 1, group: "B", program: "MBA (E-Commerce)", duration: "5 Years", feePerYear: 69636 },
  { id: 2, group: "B", program: "B.Com (Hons.)", duration: "4 Years", feePerYear: 56100 },
  { id: 3, group: "C", program: "MCA", duration: "5 Years", feePerYear: 89100 },
];

const initialStudentServiceFees: StudentServiceFee[] = [
  {
    id: 1,
    head: "University Tuition Fee",
    oddBoys: 220,
    oddGirls: 0,
    evenBoys: 220,
    evenGirls: 0,
  },
  {
    id: 2,
    head: "Health Centre",
    oddBoys: 200,
    oddGirls: 200,
    evenBoys: 200,
    evenGirls: 200,
  },
];

/* ================= COMPONENT ================= */

const FeeStructure = () => {
  const [programFees, setProgramFees] = useState(initialProgramFees);
  const [studentFees, setStudentFees] = useState(initialStudentServiceFees);

  const [otherFees, setOtherFees] = useState({
    cautionMoney: 4000,
    examFee: 5500,
    lawExamFee: 5750,
    alumniFee: 500,
    nriFeeUSD: 3500,
  });

  /* ---------- HANDLERS ---------- */

  const updateProgramFee = (id: number, field: keyof ProgramFee, value: string) => {
    setProgramFees((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const updateStudentFee = (
    id: number,
    field: keyof StudentServiceFee,
    value: number
  ) => {
    setStudentFees((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const addProgramFee = () => {
    setProgramFees([
      ...programFees,
      {
        id: Date.now(),
        group: "",
        program: "",
        duration: "",
        feePerYear: "",
      },
    ]);
  };

  const removeProgramFee = (id: number) => {
    setProgramFees(programFees.filter((row) => row.id !== id));
  };

  const addStudentFee = () => {
    setStudentFees([
      ...studentFees,
      {
        id: Date.now(),
        head: "",
        oddBoys: 0,
        oddGirls: 0,
        evenBoys: 0,
        evenGirls: 0,
      },
    ]);
  };

  const removeStudentFee = (id: number) => {
    setStudentFees(studentFees.filter((row) => row.id !== id));
  };

  const saveAll = () => {
    console.log({
      programFees,
      studentFees,
      otherFees,
    });
    alert("Fee Structure saved successfully!");
  };

  return (
    <AdminLayout>
      <div className="space-y-10">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold">Fee Structure</h1>
          <p className="text-sm text-muted-foreground">
            Admin-editable fee configuration (as per CUET-UG brochure)
          </p>
        </div>

        {/* ================= PROGRAM FEES ================= */}
        <section className="bg-card border rounded-xl p-5 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Programme-wise Fees</h2>
            <button onClick={addProgramFee} className="flex gap-1 text-sm">
              <Plus size={16} /> Add Program
            </button>
          </div>

          <table className="w-full text-sm border">
            <thead className="bg-muted">
              <tr>
                <th className="border p-2">Group</th>
                <th className="border p-2">Program</th>
                <th className="border p-2">Duration</th>
                <th className="border p-2">Fee / Year</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {programFees.map((row) => (
                <tr key={row.id}>
                  <td className="border p-2">
                    <input value={row.group}
                      onChange={(e) => updateProgramFee(row.id, "group", e.target.value)}
                      className="border p-1 w-full" />
                  </td>
                  <td className="border p-2">
                    <input value={row.program}
                      onChange={(e) => updateProgramFee(row.id, "program", e.target.value)}
                      className="border p-1 w-full" />
                  </td>
                  <td className="border p-2">
                    <input value={row.duration}
                      onChange={(e) => updateProgramFee(row.id, "duration", e.target.value)}
                      className="border p-1 w-full" />
                  </td>
                  <td className="border p-2">
                    <input value={row.feePerYear}
                      onChange={(e) => updateProgramFee(row.id, "feePerYear", e.target.value)}
                      className="border p-1 w-full" />
                  </td>
                  <td className="border p-2 text-center">
                    <button onClick={() => removeProgramFee(row.id)}>
                      <Trash2 size={16} className="text-destructive" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ================= STUDENT SERVICE FEES ================= */}
        <section className="bg-card border rounded-xl p-5 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Student Service Fees</h2>
            <button onClick={addStudentFee} className="flex gap-1 text-sm">
              <Plus size={16} /> Add Fee Head
            </button>
          </div>

          <table className="w-full text-sm border">
            <thead className="bg-muted">
              <tr>
                <th className="border p-2">Head</th>
                <th className="border p-2">Odd Boys</th>
                <th className="border p-2">Odd Girls</th>
                <th className="border p-2">Even Boys</th>
                <th className="border p-2">Even Girls</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {studentFees.map((row) => (
                <tr key={row.id}>
                  <td className="border p-2">
                    <input value={row.head}
                      onChange={(e) => updateStudentFee(row.id, "head", e.target.value as any)}
                      className="border p-1 w-full" />
                  </td>
                  {(["oddBoys", "oddGirls", "evenBoys", "evenGirls"] as const).map((field) => (
                    <td key={field} className="border p-2">
                      <input type="number" value={row[field]}
                        onChange={(e) => updateStudentFee(row.id, field, Number(e.target.value))}
                        className="border p-1 w-full" />
                    </td>
                  ))}
                  <td className="border p-2 text-center">
                    <button onClick={() => removeStudentFee(row.id)}>
                      <Trash2 size={16} className="text-destructive" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ================= OTHER FEES ================= */}
        <section className="bg-card border rounded-xl p-5 space-y-3">
          <h2 className="font-semibold">Other Mandatory Fees</h2>

          {Object.entries(otherFees).map(([key, value]) => (
            <div key={key} className="flex gap-4 items-center">
              <label className="w-64 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="number"
                value={value}
                onChange={(e) =>
                  setOtherFees({ ...otherFees, [key]: Number(e.target.value) })
                }
                className="border p-2 w-40"
              />
            </div>
          ))}
        </section>

        {/* SAVE */}
        <button
          onClick={saveAll}
          className="flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-lg"
        >
          <Save size={16} /> Save Fee Structure
        </button>
      </div>
    </AdminLayout>
  );
};

export default FeeStructure;
