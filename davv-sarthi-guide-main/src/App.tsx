import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";

/* =======================
   STUDENT PAGES
======================= */
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Eligibility from "./pages/Eligibility";
import Prediction from "./pages/Prediction";
import Fees from "./pages/Fees";
import FAQ from "./pages/FAQ";
import UserPrograms from "./pages/UserPrograms";
import Merit from "./pages/Merit";
import Seats from "./pages/Seats";
import Reservation from "./pages/Reservation";
import Cutoffs from "./pages/Cutoffs";
import AdmissionProcess from "./pages/AdmissionProcess";
import Instructions from "./pages/Instructions";
import NotFound from "./pages/NotFound";

/* =======================
   ADMIN PAGES
======================= */
import AdminDashboard from "./admin/pages/Dashboard";
import AdminCourses from "./admin/pages/Courses";
import AdminEligibility from "./admin/pages/Eligibility";
import AdminFeeStructure from "./admin/pages/FeeStructure";
import AdminAdmissionProcess from "./admin/pages/AdmissionProcess";
import AdminPrograms from "./admin/pages/Programs";
import AdminSeats from "./admin/pages/Seats";
import AdminReservation from "./admin/pages/Reservation";
import AdminMeritRules from "./admin/pages/MeritRules";
import AdminInstructions from "./admin/pages/Instructions";
import AdminPreviousYearCutoffs from "./admin/pages/PreviousYearCutoffs";
import AdminNotFound from "./admin/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
  {/* ROOT REDIRECT */}
  <Route path="/" element={<Navigate to="/login" replace />} />

  {/* LOGIN */}
  <Route path="/login" element={<Login />} />

  {/* =======================
      STUDENT ROUTES
  ======================= */}
  <Route
    path="/student/dashboard"
    element={
      <ProtectedRoute role="student">
        <Index />
      </ProtectedRoute>
    }
  />

  <Route path="/courses" element={<Courses />} />
  <Route path="/programs" element={<UserPrograms />} />
  <Route path="/merit" element={<Merit />} />
  <Route path="/seats" element={<Seats />} />
  <Route path="/eligibility" element={<Eligibility />} />
  <Route path="/prediction" element={<Prediction />} />
  <Route path="/reservation" element={<Reservation />} />
  <Route path="/admissionprocess" element={<AdmissionProcess />} />
  <Route path="/instructions" element={<Instructions />} />
  <Route path="/cutoffs" element={<Cutoffs />} />
  <Route path="/fees" element={<Fees />} />
  <Route path="/faq" element={<FAQ />} />

  {/* =======================
      ADMIN ROUTES
  ======================= */}
  <Route
    path="/admin/dashboard"
    element={
      <ProtectedRoute role="admin">
        <AdminDashboard />
      </ProtectedRoute>
    }
  />

  <Route path="/admin/courses" element={<AdminCourses />} />
  <Route path="/admin/eligibility" element={<AdminEligibility />} />
  <Route path="/admin/fees" element={<AdminFeeStructure />} />
  <Route path="/admin/admission-process" element={<AdminAdmissionProcess />} />
  <Route path="/admin/programs" element={<AdminPrograms />} />
  <Route path="/admin/seats" element={<AdminSeats />} />
  <Route path="/admin/reservation" element={<AdminReservation />} />
  <Route path="/admin/merit-rules" element={<AdminMeritRules />} />
  <Route path="/admin/instructions" element={<AdminInstructions />} />
  <Route path="/admin/previous-year-cutoffs" element={<AdminPreviousYearCutoffs />} />
  <Route path="/admin/*" element={<AdminNotFound />} />

  {/* GLOBAL 404 */}
  <Route path="*" element={<NotFound />} />
</Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
