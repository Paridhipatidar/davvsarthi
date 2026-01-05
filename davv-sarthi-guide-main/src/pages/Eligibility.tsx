import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Bot, Sparkles, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const courses = [
  { id: "btech-cs", name: "B.Tech Computer Science" },
  { id: "btech-it", name: "B.Tech Information Technology" },
  { id: "bca", name: "BCA" },
  { id: "mca", name: "MCA" },
  { id: "mba", name: "MBA" },
  { id: "bsc-cs", name: "B.Sc Computer Science" },
  { id: "msc-ds", name: "M.Sc Data Science" },
  { id: "bcom", name: "B.Com Honours" },
];

const categories = [
  { id: "general", name: "General" },
  { id: "obc", name: "OBC" },
  { id: "sc", name: "SC" },
  { id: "st", name: "ST" },
  { id: "ews", name: "EWS" },
];

export default function Eligibility() {
  const [marks, setMarks] = useState("");
  const [category, setCategory] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const checkEligibility = async () => {
    if (!marks || !category || !selectedCourse) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("http://localhost:5001/api/eligibility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          marks: Number(marks),
          category,
          course: selectedCourse,
        }),
      });

      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ error: "Unable to connect to server" });
    }

    setLoading(false);
  };

  return (
    <Layout>
      <section className="py-16 text-center">
        <Sparkles className="mx-auto mb-3 text-primary" />
        <h1 className="text-4xl font-bold">Eligibility Checker</h1>
      </section>

      <section className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6">
        {/* FORM */}
        <div className="p-6 border rounded-xl">
          <Label>Percentage</Label>
          <Input
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />

          <Label className="mt-4">Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c.id} value={c.name}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Label className="mt-4">Course</Label>
          <Select value={selectedCourse} onValueChange={setSelectedCourse}>
            <SelectTrigger>
              <SelectValue placeholder="Select course" />
            </SelectTrigger>
            <SelectContent>
              {courses.map((c) => (
                <SelectItem key={c.id} value={c.name}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button className="w-full mt-6" onClick={checkEligibility}>
            {loading ? "Checking..." : "Check Eligibility"}
          </Button>
        </div>

        {/* RESULT */}
        <div className="p-6 border rounded-xl">
          <Bot className="mb-2 text-primary" />

          {result ? (
            result.error ? (
              <p className="text-destructive">{result.error}</p>
            ) : (
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  {result.eligible ? (
                    <CheckCircle className="text-success" />
                  ) : (
                    <XCircle className="text-destructive" />
                  )}
                  <b>{result.message}</b>
                </p>
                <p>
                  <b>Minimum Required:</b> {result.minMarks}%
                </p>
              </div>
            )
          ) : (
            <p className="text-muted-foreground">
              Eligibility result will appear here
            </p>
          )}
        </div>
      </section>

      <section className="py-6 text-center">
        <AlertCircle className="inline mr-2" />
        Final eligibility depends on university verification
      </section>
    </Layout>
  );
}
