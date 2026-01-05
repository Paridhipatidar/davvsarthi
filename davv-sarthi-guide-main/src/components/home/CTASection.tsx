import { ArrowRight, FileSearch, TrendingUp, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DARK_BLUE = "#0B3C5D";

const CTASection = () => {
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
        <div className="grid gap-6 md:grid-cols-3">

          {/* Eligibility Checker */}
          <div
            className="group relative rounded-3xl p-8 md:p-10 text-white overflow-hidden shadow-lg hover:shadow-xl transition-all"
            style={{ backgroundColor: DARK_BLUE }}
          >
            <div className="absolute inset-0 bg-white/5" />

            <div className="relative z-10">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <FileSearch className="w-7 h-7 text-white" />
              </div>

              <h3 className="font-display text-2xl font-bold mb-4">
                Check Eligibility
              </h3>

              <p className="text-white/90 mb-6 leading-relaxed">
                Enter marks, category, and course to instantly verify your eligibility.
              </p>

              <Link to="/eligibility">
                <Button
                  size="lg"
                  className="bg-white text-[#0B3C5D] hover:bg-white/90 font-semibold"
                >
                  Check Eligibility
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Admission Prediction */}
          <div
            className="group relative rounded-3xl p-8 md:p-10 text-white overflow-hidden shadow-lg hover:shadow-xl transition-all"
            style={{ backgroundColor: `${DARK_BLUE}E6` }}
          >
            <div className="absolute inset-0 bg-white/5" />

            <div className="relative z-10">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <TrendingUp className="w-7 h-7 text-white" />
              </div>

              <h3 className="font-display text-2xl font-bold mb-4">
                Admission Prediction
              </h3>

              <p className="text-white/90 mb-6 leading-relaxed">
                Predict your admission chances using rank, category, and previous trends.
              </p>

              <Link to="/prediction">
                <Button
                  size="lg"
                  className="bg-white text-[#0B3C5D] hover:bg-white/90 font-semibold"
                >
                  Predict Admission
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Explore Courses */}
          <div
            className="group relative rounded-3xl p-8 md:p-10 bg-white border shadow-sm hover:shadow-xl transition-all"
            style={{ borderColor: `${DARK_BLUE}1F` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50" />

            <div className="relative z-10">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${DARK_BLUE}1A` }}
              >
                <BookOpen className="w-7 h-7" style={{ color: DARK_BLUE }} />
              </div>

              <h3
                className="font-display text-2xl font-bold mb-4"
                style={{ color: DARK_BLUE }}
              >
                Explore Courses
              </h3>

              <p className="mb-6 leading-relaxed" style={{ color: `${DARK_BLUE}99` }}>
                Browse all UG & PG programs with fees, duration, and intake details.
              </p>

              <Link to="/courses">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold"
                  style={{ borderColor: DARK_BLUE, color: DARK_BLUE }}
                >
                  View Courses
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
