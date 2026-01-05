import { GraduationCap, Users, Clock, BookOpen } from "lucide-react";
import AdminLayout from  "../components/layout/AdminLayout"; 
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

/**
 * Course data type
 */
interface Course {
  id: string;
  name: string;
  fullName: string;
  duration: string;
  totalSeats: number;
  filledSeats: number;
  pendingApplications: number;
  color: string;
}

/**
 * Mock course data
 */
const coursesData: Course[] = [
  {
    id: "BCA",
    name: "BCA",
    fullName: "Bachelor of Computer Applications",
    duration: "3 Years",
    totalSeats: 60,
    filledSeats: 45,
    pendingApplications: 44,
    color: "primary",
  },
  {
    id: "BCOM",
    name: "B.Com",
    fullName: "Bachelor of Commerce",
    duration: "3 Years",
    totalSeats: 120,
    filledSeats: 78,
    pendingApplications: 32,
    color: "accent",
  },
  {
    id: "BSC",
    name: "B.Sc",
    fullName: "Bachelor of Science",
    duration: "3 Years",
    totalSeats: 90,
    filledSeats: 52,
    pendingApplications: 28,
    color: "success",
  },
  {
    id: "BA",
    name: "BA",
    fullName: "Bachelor of Arts",
    duration: "3 Years",
    totalSeats: 100,
    filledSeats: 65,
    pendingApplications: 20,
    color: "warning",
  },
  {
    id: "MCA",
    name: "MCA",
    fullName: "Master of Computer Applications",
    duration: "2 Years",
    totalSeats: 40,
    filledSeats: 22,
    pendingApplications: 15,
    color: "primary",
  },
  {
    id: "MBA",
    name: "MBA",
    fullName: "Master of Business Administration",
    duration: "2 Years",
    totalSeats: 60,
    filledSeats: 35,
    pendingApplications: 18,
    color: "accent",
  },
];

/**
 * Courses Page
 * Display all available courses with seat information
 */
const Courses = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Courses</h1>
            <p className="text-muted-foreground">
              Manage courses and seat allocation
            </p>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coursesData.map((course, index) => {
            const fillPercentage = (course.filledSeats / course.totalSeats) * 100;
            const availableSeats = course.totalSeats - course.filledSeats;

            return (
              <div
                key={course.id}
                className="stat-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Course Header */}
                <div className="flex items-start justify-between mb-4">
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
                  <div className="text-right">
                    <span className="status-pending text-xs">
                      {course.pendingApplications} pending
                    </span>
                  </div>
                </div>

                {/* Course Info */}
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {course.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {course.fullName}
                </p>

                {/* Course Details */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {course.totalSeats} seats
                  </div>
                </div>

                {/* Seat Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Seats Filled</span>
                    <span className="font-medium text-foreground">
                      {course.filledSeats}/{course.totalSeats}
                    </span>
                  </div>
                  <Progress
                    value={fillPercentage}
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

        {/* Summary Section */}
        <div className="rounded-xl border border-border bg-card p-6 card-shadow">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Overall Statistics
          </h2>
          <div className="grid gap-4 sm:grid-cols-4">
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <p className="text-3xl font-bold text-foreground">470</p>
              <p className="text-sm text-muted-foreground">Total Seats</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-success/10">
              <p className="text-3xl font-bold text-success">297</p>
              <p className="text-sm text-muted-foreground">Filled Seats</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-accent/10">
              <p className="text-3xl font-bold text-accent">173</p>
              <p className="text-sm text-muted-foreground">Available</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-warning/10">
              <p className="text-3xl font-bold text-warning">157</p>
              <p className="text-sm text-muted-foreground">Pending Apps</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Courses;
