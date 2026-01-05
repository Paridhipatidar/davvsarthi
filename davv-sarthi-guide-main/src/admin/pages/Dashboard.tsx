import { useState } from "react";
import AdminLayout from  "../components/layout/AdminLayout";

/**
 * Government Style Admin Dashboard
 * DAVV SARTHI – Admission Configuration Portal
 */

const Dashboard = () => {
  const [academicYear, setAcademicYear] = useState("2025-26");
  const [admissionStatus, setAdmissionStatus] = useState("OPEN");

  const saveSettings = () => {
    console.log({ academicYear, admissionStatus });
    alert("Settings saved successfully");
  };

  return (
    <AdminLayout>
      <div className="space-y-8">

        {/* OFFICIAL HEADER */}
        <div className="border-b pb-3">
          <h1 className="text-xl font-bold">
            Devi Ahilya Vishwavidyalaya, Indore
          </h1>
          <p className="text-sm text-muted-foreground">
            Centralized Admission Management Portal (CUET-UG)
          </p>
        </div>

        {/* BASIC INFO */}
        <section className="space-y-4">
          <h2 className="font-semibold underline">
            Current Admission Session
          </h2>

          <table className="w-full text-sm border">
            <tbody>
              <tr>
                <td className="border px-3 py-2 w-1/3 font-medium">
                  Academic Year
                </td>
                <td className="border px-3 py-2">
                  <input
                    value={academicYear}
                    onChange={(e) => setAcademicYear(e.target.value)}
                    className="border px-2 py-1 w-32"
                  />
                </td>
              </tr>

              <tr>
                <td className="border px-3 py-2 font-medium">
                  Admission Status
                </td>
                <td className="border px-3 py-2">
                  <select
                    value={admissionStatus}
                    onChange={(e) => setAdmissionStatus(e.target.value)}
                    className="border px-2 py-1"
                  >
                    <option value="OPEN">OPEN</option>
                    <option value="CLOSED">CLOSED</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* CONFIGURATION STATUS */}
        <section className="space-y-4">
          <h2 className="font-semibold underline">
            Admission Configuration Status
          </h2>

          <table className="w-full text-sm border">
            <thead className="bg-muted">
              <tr>
                <th className="border px-3 py-2 text-left">
                  Configuration Module
                </th>
                <th className="border px-3 py-2 text-left">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                "Programs",
                "Eligibility Criteria",
                "Seat Intake",
                "Fee Structure",
                "Reservation Policy",
                "Merit Rules",
                "Admission Process",
                "Instructions",
              ].map((item) => (
                <tr key={item}>
                  <td className="border px-3 py-2">{item}</td>
                  <td className="border px-3 py-2 text-green-700 font-medium">
                    CONFIGURED
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* QUICK LINKS */}
        <section className="space-y-4">
          <h2 className="font-semibold underline">
            Administrative Actions
          </h2>

          <div className="grid md:grid-cols-3 gap-3 text-sm">
            {[
              "Manage Programs",
              "Edit Eligibility",
              "Update Seat Intake",
              "Modify Fee Structure",
              "Reservation Rules",
              "Merit Rules",
              "Admission Process",
              "Important Instructions",
            ].map((action) => (
              <button
                key={action}
                className="border px-3 py-2 text-left hover:bg-muted"
              >
                {action}
              </button>
            ))}
          </div>
        </section>

        {/* OFFICIAL NOTE */}
        <section className="border-t pt-3 text-xs text-muted-foreground">
          <p>
            Note: All admission-related configurations must strictly comply
            with Government of India, UGC, and University norms. The University
            reserves the right to modify the admission process without prior
            notice.
          </p>
        </section>

        {/* SAVE */}
        <button
          onClick={saveSettings}
          className="border px-4 py-2 text-sm font-medium"
        >
          Save Settings
        </button>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
