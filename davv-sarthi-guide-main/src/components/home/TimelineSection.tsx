import { CheckCircle } from "lucide-react";

const DARK_BLUE = "#0B3C5D";

const timelineSteps = [
  {
    step: 1,
    title: "CUET (UG) Result Declaration",
    description:
      "National Testing Agency (NTA) declares CUET (UG) results for the academic session.",
  },
  {
    step: 2,
    title: "Registration for Counseling",
    description:
      "Eligible candidates register online for DAVV counseling through the official portal.",
  },
  {
    step: 3,
    title: "Merit List Declaration",
    description:
      "University publishes merit list based on CUET (UG) score and eligibility criteria.",
  },
  {
    step: 4,
    title: "Choice Filling & Locking",
    description:
      "Candidates select and lock their preferred programs within the given timeline.",
  },
  {
    step: 5,
    title: "Program Allotment",
    description:
      "Programs are allotted based on merit rank, preferences, and seat availability.",
  },
  {
    step: 6,
    title: "Document Verification",
    description:
      "Shortlisted candidates report for centralized document verification at DAVV.",
  },
  {
    step: 7,
    title: "Fee Submission & Admission Confirmation",
    description:
      "Candidates complete admission by paying the prescribed fee within the deadline.",
  },
];

const TimelineSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background blur */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2"
        style={{ backgroundColor: `${DARK_BLUE}14` }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl translate-y-1/2"
        style={{ backgroundColor: `${DARK_BLUE}14` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: `${DARK_BLUE}1A`, color: DARK_BLUE }}
          >
            <CheckCircle className="w-4 h-4" />
            Admission Workflow
          </div>

          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: DARK_BLUE }}
          >
            Admission Process Timeline
          </h2>

          <p className="text-lg" style={{ color: `${DARK_BLUE}B3` }}>
            Follow these steps carefully to complete your admission at DAVV through CUET (UG).
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: `${DARK_BLUE}33` }}
          />

          <div className="space-y-10">
            {timelineSteps.map((item) => (
              <div key={item.step} className="relative flex gap-6">
                {/* Dot */}
                <div
                  className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full font-semibold text-sm"
                  style={{
                    backgroundColor: DARK_BLUE,
                    color: "white",
                  }}
                >
                  {item.step}
                </div>

                {/* Card */}
                <div
                  className="bg-white rounded-2xl p-6 border w-full shadow-sm hover:shadow-md transition-shadow"
                  style={{ borderColor: `${DARK_BLUE}1F` }}
                >
                  <h3
                    className="font-display text-lg font-semibold mb-2"
                    style={{ color: DARK_BLUE }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: `${DARK_BLUE}99` }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-14 text-sm" style={{ color: `${DARK_BLUE}99` }}>
          Note: Admission timelines and procedures are subject to change as per
          University and Government notifications.
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

