import { useState } from "react";
import AdminLayout from  "../components/layout/AdminLayout";
import { Plus, Trash2, Save } from "lucide-react";

/* ================= TYPES ================= */

type Instruction = {
  id: number;
  text: string;
};

/* ================= INITIAL DATA (FROM PDF) ================= */

const initialInstructions: Instruction[] = [
  {
    id: 1,
    text: "Admission will be strictly based on CUET (UG) 2025 score and merit.",
  },
  {
    id: 2,
    text: "Candidates must register separately on the University counseling portal.",
  },
  {
    id: 3,
    text: "All admissions are provisional and subject to document verification.",
  },
  {
    id: 4,
    text: "If a candidate fails to report within the prescribed time, their claim for admission will be forfeited.",
  },
  {
    id: 5,
    text: "Fees once paid will not be refunded under any circumstances.",
  },
  {
    id: 6,
    text: "The University reserves the right to modify or cancel any admission process without prior notice.",
  },
  {
    id: 7,
    text: "Candidates must produce original documents at the time of verification.",
  },
];

/* ================= COMPONENT ================= */

const Instructions = () => {
  const [instructions, setInstructions] =
    useState<Instruction[]>(initialInstructions);

  /* ---------- HANDLERS ---------- */

  const updateInstruction = (id: number, value: string) => {
    setInstructions((prev) =>
      prev.map((inst) =>
        inst.id === id ? { ...inst, text: value } : inst
      )
    );
  };

  const addInstruction = () => {
    setInstructions([
      ...instructions,
      {
        id: Date.now(),
        text: "",
      },
    ]);
  };

  const deleteInstruction = (id: number) => {
    setInstructions(instructions.filter((inst) => inst.id !== id));
  };

  const saveInstructions = () => {
    console.log("Instructions:", instructions);
    alert("Instructions updated successfully!");
  };

  return (
    <AdminLayout>
      <div className="space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold">Admission Instructions</h1>
          <p className="text-sm text-muted-foreground">
            Important instructions and guidelines for CUET (UG) admissions
          </p>
        </div>

        {/* INSTRUCTIONS LIST */}
        <div className="bg-card border rounded-xl p-5 space-y-4">
          {instructions.map((inst, index) => (
            <div
              key={inst.id}
              className="flex items-start gap-3"
            >
              <span className="font-semibold text-muted-foreground">
                {index + 1}.
              </span>

              <textarea
                value={inst.text}
                onChange={(e) =>
                  updateInstruction(inst.id, e.target.value)
                }
                className="flex-1 border rounded-md p-2 text-sm"
                rows={2}
                placeholder="Enter instruction text"
              />

              <button
                onClick={() => deleteInstruction(inst.id)}
                className="text-destructive mt-1"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}

          <button
            onClick={addInstruction}
            className="flex items-center gap-1 text-sm text-primary"
          >
            <Plus size={16} /> Add Instruction
          </button>
        </div>

        {/* SAVE */}
        <button
          onClick={saveInstructions}
          className="flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-lg"
        >
          <Save size={16} /> Save Instructions
        </button>

        {/* NOTE */}
        <p className="text-xs text-muted-foreground">
          Note: These instructions will be displayed to candidates exactly as
          configured here.
        </p>
      </div>
    </AdminLayout>
  );
};

export default Instructions;
