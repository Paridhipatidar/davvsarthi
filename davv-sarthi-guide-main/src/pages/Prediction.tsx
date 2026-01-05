import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Bot, Sparkles, AlertCircle, TrendingUp } from "lucide-react";
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
  "MTech IT",
  "MTech AIDS",
  "MTech IOT",
  "Electronics",
  "Energy & Environment",
  "MCA",
  "MBA MS",
  "MBA FT",
  "MBA ECOM",
  "MBA Tourism",
  "IT",
  "CS",
  "BBA Business Decision",
  "BBA Aviation",
];

const categories = ["URO", "URF", "OBC"];

export default function Prediction() {
  const [year, setYear] = useState("2025");
  const [rank, setRank] = useState("");
  const [course, setCourse] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const predictAdmission = async () => {
    if (!rank || !course || !category) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(
        "http://localhost:5000/api/predict-admission",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            year: Number(year),
            rank: Number(rank),
            course,
            category,
          }),
        }
      );

      const data = await res.json();
      setResult(data);
    } catch {
      setResult({
        error: "Unable to connect to prediction server",
      });
    }

    setLoading(false);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 text-center">
        <TrendingUp className="mx-auto mb-3 text-primary" />
        <h1 className="text-4xl font-bold">Admission Prediction</h1>
        <p className="text-muted-foreground mt-2">
          Predict your admission chances based on counselling rank
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6">
        {/* Form */}
        <div className="p-6 border rounded-xl">
          <Label>Year</Label>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
            </SelectContent>
          </Select>

          <Label className="mt-4">Your Rank</Label>
          <Input
            type="number"
            placeholder="Enter your rank"
            value={rank}
            onChange={(e) => setRank(e.target.value)}
          />

          <Label className="mt-4">Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Label className="mt-4">Course</Label>
          <Select value={course} onValueChange={setCourse}>
            <SelectTrigger>
              <SelectValue placeholder="Select course" />
            </SelectTrigger>
            <SelectContent>
              {courses.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button className="w-full mt-6" onClick={predictAdmission}>
            {loading ? "Predicting..." : "Predict Admission"}
          </Button>
        </div>

        {/* Result */}
        <div className="p-6 border rounded-xl">
          <Bot className="mb-2 text-primary" />

          {result ? (
            result.error ? (
              <p className="text-destructive">{result.error}</p>
            ) : (
              <div className="space-y-2">
                <p>
                  <b>Admission Probability:</b>{" "}
                  {result.probability}%
                </p>
                <p>
                  <b>Chance Level:</b>{" "}
                  <span
                    className={
                      result.chance === "High"
                        ? "text-success"
                        : result.chance === "Medium"
                        ? "text-warning"
                        : "text-destructive"
                    }
                  >
                    {result.chance}
                  </span>
                </p>
                <p>
                  <b>Status:</b>{" "}
                  {result.admission_possible
                    ? "Likely to get admission"
                    : "Unlikely to get admission"}
                </p>
              </div>
            )
          ) : (
            <p className="text-muted-foreground">
              Prediction result will appear here
            </p>
          )}
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-6 text-center">
        <AlertCircle className="inline mr-2" />
        Prediction is based on historical counselling data and is for guidance only
      </section>
    </Layout>
  );
}
