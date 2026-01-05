import { GraduationCap, Users, Clock, BookOpen } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

/* ================= TYPES ================= */

interface Course {
  id: string;
  name: string;
  fullName: string;
  duration: string;
  totalSeats: number;
  filledSeats: number;
  color: string;
}

/* ================= COURSE DATA (READ-ONLY) ================= */

const coursesData: Course[] = [
  {
    id: "BCA",
    name: "BCA",
    fullName: "Bachelor of Computer Applications",
    duration: "3 Years",
    totalSeats: 60,
    filledSeats: 45,
    color: "primary",
  },
  {
    id: "BCOM",
    name: "B.Com",
    fullName: "Bachelor of Commerce",
    duration: "3 Years",
    totalSeats: 120,
    filledSeats: 78,
    color: "accent",
  },
  {
    id: "BSC",
    name: "B.Sc",
    fullName: "Bachelor of Science",
    duration: "3 Years",
    totalSeats: 90,
    filledSeats: 52,
    color: "success",
  },
  {
    id: "BA",
    name: "BA",
    fullName: "Bachelor of Arts",
    duration: "3 Years",
    totalSeats: 100,
    filledSeats: 65,
    color: "warning",
  },
  {
    id: "MCA",
    name: "MCA",
    fullName: "Master of Computer Applications",
    duration: "2 Years",
    totalSeats: 40,
    filledSeats: 22,
    color: "primary",
  },
  {
    id: "MBA",
    name: "MBA",
    fullName: "Master of Business Administration",
    duration: "2 Years",
    totalSeats: 60,
    filledSeats: 35,
    color: "accent",
  },
];

/* ================= COMPONENT ================= */

const Courses = () => {
  return (
    <Layout>
      <div className="space-y-8">

        {/* PAGE HEADER */}
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <GraduationCap className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            Available Courses
          </h1>
          <p className="text-muted-foreground mt-2">
            Explore programmes and seat availability
          </p>
        </div>

        {/* COURSES GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coursesData.map((course, index) => {
            const filledPercent =
              (course.filledSeats / course.totalSeats) * 100;
            const availableSeats =
              course.totalSeats - course.filledSeats;

            return (
              <div
                key={course.id}
                className="bg-card border rounded-xl p-5 space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* COURSE ICON */}
                <div
                  className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-xl text-xl font-bold",
                    course.color === "primary" && "bg-primary/10 text-primary",
                    course.color === "accent" && "bg-accent/10 text-accent",
                    course.color === "success" && "bg-success/10 text-success",
                    course.color === "warning" && "bg-warning/10 text-warning"
                  )}
                >
                  {course.name.charAt(0)}
                </div>

                {/* COURSE INFO */}
                <div>
                  <h3 className="text-lg font-bold">
                    {course.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {course.fullName}
                  </p>
                </div>

                {/* DETAILS */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {course.totalSeats} seats
                  </div>
                </div>

                {/* SEAT PROGRESS */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Seats Filled
                    </span>
                    <span className="font-medium">
                      {course.filledSeats}/{course.totalSeats}
                    </span>
                  </div>

                  <Progress
                    value={filledPercent}
                    className={cn(
                      "h-2",
                      course.color === "primary" && "[&>div]:bg-primary",
                      course.color === "accent" && "[&>div]:bg-accent",
                      course.color === "success" && "[&>div]:bg-success",
                      course.color === "warning" && "[&>div]:bg-warning"
                    )}
                  />

                  <div className="flex items-center gap-1 text-sm">
                    <Users className="h-4 w-4 text-success" />
                    <span className="text-success font-medium">
                      {availableSeats} seats available
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOT NOTE */}
        <p className="text-xs text-muted-foreground text-center">
          Note: Seat availability may change during the admission process.
        </p>

      </div>
    </Layout>
  );
};

export default Courses;
