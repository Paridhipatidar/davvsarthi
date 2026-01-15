"use client";

import { useState } from "react";
import AdminLayout from "@/admin/components/layout/AdminLayout";
import { Plus, Trash2 } from "lucide-react";

/* ================= TYPES ================= */

type FeeRow = {
  course: string;
  type: "UG" | "PG";
  tuition: number;
  development: number;
  exam: number;
  other: number;
};

type Scholarship = {
  name: string;
  eligibility: string;
  benefit: string;
};

type Contact = {
  label: string;
  type: "email" | "phone";
  value: string;
};

/* ================= PAGE ================= */

export default function AdminFees() {
  /* HEADER */
  const [title, setTitle] = useState("Fee Structure & Scholarship Details");
  const [subtitle, setSubtitle] = useState(
    "Complete breakdown of course fees along with scholarships and flexible payment options."
  );

  /* FEES */
  const [fees, setFees] = useState<FeeRow[]>([
    {
      course: "BCA",
      type: "UG",
      tuition: 45000,
      development: 10000,
      exam: 4000,
      other: 3000,
    },
  ]);

  const [feeNote, setFeeNote] = useState(
    "Fees are subject to revision. Hostel & mess charges are additional. One-time admission fee of ₹5,000 applicable."
  );

  /* SCHOLARSHIPS */
  const [scholarships, setScholarships] = useState<Scholarship[]>([
    {
      name: "Merit Scholarship",
      eligibility: "90% and above in qualifying exam",
      benefit: "100% tuition fee waiver",
    },
  ]);

  /* PAYMENT MODES */
  const [paymentModes, setPaymentModes] = useState<string[]>([
    "Online Payment (Net Banking, Credit/Debit Card, UPI)",
  ]);

  /* CONTACT */
  const [contacts, setContacts] = useState<Contact[]>([
    { label: "Accounts Email", type: "email", value: "accounts@davv.ac.in" },
  ]);

  const [officeHours, setOfficeHours] = useState(
    "Mon–Fri, 10:00 AM – 5:00 PM"
  );

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ================= PAGE HEADER ================= */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Page Header</h2>

          <div className="space-y-1 max-w-3xl">
            <label className="text-sm font-medium">Page Title</label>
            <input
              className="w-full rounded-lg border px-3 py-2 text-sm"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-1 max-w-3xl">
            <label className="text-sm font-medium">Page Description</label>
            <textarea
              className="w-full rounded-lg border px-3 py-2 text-sm h-20"
              value={subtitle}
              onChange={e => setSubtitle(e.target.value)}
            />
          </div>
        </section>

        {/* ================= FEE STRUCTURE ================= */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold">Course-wise Fee Structure</h2>

          {fees.map((f, i) => (
            <div key={i} className="border rounded-xl p-5 space-y-4">

              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 space-y-1">
                  <label className="text-xs font-medium">Course Name</label>
                  <input
                    className="w-full border rounded px-2 py-1"
                    value={f.course}
                    onChange={e => {
                      const x=[...fees]; x[i].course=e.target.value; setFees(x);
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium">Program Type</label>
                  <select
                    className="w-full border rounded px-2 py-1"
                    value={f.type}
                    onChange={e => {
                      const x=[...fees]; x[i].type=e.target.value as any; setFees(x);
                    }}
                  >
                    <option value="UG">UG</option>
                    <option value="PG">PG</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium">Tuition Fee</label>
                  <input type="number" className="w-full border rounded px-2 py-1"
                    value={f.tuition}
                    onChange={e=>{
                      const x=[...fees]; x[i].tuition=+e.target.value; setFees(x);
                    }} />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium">Development Fee</label>
                  <input type="number" className="w-full border rounded px-2 py-1"
                    value={f.development}
                    onChange={e=>{
                      const x=[...fees]; x[i].development=+e.target.value; setFees(x);
                    }} />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium">Exam Fee</label>
                  <input type="number" className="w-full border rounded px-2 py-1"
                    value={f.exam}
                    onChange={e=>{
                      const x=[...fees]; x[i].exam=+e.target.value; setFees(x);
                    }} />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium">Other Charges</label>
                  <input type="number" className="w-full border rounded px-2 py-1"
                    value={f.other}
                    onChange={e=>{
                      const x=[...fees]; x[i].other=+e.target.value; setFees(x);
                    }} />
                </div>
              </div>

              <button
                className="text-red-500 text-sm flex items-center gap-1"
                onClick={()=>setFees(fees.filter((_,idx)=>idx!==i))}
              >
                <Trash2 size={14}/> Remove Course
              </button>
            </div>
          ))}

          <button
            onClick={()=>setFees([...fees,{
              course:"",
              type:"UG",
              tuition:0,
              development:0,
              exam:0,
              other:0
            }])}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl"
          >
            + Add Course Fee
          </button>

          <div className="space-y-1">
            <label className="text-sm font-medium">Fee Note (Shown below table)</label>
            <textarea
              className="w-full border rounded-lg px-3 py-2 h-16"
              value={feeNote}
              onChange={e=>setFeeNote(e.target.value)}
            />
          </div>
        </section>

        {/* ================= SCHOLARSHIPS ================= */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold">Scholarships</h2>

          {scholarships.map((s,i)=>(
            <div key={i} className="border rounded-xl p-5 space-y-3">
              <div className="space-y-1">
                <label className="text-sm font-medium">Scholarship Name</label>
                <input className="w-full border rounded px-3 py-2"
                  value={s.name}
                  onChange={e=>{
                    const x=[...scholarships]; x[i].name=e.target.value; setScholarships(x);
                  }} />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">Eligibility</label>
                <input className="w-full border rounded px-3 py-2"
                  value={s.eligibility}
                  onChange={e=>{
                    const x=[...scholarships]; x[i].eligibility=e.target.value; setScholarships(x);
                  }} />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">Benefit</label>
                <input className="w-full border rounded px-3 py-2"
                  value={s.benefit}
                  onChange={e=>{
                    const x=[...scholarships]; x[i].benefit=e.target.value; setScholarships(x);
                  }} />
              </div>

              <button className="text-red-500 text-sm"
                onClick={()=>setScholarships(scholarships.filter((_,idx)=>idx!==i))}>
                <Trash2 size={14}/> Remove Scholarship
              </button>
            </div>
          ))}

          <button
            onClick={()=>setScholarships([...scholarships,{name:"",eligibility:"",benefit:""}])}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl"
          >
            + Add Scholarship
          </button>
        </section>

        {/* ================= PAYMENT MODES ================= */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Payment Modes</h2>

          {paymentModes.map((p,i)=>(
            <div key={i} className="space-y-1">
              <label className="text-sm font-medium">Payment Option {i+1}</label>
              <div className="flex gap-2">
                <input className="flex-1 border rounded px-3 py-2"
                  value={p}
                  onChange={e=>{
                    const x=[...paymentModes]; x[i]=e.target.value; setPaymentModes(x);
                  }} />
                <button
                  className="text-red-500"
                  onClick={()=>setPaymentModes(paymentModes.filter((_,idx)=>idx!==i))}
                >
                  <Trash2/>
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={()=>setPaymentModes([...paymentModes,""])}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl"
          >
            + Add Payment Mode
          </button>
        </section>

        {/* ================= CONTACT INFO ================= */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Contact Information</h2>

          {contacts.map((c,i)=>(
            <div key={i} className="grid grid-cols-3 gap-3 items-end">
              <div className="space-y-1">
                <label className="text-sm font-medium">Label</label>
                <input className="border rounded px-2 py-1 w-full"
                  value={c.label}
                  onChange={e=>{
                    const x=[...contacts]; x[i].label=e.target.value; setContacts(x);
                  }} />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">Type</label>
                <select className="border rounded px-2 py-1 w-full"
                  value={c.type}
                  onChange={e=>{
                    const x=[...contacts]; x[i].type=e.target.value as any; setContacts(x);
                  }}>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">Value</label>
                <input className="border rounded px-2 py-1 w-full"
                  value={c.value}
                  onChange={e=>{
                    const x=[...contacts]; x[i].value=e.target.value; setContacts(x);
                  }} />
              </div>
            </div>
          ))}

          <button
            onClick={()=>setContacts([...contacts,{label:"",type:"email",value:""}])}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl"
          >
            + Add Contact
          </button>
        </section>

        {/* ================= OFFICE HOURS ================= */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold">Office Hours</h2>
          <input
            className="w-full border rounded px-3 py-2"
            value={officeHours}
            onChange={e=>setOfficeHours(e.target.value)}
          />
        </section>

      </div>
    </AdminLayout>
  );
}
