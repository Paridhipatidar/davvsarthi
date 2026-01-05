import {
  BookOpen,
  ClipboardCheck,
  Calendar,
  FileText,
  CreditCard,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const DARK_BLUE = "#0B3C5D";

const features = [
  {
    icon: BookOpen,
    title: "Courses & Programs",
    description: "Explore 120+ undergraduate and postgraduate programs across various disciplines.",
    link: "/courses",
  },
  {
    icon: ClipboardCheck,
    title: "Eligibility Criteria",
    description: "Check detailed eligibility requirements for each course and verify your qualifications.",
    link: "/eligibility",
  },
  {
    icon: Calendar,
    title: "Important Dates",
    description: "Never miss a deadline with our comprehensive admission timeline and reminders.",
    link: "/admissionprocess",
  },
  {
    icon: FileText,
    title: "Required Documents",
    description: "Complete checklist of documents needed for your admission application.",
    link: "/admissionprocess",
  },
  {
    icon: CreditCard,
    title: "Fee Structure",
    description: "Transparent fee details for all courses including scholarships and payment options.",
    link: "/fees",
  },
  {
    icon: HelpCircle,
    title: "FAQ & Support",
    description: "Get answers to common queries and connect with our admission support team.",
    link: "/faq",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Soft Background Blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2"
        style={{ backgroundColor: `${DARK_BLUE}14` }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl translate-y-1/2"
        style={{ backgroundColor: `${DARK_BLUE}14` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: `${DARK_BLUE}1A`, color: DARK_BLUE }}
          >
            <Sparkles className="w-4 h-4" />
            Everything You Need
          </div>

          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: DARK_BLUE }}
          >
            Your Complete Admission Resource
          </h2>

          <p className="text-lg" style={{ color: `${DARK_BLUE}B3` }}>
            All admission-related information organized in one place — simple, clear, and reliable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="group relative rounded-2xl p-6 border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ borderColor: `${DARK_BLUE}1F` }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${DARK_BLUE}1A` }}
              >
                <feature.icon className="w-7 h-7" style={{ color: DARK_BLUE }} />
              </div>

              {/* Title */}
              <h3
                className="font-display text-xl font-semibold mb-2"
                style={{ color: DARK_BLUE }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: `${DARK_BLUE}99` }}>
                {feature.description}
              </p>

              {/* Arrow Indicator */}
              <div
                className="absolute bottom-5 right-5 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                style={{ backgroundColor: `${DARK_BLUE}1A` }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={DARK_BLUE}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
