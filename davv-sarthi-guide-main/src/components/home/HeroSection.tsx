import { ArrowRight, Users, BookOpen, Award, GraduationCap, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { icon: Users, value: "50,000+", label: "Students" },
  { icon: BookOpen, value: "120+", label: "Courses" },
  { icon: Award, value: "A+", label: "NAAC Grade" },
];

const DARK_BLUE = "#0B3C5D";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">

      {/* 🔔 Announcement Bar */}
      <div
        className="w-full py-3 px-4 text-sm md:text-base flex items-center justify-center gap-3 text-white font-medium"
        style={{ backgroundColor: DARK_BLUE }}
      >
        <Megaphone className="w-5 h-5" />
        <span>
          Admissions Open 2025 · Apply Now for UG & PG Programs
        </span>
        <Link to="/admissionprocess" className="underline font-semibold hover:opacity-90">
          View Details
        </Link>
      </div>

      {/* Hero Section */}
      <div
        className="relative min-h-[85vh] flex items-center"
        style={{
          backgroundImage: "url('/images/hero/college3.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/60" />

        {/* Decorative Blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: `${DARK_BLUE}20` }} />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: `${DARK_BLUE}15` }} />

        {/* Floating Admission Badge */}
        <div className="absolute top-32 right-8 animate-float z-20 hidden md:block">
          <div
            className="px-6 py-3 rounded-full shadow-xl text-white font-semibold text-sm tracking-wide"
            style={{ backgroundColor: DARK_BLUE }}
          >
            🎓 Admissions Open 2025
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-sm border mb-8">
              <GraduationCap className="w-6 h-6" style={{ color: DARK_BLUE }} />
              <span className="text-base font-semibold" style={{ color: DARK_BLUE }}>
                Welcome to DAVV Sarthi
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
              style={{ color: DARK_BLUE }}
            >
              Your Journey to{" "}
              <span className="relative inline-block">
                <span style={{ color: DARK_BLUE }}>DAVV</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path
                    d="M2 10C50 4 150 4 198 10"
                    stroke={DARK_BLUE}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Starts Here
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
              style={{ color: `${DARK_BLUE}CC` }}
            >
              Navigate your college admission with confidence. Get complete information
              about courses, eligibility, fees, and step-by-step guidance for a successful admission.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Link to="/eligibility">
                <Button
                  size="lg"
                  className="text-white shadow-xl hover:shadow-2xl transition-all group px-8 py-6 text-base"
                  style={{ backgroundColor: DARK_BLUE }}
                >
                  Check Eligibility
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link to="/prediction">
                <Button
                  size="lg"
                  className="text-white shadow-xl hover:shadow-2xl transition-all group px-8 py-6 text-base"
                  style={{ backgroundColor: DARK_BLUE }}
                >
                  Predict Admission
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link to="/courses">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 shadow-xl hover:shadow-2xl transition-all group px-8 py-6 text-base"
                  style={{ color: DARK_BLUE, borderColor: DARK_BLUE }}
                >
                  Explore Courses
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-2xl bg-white/70 backdrop-blur-sm border"
                >
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl mb-3"
                    style={{ backgroundColor: `${DARK_BLUE}15` }}
                  >
                    <stat.icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: DARK_BLUE }} />
                  </div>
                  <div className="font-display text-2xl md:text-3xl font-bold" style={{ color: DARK_BLUE }}>
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base" style={{ color: `${DARK_BLUE}B3` }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
