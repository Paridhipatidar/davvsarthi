import {
  GraduationCap,
  IndianRupee,
  FileText,
  CheckCircle,
} from "lucide-react";

/**
 * DashboardCards Component
 * Displays key admin-level statistics
 * Used only in Admin Dashboard (Overview page)
 */
const DashboardCards = () => {
  const stats = [
    {
      title: "Total Courses",
      value: 12,
      icon: GraduationCap,
      color: "text-blue-600",
    },
    {
      title: "Fee Structures",
      value: 8,
      icon: IndianRupee,
      color: "text-green-600",
    },
    {
      title: "Documents Required",
      value: 10,
      icon: FileText,
      color: "text-purple-600",
    },
    {
      title: "Eligibility Rules",
      value: 6,
      icon: CheckCircle,
      color: "text-emerald-600",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-card border rounded-xl p-5 flex items-center justify-between hover:shadow-sm transition"
          >
            {/* Left: Text */}
            <div>
              <p className="text-sm text-muted-foreground">
                {item.title}
              </p>
              <h2 className="text-2xl font-bold mt-1">
                {item.value}
              </h2>
            </div>

            {/* Right: Icon */}
            <div
              className={`h-12 w-12 rounded-lg bg-muted flex items-center justify-center ${item.color}`}
            >
              <Icon className="h-6 w-6" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCards;
