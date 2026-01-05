import Layout from "@/components/layout/Layout";

/* ================= TYPES ================= */

type Program = {
  id: number;
  group: string;
  name: string;
  duration: string;
  cuetSubjects: string;
};

/* ================= SAME DATA (READ-ONLY) ================= */

const programs: Program[] = [
  { id: 1, group: "B", name: "M.B.A. (Management Science)", duration: "5 Years", cuetSubjects: "English, General Aptitude Test" },
  { id: 2, group: "B", name: "M.B.A. (Tourism)", duration: "5 Years", cuetSubjects: "English, General Aptitude Test" },
  { id: 3, group: "B", name: "B.Com. (Hons.)", duration: "4 Years", cuetSubjects: "English, General Aptitude Test" },

  { id: 4, group: "C", name: "M.Tech. (IT) Integrated Dual Degree", duration: "5 Years", cuetSubjects: "English, Physics, Chemistry, Mathematics" },
  { id: 5, group: "C", name: "M.C.A.", duration: "5 Years", cuetSubjects: "English, Physics, Chemistry, Mathematics" },

  { id: 6, group: "D", name: "B.C.A.", duration: "3 / 4 Years", cuetSubjects: "English, Physics, Mathematics" },

  { id: 7, group: "E", name: "B.Pharm", duration: "4 Years", cuetSubjects: "English, Physics, Chemistry, Mathematics / Biology" },

  { id: 8, group: "F", name: "M.B.A. (Hospital Administration)", duration: "5 Years", cuetSubjects: "English, Physics, Chemistry, Biology" },
];

/* ================= COMPONENT ================= */

const UserPrograms = () => {
  return (
    <Layout>
      <div className="space-y-8">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Programs & CUET Subject Mapping</h1>
          <p className="text-muted-foreground mt-2">
            View group-wise programmes and CUET (UG) subject requirements
          </p>
        </div>

        {/* TABLE */}
        <div className="bg-card border rounded-xl p-5 overflow-x-auto">
          <table className="w-full text-sm border-collapse border">
            <thead className="bg-muted">
              <tr>
                <th className="border p-2">Group</th>
                <th className="border p-2">Programme Name</th>
                <th className="border p-2">Duration</th>
                <th className="border p-2">CUET (UG) Subjects</th>
              </tr>
            </thead>

            <tbody>
              {programs.map((p) => (
                <tr key={p.id}>
                  <td className="border p-2 text-center font-semibold">
                    {p.group}
                  </td>
                  <td className="border p-2">{p.name}</td>
                  <td className="border p-2">{p.duration}</td>
                  <td className="border p-2">{p.cuetSubjects}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </Layout>
  );
};

export default UserPrograms;
