import express from "express";
import cors from "cors";
import eligibilityRoutes from "./routes/eligibility.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", eligibilityRoutes);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`✅ Eligibility backend running at http://localhost:${PORT}`);
});
