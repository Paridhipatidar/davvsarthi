import { useState } from "react";
import AdminLayout from  "../components/layout/AdminLayout";
import { Plus, Trash2, Save } from "lucide-react";

/* ================= TYPES ================= */

type SeatConfig = {
  id: number;
  group: string;          // B / C / D / E / F
  program: string;        // Programme name
  academicYear: string;   // 2025-26
  totalSeats: number;
  remarks: string;
};

/* ================= INITIAL DATA (FROM PDF) ================= */

const initialSeats: SeatConfig[] = [
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
  const [seats, setSeats] = useState<SeatConfig[]>(initialSeats);

  /* ---------- HANDLERS ---------- */

  const updateSeat = (
    id: number,
    field: keyof SeatConfig,
    value: string | number
  ) => {
    setSeats((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, [field]: value } : s
      )
    );
  };

  const addSeat = () => {
    setSeats([
      ...seats,
      {
        id: Date.now(),
        group: "",
        program: "",
        academicYear: "2025-26",
        totalSeats: 0,
        remarks: "",
      },
    ]);
  };

  const deleteSeat = (id: number) => {
    setSeats(seats.filter((s) => s.id !== id));
  };

  const saveSeats = () => {
    console.log("Seat Configuration:", seats);
    alert("Seat intake details saved successfully!");
  };

  return (
    <AdminLayout>
      <div className="space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold">Seats & Intake</h1>
          <p className="text-sm text-muted-foreground">
            Programme-wise seat intake configuration as per admission brochure
          </p>
        </div>

        {/* SEATS TABLE */}
        <div className="bg-card border rounded-xl p-5 overflow-x-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Seat Intake Details</h2>
            <button
              onClick={addSeat}
              className="flex items-center gap-1 text-sm"
            >
              <Plus size={16} /> Add Programme Seats
            </button>
          </div>

          <table className="w-full text-sm border-collapse border">
            <thead className="bg-muted">
              <tr>
                <th className="border p-2">Group</th>
                <th className="border p-2">Programme</th>
                <th className="border p-2">Academic Year</th>
                <th className="border p-2">Total Seats</th>
                <th className="border p-2">Remarks</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {seats.map((seat) => (
                <tr key={seat.id}>
                  <td className="border p-2">
                    <input
                      value={seat.group}
                      onChange={(e) =>
                        updateSeat(seat.id, "group", e.target.value)
                      }
                      className="border p-1 w-12 text-center"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      value={seat.program}
                      onChange={(e) =>
                        updateSeat(seat.id, "program", e.target.value)
                      }
                      className="border p-1 w-full"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      value={seat.academicYear}
                      onChange={(e) =>
                        updateSeat(seat.id, "academicYear", e.target.value)
                      }
                      className="border p-1 w-24"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      type="number"
                      value={seat.totalSeats}
                      onChange={(e) =>
                        updateSeat(
                          seat.id,
                          "totalSeats",
                          Number(e.target.value)
                        )
                      }
                      className="border p-1 w-24"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      value={seat.remarks}
                      onChange={(e) =>
                        updateSeat(seat.id, "remarks", e.target.value)
                      }
                      className="border p-1 w-full"
                    />
                  </td>

                  <td className="border p-2 text-center">
                    <button
                      onClick={() => deleteSeat(seat.id)}
                      className="text-destructive"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SAVE */}
        <button
          onClick={saveSeats}
          className="flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-lg"
        >
          <Save size={16} /> Save Seat Intake
        </button>

        {/* NOTE */}
        <p className="text-xs text-muted-foreground">
          Note: Reservation and category-wise breakup is handled separately.
        </p>
      </div>
    </AdminLayout>
  );
};

export default Seats;
