import Layout from "@/components/layout/Layout";

/* ================= TYPES ================= */

type MeritRule = {
  id: number;
  group: string;
  priority: number;
  rule: string;
  remarks: string;
};

/* ================= SAME DATA (READ-ONLY) ================= */

const meritRules: MeritRule[] = [
  {
    id: 1,
    group: "B",
    priority: 1,
    rule: "Higher CUET (UG) aggregate score",
    remarks: "Primary merit criteria",
  },
  {
    id: 2,
    group: "B",
    priority: 2,
    rule: "Higher score in English",
    remarks: "Tie-breaking rule",
  },
  {
    id: 3,
    group: "B",
    priority: 3,
    rule: "Older candidate preferred",
    remarks: "Based on Date of Birth",
  },
  {
    id: 4,
    group: "C",
    priority: 1,
    rule: "Higher CUET aggregate in PCM subjects",
    remarks: "Physics, Chemistry, Mathematics",
  },
  {
    id: 5,
    group: "C",
    priority: 2,
    rule: "Higher score in Mathematics",
    remarks: "Tie-breaker",
  },
  {
    id: 6,
    group: "C",
    priority: 3,
    rule: "Older candidate preferred",
    remarks: "DOB comparison",
  },
];

/* ================= COMPONENT ================= */

const Merit = () => {
  return (
    <Layout>
      <div className="space-y-8">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Merit Rules</h1>
          <p className="text-muted-foreground mt-2">
            Group-wise merit and tie-breaking rules as per CUET-UG admission brochure
          </p>
        </div>

        {/* TABLE */}
        <div className="bg-card border rounded-xl p-5 overflow-x-auto">
          <table className="w-full text-sm border-collapse border">
            <thead className="bg-muted">
              <tr>
                <th className="border p-2">Group</th>
                <th className="border p-2">Priority</th>
                <th className="border p-2">Merit Rule</th>
                <th className="border p-2">Remarks</th>
              </tr>
            </thead>

            <tbody>
              {meritRules.map((rule) => (
                <tr key={rule.id}>
                  <td className="border p-2 text-center font-semibold">
                    {rule.group}
                  </td>
                  <td className="border p-2 text-center">
                    {rule.priority}
                  </td>
                  <td className="border p-2">
                    {rule.rule}
                  </td>
                  <td className="border p-2">
                    {rule.remarks}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* NOTE */}
        <p className="text-xs text-muted-foreground text-center">
          Note: Merit rules are applied sequentially during counseling and seat allotment.
        </p>

      </div>
    </Layout>
  );
};

export default Merit;
