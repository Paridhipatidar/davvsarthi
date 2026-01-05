import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { CreditCard, IndianRupee, Download, AlertCircle, CheckCircle, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const feeStructure = [
  {
    course: "B.Tech (All Branches)",
    tuition: 85000,
    development: 15000,
    exam: 5000,
    other: 5000,
    total: 110000,
    type: "UG",
  },
  {
    course: "MBA",
    tuition: 95000,
    development: 15000,
    exam: 5000,
    other: 5000,
    total: 120000,
    type: "PG",
  },
  {
    course: "BCA",
    tuition: 45000,
    development: 10000,
    exam: 4000,
    other: 3000,
    total: 62000,
    type: "UG",
  },
  {
    course: "MCA",
    tuition: 65000,
    development: 12000,
    exam: 4000,
    other: 4000,
    total: 85000,
    type: "PG",
  },
  {
    course: "B.Sc (All Streams)",
    tuition: 25000,
    development: 8000,
    exam: 3000,
    other: 2000,
    total: 38000,
    type: "UG",
  },
  {
    course: "M.Sc (All Streams)",
    tuition: 35000,
    development: 10000,
    exam: 3500,
    other: 2500,
    total: 51000,
    type: "PG",
  },
  {
    course: "B.Com Honours",
    tuition: 30000,
    development: 8000,
    exam: 3000,
    other: 2000,
    total: 43000,
    type: "UG",
  },
];

const scholarships = [
  {
    name: "Merit Scholarship",
    eligibility: "90% and above in qualifying exam",
    benefit: "100% tuition fee waiver",
  },
  {
    name: "SC/ST Scholarship",
    eligibility: "SC/ST category students",
    benefit: "Full fee reimbursement by state",
  },
  {
    name: "EWS Scholarship",
    eligibility: "Family income < ₹3 LPA",
    benefit: "50% tuition fee waiver",
  },
  {
    name: "Sports Quota",
    eligibility: "National/State level players",
    benefit: "Up to 100% fee waiver",
  },
];

const paymentModes = [
  "Online Payment (Net Banking, Credit/Debit Card, UPI)",
  "Demand Draft in favor of 'Registrar, DAVV'",
  "Bank Challan at designated bank branches",
  "Installment facility available for eligible students",
];

const contactInfo = [
  { type: "email", value: "accounts@davv.ac.in", label: "Email" },
  { type: "email", value: "fees.support@davv.ac.in", label: "Fee Support" },
  { type: "phone", value: "+91 731 2527532", label: "Office Phone" },
  { type: "phone", value: "+91 731 2467890", label: "Helpline" },
];

const Fees = () => {
  const [showContactDialog, setShowContactDialog] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/15 backdrop-blur-sm border border-background/20 text-background text-sm font-medium mb-4">
              <CreditCard className="w-4 h-4" />
              Transparent Pricing
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4">
              Fee <span className="text-accent">Structure</span>
            </h1>
            <p className="text-lg text-background/85">
              Complete breakdown of fees for all courses. Explore scholarships and 
              flexible payment options available.
            </p>
          </div>
        </div>
      </section>

      {/* Fee Table */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                Course-wise Fee Details
              </h2>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </div>

            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-semibold">Course</TableHead>
                      <TableHead className="text-right font-semibold">Tuition</TableHead>
                      <TableHead className="text-right font-semibold">Development</TableHead>
                      <TableHead className="text-right font-semibold">Exam</TableHead>
                      <TableHead className="text-right font-semibold">Other</TableHead>
                      <TableHead className="text-right font-semibold">Total/Year</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {feeStructure.map((fee, index) => (
                      <TableRow key={index} className="hover:bg-muted/30">
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-foreground">{fee.course}</span>
                            <Badge variant={fee.type === "UG" ? "default" : "secondary"} className="text-xs">
                              {fee.type}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell className="text-right text-muted-foreground">
                          {formatCurrency(fee.tuition)}
                        </TableCell>
                        <TableCell className="text-right text-muted-foreground">
                          {formatCurrency(fee.development)}
                        </TableCell>
                        <TableCell className="text-right text-muted-foreground">
                          {formatCurrency(fee.exam)}
                        </TableCell>
                        <TableCell className="text-right text-muted-foreground">
                          {formatCurrency(fee.other)}
                        </TableCell>
                        <TableCell className="text-right">
                          <span className="font-semibold text-primary">
                            {formatCurrency(fee.total)}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="mt-4 p-4 bg-info/10 border border-info/30 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-info flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> Fees are subject to revision. 
                Hostel and mess charges are additional. One-time admission fee of ₹5,000 applicable for new students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
                <IndianRupee className="w-4 h-4" />
                Financial Aid
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Scholarships & <span className="gradient-text">Concessions</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We believe financial constraints shouldn't limit your education. Explore our 
                scholarship programs designed to support deserving students.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {scholarships.map((scholarship, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {scholarship.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="text-sm text-muted-foreground">Eligibility:</span>
                      <span className="text-sm text-foreground">{scholarship.eligibility}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-sm text-muted-foreground">Benefit:</span>
                      <span className="text-sm font-semibold text-success">{scholarship.benefit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modes */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Payment Options
              </h2>
              <p className="text-muted-foreground">
                Multiple convenient ways to pay your fees
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <ul className="space-y-4">
                {paymentModes.map((mode, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{mode}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Need help with fee payment? Contact our accounts department.
                </p>
                <Button className="w-full sm:w-auto" onClick={() => setShowContactDialog(true)}>
                  Contact Accounts Office
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Dialog */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Accounts Office Contact</DialogTitle>
            <DialogDescription>
              Reach out to our accounts department for fee-related queries.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  {contact.type === "email" ? (
                    <Mail className="w-5 h-5 text-primary" />
                  ) : (
                    <Phone className="w-5 h-5 text-primary" />
                  )}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{contact.label}</p>
                  <p className="font-medium text-foreground">{contact.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-info/10 border border-info/20 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Office Hours:</strong> Monday to Friday, 10:00 AM - 5:00 PM
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Fees;
