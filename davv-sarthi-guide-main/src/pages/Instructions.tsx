import Layout from "@/components/layout/Layout";

/* ================= TYPES ================= */

type Instruction = {
  id: number;
  text: string;
};

/* ================= SAME DATA (READ-ONLY) ================= */

const instructions: Instruction[] = [
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
  return (
    <Layout>
      <div className="space-y-10 max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Admission Instructions
          </h1>
          <p className="text-muted-foreground mt-2">
            Important guidelines for CUET (UG) admission process
          </p>
        </div>

        {/* INSTRUCTION LIST */}
        <div className="bg-card border rounded-xl p-6 space-y-4">
          {instructions.map((inst, index) => (
            <div
              key={inst.id}
              className="flex items-start gap-4"
            >
              <span className="font-semibold text-primary">
                {index + 1}.
              </span>
              <p className="text-muted-foreground leading-relaxed">
                {inst.text}
              </p>
            </div>
          ))}
        </div>

        {/* NOTE */}
        <p className="text-xs text-muted-foreground text-center">
          Note: Candidates are advised to read all instructions carefully before
          proceeding with counseling and admission.
        </p>

      </div>
    </Layout>
  );
};

export default Instructions;
