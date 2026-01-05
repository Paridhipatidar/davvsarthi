import Layout from "@/components/layout/Layout";

/* ================= TYPES ================= */

type AdmissionStep = {
  id: number;
  title: string;
  description: string;
};

/* ================= SAME DATA (READ-ONLY) ================= */

const admissionSteps: AdmissionStep[] = [
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

/* ================= COMPONENT ================= */

const AdmissionProcess = () => {
  return (
    <Layout>
      <div className="space-y-10">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Admission Process (CUET-UG)
          </h1>
          <p className="text-muted-foreground mt-2">
            Step-by-step admission workflow for DAVV programmes
          </p>
        </div>

        {/* STEPS */}
        <div className="space-y-6">
          {admissionSteps.map((step, index) => (
            <div
              key={step.id}
              className="bg-card border rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold">
                  {step.title}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* NOTE */}
        <div className="text-xs text-muted-foreground text-center">
          Note: Admission timelines and procedures are subject to change as per
          University and Government notifications.
        </div>

      </div>
    </Layout>
  );
};

export default AdmissionProcess;
