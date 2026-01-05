import Layout from "@/components/layout/Layout";

/* ================= TYPES ================= */

type CutoffRecord = {
  id: number;
  year: string;
  course: string;
  department: string;
  category: string;
  lastRank: string;
  admitted: string;
};

/* ================= SAME DATA (READ-ONLY) ================= */

const cutoffData: CutoffRecord[] = [
  { id: 1, year: "2023", course: "M.Tech IT", department: "IT", category: "UR-O", lastRank: "74", admitted: "Yes" },
  { id: 2, year: "2023", course: "M.Tech IT", department: "IT", category: "UR-F", lastRank: "146", admitted: "Yes" },
  { id: 3, year: "2023", course: "M.Tech AI & DS", department: "CS", category: "UR-O", lastRank: "93", admitted: "Yes" },
  { id: 4, year: "2023", course: "M.Tech AI & DS", department: "CS", category: "UR-F", lastRank: "197", admitted: "Yes" },
  { id: 5, year: "2023", course: "MCA", department: "Computer Applications", category: "UR-O", lastRank: "346", admitted: "Yes" },
  { id: 6, year: "2023", course: "MCA", department: "Computer Applications", category: "UR-F", lastRank: "538", admitted: "Yes" },

  { id: 7, year: "2025", course: "MBA (Management Science)", department: "Management", category: "UR-O", lastRank: "250", admitted: "Yes" },
  { id: 8, year: "2025", course: "MBA (Finance)", department: "Management", category: "UR-O", lastRank: "200", admitted: "Yes" },
  { id: 9, year: "2025", course: "MBA (E-Commerce)", department: "Management", category: "UR-O", lastRank: "220", admitted: "Yes" },
  { id: 10, year: "2025", course: "MBA (Tourism)", department: "Tourism", category: "UR-O", lastRank: "180", admitted: "Yes" },

  { id: 11, year: "2025", course: "MBA (Management Science)", department: "Management", category: "OBC", lastRank: "350", admitted: "Yes" },
  { id: 12, year: "2025", course: "MBA (Finance)", department: "Management", category: "OBC", lastRank: "370", admitted: "Yes" },
  { id: 13, year: "2025", course: "BBA (Business Decision)", department: "Management", category: "OBC", lastRank: "470", admitted: "Yes" },
  { id: 14, year: "2025", course: "BBA (Aviation)", department: "Aviation Studies", category: "OBC", lastRank: "800", admitted: "Yes" },
  { id: 15, year: "2025", course: "MCA", department: "Computer Applications", category: "OBC", lastRank: "300", admitted: "Yes" },
];

/* ================= COMPONENT ================= */

const Cutoffs = () => {
  return (
    <Layout>
      <div className="space-y-8">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Previous Year Admission Cut-offs
          </h1>
          <p className="text-muted-foreground mt-2">
            Historical cutoff ranks (for reference only)
          </p>
        </div>

        {/* DISCLAIMER */}
        <div className="border border-yellow-500 bg-yellow-50 p-3 text-xs rounded-lg">
          <strong>Disclaimer:</strong> Cut-off ranks shown are based on previous
          admission cycles and are indicative only. Actual cut-offs may vary
          each year depending on merit and seat availability.
        </div>

        {/* TABLE */}
        <div className="bg-card border rounded-xl p-5 overflow-x-auto">
          <table className="w-full text-sm border-collapse border">
            <thead className="bg-muted">
              <tr>
                <th className="border p-2">Year</th>
                <th className="border p-2">Course</th>
                <th className="border p-2">Department</th>
                <th className="border p-2">Category</th>
                <th className="border p-2">Last Rank</th>
                <th className="border p-2">Admitted</th>
              </tr>
            </thead>

            <tbody>
              {cutoffData.map((row) => (
                <tr key={row.id}>
                  <td className="border p-2 text-center">{row.year}</td>
                  <td className="border p-2">{row.course}</td>
                  <td className="border p-2">{row.department}</td>
                  <td className="border p-2 text-center">{row.category}</td>
                  <td className="border p-2 text-center font-semibold">
                    {row.lastRank}
                  </td>
                  <td className="border p-2 text-center text-success">
                    {row.admitted}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </Layout>
  );
};

export default Cutoffs;
