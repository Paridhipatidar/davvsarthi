import { useState } from "react";
import AdminLayout from  "../components/layout/AdminLayout";
import { Plus, Trash2, Save } from "lucide-react";

/**
 * AdmissionProcess (Admin Editable)
 * Based on CUET (UG) Admission Brochure
 */

type AdmissionStep = {
  id: number;
  title: string;
  description: string;
};

const initialSteps: AdmissionStep[] = [
  {
    id: 1,
    title: "CUET (UG) Result Declaration",
    description:
      "Declaration of CUET (UG) 2025 result by National Testing Agency (NTA).",
  },
  {
    id: 2,
    title: "Registration for Counseling",
    description:
      "Eligible candidates register online for DAVV counseling through the official portal.",
  },
  {
    id: 3,
    title: "Merit List Declaration",
    description:
      "Merit list prepared based on CUET (UG) score as per group-wise criteria.",
  },
  {
    id: 4,
    title: "Choice Filling",
    description:
      "Candidates fill and lock their program preferences online.",
  },
  {
    id: 5,
    title: "Program Allotment",
    description:
      "Allotment of programs based on merit, preferences, and seat availability.",
  },
  {
    id: 6,
    title: "Document Verification",
    description:
      "Candidates report to the University for centralized document verification.",
  },
  {
    id: 7,
    title: "Fee Submission",
    description:
      "Selected candidates submit admission fees within the prescribed timeline.",
  },
];

const AdmissionProcess = () => {
  const [steps, setSteps] = useState<AdmissionStep[]>(initialSteps);

  // Update step field
  const updateStep = (
    id: number,
    field: keyof AdmissionStep,
    value: string
  ) => {
    setSteps((prev) =>
      prev.map((step) =>
        step.id === id ? { ...step, [field]: value } : step
      )
    );
  };

  // Add new step
  const addStep = () => {
    const newId = steps.length + 1;
    setSteps([
      ...steps,
      {
        id: newId,
        title: "New Admission Step",
        description: "Enter step description",
      },
    ]);
  };

  // Delete step
  const deleteStep = (id: number) => {
    setSteps(steps.filter((step) => step.id !== id));
  };

  // Save (backend-ready)
  const saveChanges = () => {
    console.log("Saved Admission Steps:", steps);
    alert("Admission process updated successfully!");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* PAGE HEADER */}
        <div>
          <h1 className="text-2xl font-bold">Admission Process</h1>
          <p className="text-sm text-muted-foreground">
            Admin can update CUET (UG) admission workflow steps
          </p>
        </div>

        {/* STEPS LIST */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="bg-card border rounded-xl p-5 space-y-3"
            >
              {/* Step Header */}
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">
                  Step {index + 1}
                </h3>
                <button
                  onClick={() => deleteStep(step.id)}
                  className="text-destructive hover:opacity-80"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              {/* Title Input */}
              <input
                type="text"
                value={step.title}
                onChange={(e) =>
                  updateStep(step.id, "title", e.target.value)
                }
                className="w-full border rounded-md p-2 text-sm"
                placeholder="Step Title"
              />

              {/* Description Input */}
              <textarea
                value={step.description}
                onChange={(e) =>
                  updateStep(step.id, "description", e.target.value)
                }
                className="w-full border rounded-md p-2 text-sm"
                rows={3}
                placeholder="Step Description"
              />
            </div>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3">
          <button
            onClick={addStep}
            className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-accent"
          >
            <Plus className="h-4 w-4" />
            Add Step
          </button>

          <button
            onClick={saveChanges}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>

        {/* ADMIN NOTE */}
        <p className="text-xs text-muted-foreground">
          Note: Changes made here will reflect in the published admission
          information.
        </p>
      </div>
    </AdminLayout>
  );
};

export default AdmissionProcess;
