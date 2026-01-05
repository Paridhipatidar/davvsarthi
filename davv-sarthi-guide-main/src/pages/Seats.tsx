import Layout from "@/components/layout/Layout";

/* ================= TYPES ================= */

type SeatConfig = {
  id: number;
  group: string;
  program: string;
  academicYear: string;
  totalSeats: number;
  remarks: string;
};

/* ================= SAME DATA (READ-ONLY) ================= */

const seatsData: SeatConfig[] = [
  {
    id: 1,
    group: "B",
    program: "MBA (Management Science)",
    academicYear: "2025-26",
    totalSeats: 60,
    remarks: "Integrated programme",
  },
  {
    id: 2,
    group: "C",
    program: "MCA (Integrated)",
    academicYear: "2025-26",
    totalSeats: 60,
    remarks: "Dual Degree as per NEP-2020",
  },
  {
    id: 3,
    group: "D",
    program: "BCA",
    academicYear: "2025-26",
    totalSeats: 120,
    remarks: "Multiple exit option available",
  },
  {
    id: 4,
    group: "E",
    program: "B.Pharm",
    academicYear: "2025-26",
    totalSeats: 100,
    remarks: "",
  },
];

/* ================= COMPONENT ================= */

const Seats = () => {
  return (
    <Layout>
      <div className="space-y-8">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Seats & Intake</h1>
          <p className="text-muted-foreground mt-2">
            Programme-wise seat intake as per admission brochure
          </p>
        </div>

        {/* TABLE */}
        <div className="bg-card border rounded-xl p-5 overflow-x-auto">
          <table className="w-full text-sm border-collapse border">
            <thead className="bg-muted">
              <tr>
                <th className="border p-2">Group</th>
                <th className="border p-2">Programme</th>
                <th className="border p-2">Academic Year</th>
                <th className="border p-2">Total Seats</th>
                <th className="border p-2">Remarks</th>
              </tr>
            </thead>

            <tbody>
              {seatsData.map((seat) => (
                <tr key={seat.id}>
                  <td className="border p-2 text-center font-semibold">
                    {seat.group}
                  </td>
                  <td className="border p-2">
                    {seat.program}
                  </td>
                  <td className="border p-2 text-center">
                    {seat.academicYear}
                  </td>
                  <td className="border p-2 text-center font-semibold">
                    {seat.totalSeats}
                  </td>
                  <td className="border p-2">
                    {seat.remarks || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* NOTE */}
        <p className="text-xs text-muted-foreground text-center">
          Note: Reservation and category-wise breakup is notified separately by the university.
        </p>
      </div>
    </Layout>
  );
};

export default Seats;
