import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { HelpCircle, Bot, Send, Search, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "Admission Process",
    questions: [
      {
        q: "When does the admission process start?",
        a: "The admission process typically starts in June each year. Online registration opens on June 1st and closes on June 30th. We recommend starting your application early to avoid last-minute issues.",
      },
      {
        q: "Is there an entrance exam for admission?",
        a: "Yes, admission to most programs requires clearing entrance exams. For B.Tech programs, admission is based on CUET (Common University Entrance Test) and JEE (Joint Entrance Examination) scores. For other programs, DAVV conducts the Common Entrance Test (DAVV CET). The specific exam requirement depends on the course you're applying for.",
      },
      {
        q: "Can I apply for multiple courses?",
        a: "Yes, you can select up to 5 course preferences in a single application form. During counseling, seats are allocated based on your rank and preference order.",
      },
      {
        q: "What is the counseling process?",
        a: "Counseling is conducted online in multiple rounds. Based on your CET rank and document verification, seats are allotted. You must confirm your seat by paying the admission fee within the specified time.",
      },
    ],
  },
  {
    category: "Eligibility",
    questions: [
      {
        q: "What are the eligibility criteria for B.Tech?",
        a: "For B.Tech programs, you need to have passed 10+2 with Physics, Chemistry, and Mathematics with a minimum of 60% marks (55% for reserved categories).",
      },
      {
        q: "Is there any age limit for admission?",
        a: "For undergraduate programs, there is generally no upper age limit. For some specific programs, age restrictions may apply as per university norms.",
      },
      {
        q: "Are marks relaxation available for reserved categories?",
        a: "Yes, SC/ST candidates get 10% relaxation and OBC candidates get 5% relaxation in minimum eligibility marks for most programs.",
      },
    ],
  },
  {
    category: "Fees & Payments",
    questions: [
      {
        q: "What is the fee payment schedule?",
        a: "Fees can be paid in two installments - 60% at the time of admission and 40% before the second semester. Late payment attracts a penalty of ₹100 per day.",
      },
      {
        q: "Are there any scholarships available?",
        a: "Yes, DAVV offers various scholarships including Merit Scholarship, SC/ST Scholarship, EWS Scholarship, and Sports Quota benefits. Check the Fees page for details.",
      },
      {
        q: "Can I get a refund if I cancel my admission?",
        a: "Yes, fee refund is available as per UGC guidelines. Deductions apply based on the cancellation date. Full refund minus ₹1,000 processing fee is given if cancelled before classes begin.",
      },
    ],
  },
  {
    category: "Documents",
    questions: [
      {
        q: "What documents are required for admission?",
        a: "Required documents include 10th & 12th mark sheets, Transfer Certificate, Character Certificate, Domicile Certificate, Category Certificate (if applicable), Aadhar Card, and passport photos.",
      },
      {
        q: "Are original documents required?",
        a: "Original documents are required at the time of counseling and verification. Self-attested photocopies can be submitted with the application form initially.",
      },
    ],
  },
];

interface Message {
  role: "user" | "assistant";
  content: string;
}

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your Admission Counselor Assistant. Ask me anything about DAVV admissions, eligibility, fees, or the application process. I'm here to help!",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const filteredFaqs = faqCategories.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = { role: "user", content: inputMessage };
    setChatMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate response
    setTimeout(() => {
      const responses = [
        "Based on your query, I'd recommend checking the Eligibility page for detailed criteria. The minimum marks required vary by course and category.",
        "Great question! The admission process has 6 key steps: Registration → Application → Documents → Payment → Entrance Exam → Counseling. Would you like me to explain any step in detail?",
        "For B.Tech programs, you need 10+2 with PCM and minimum 60% marks. SC/ST candidates get 10% relaxation. Should I check your eligibility for a specific course?",
        "The fee structure varies by course. B.Tech costs around ₹1.1 lakhs/year while BCA is approximately ₹62,000/year. Scholarships are available for meritorious students!",
        "Important dates: Registration opens June 1st, deadline is June 30th, exam in mid-July, and results by July 25th. Classes begin August 20th.",
      ];

      const response: Message = {
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)],
      };
      setChatMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 1500);
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
              <HelpCircle className="w-4 h-4" />
              Get Answers
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4">
              Frequently Asked <span className="text-accent">Questions</span>
            </h1>
            <p className="text-lg text-background/85">
              Find answers to common questions or chat with our counselor 
              for personalized guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* FAQ Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="relative flex-1 mr-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Link to="/eligibility">
                  <Button className="whitespace-nowrap">
                    Check Eligibility
                  </Button>
                </Link>
              </div>

              <div className="space-y-6">
                {filteredFaqs.map((category, catIndex) => (
                  <div key={catIndex}>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                      {category.category}
                    </h3>
                    <Accordion type="single" collapsible className="space-y-2">
                      {category.questions.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`${catIndex}-${index}`}
                          className="bg-card border border-border rounded-xl px-4 data-[state=open]:border-primary/30"
                        >
                          <AccordionTrigger className="text-left text-foreground hover:no-underline py-4">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pb-4">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}

                {filteredFaqs.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <p>No FAQs found matching your search.</p>
                    <p className="text-sm mt-2">Try asking our Counselor instead!</p>
                  </div>
                )}
              </div>
            </div>

            {/* Chatbot */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden flex flex-col h-[600px] sticky top-24">
              {/* Header */}
              <div className="p-4 bg-primary flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                  <Bot className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-background">Admission Counselor</h3>
                  <p className="text-xs text-background/70">Online • Ready to help</p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        message.role === "user" ? "bg-primary" : "bg-primary/10"
                      }`}
                    >
                      {message.role === "user" ? (
                        <MessageCircle className="w-4 h-4 text-primary-foreground" />
                      ) : (
                        <Bot className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <div
                      className={`max-w-[80%] p-3 rounded-xl ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <div className="bg-muted p-3 rounded-xl">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border bg-muted/30">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask me anything about admissions..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Responses are for guidance only. Verify with official sources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
