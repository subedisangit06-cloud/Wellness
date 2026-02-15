import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Leaf, HeartPulse, BookOpen, ShieldCheck, TrendingUp } from "lucide-react";

export default function WellnessWebsite() {
  return (
    <div className="min-h-screen bg-[#F4F7F5] text-[#1F3D2B] font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2F6F4E] to-[#6B8E7B] text-white py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Stop Guessing Your Health. Start Understanding It.
        </motion.h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          We analyze your current diet, identify nutritional gaps, and create a
          personalized supplement & lifestyle strategy designed for long-term
          health optimization — not temporary fixes.
        </p>
        <Button className="bg-white text-[#2F6F4E] hover:bg-[#E6F0EA] rounded-2xl px-8 py-4 text-lg">
          Book Your 1:1 Consultation
        </Button>
      </section>

      {/* Positioning Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6">What Makes This Different</h2>
          <p className="mb-4 text-lg">
            Most people wait for symptoms. We focus on cellular nutrition and
            proactive lifestyle correction before small imbalances become
            chronic problems.
          </p>
          <p className="text-lg">
            This is not random supplement advice. It is structured diet
            analysis, evidence-informed micronutrient guidance, and practical
            lifestyle upgrades tailored to your real routine.
          </p>
        </div>
        <Card className="rounded-2xl shadow-2xl bg-white">
          <CardContent className="p-8 space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck />
              <p>Personalized Diet Assessment</p>
            </div>
            <div className="flex items-center gap-3">
              <Leaf />
              <p>Targeted Vitamin & Supplement Strategy</p>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp />
              <p>Long-Term Lifestyle Optimization Plan</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Authority + Education Section */}
      <section className="bg-[#E8F1EC] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Nutrition Must Come Before Medication
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-2xl shadow-lg bg-white">
              <CardContent className="p-6">
                <Leaf className="mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cellular Function</h3>
                <p>
                  Every organ system relies on micronutrients for energy
                  production, detoxification, and repair. Without adequate
                  nutrients, cells cannot perform optimally.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-lg bg-white">
              <CardContent className="p-6">
                <HeartPulse className="mb-4" />
                <h3 className="text-xl font-semibold mb-3">Root Cause Focus</h3>
                <p>
                  Many chronic symptoms are downstream effects of nutritional
                  deficiencies and lifestyle stress — not isolated diseases.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-lg bg-white">
              <CardContent className="p-6">
                <BookOpen className="mb-4" />
                <h3 className="text-xl font-semibold mb-3">Education First</h3>
                <p>
                  When you understand your own nutrition patterns, you stop
                  depending solely on reactive healthcare and start building
                  resilience proactively.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Free Guide: The Cellular Health Blueprint
        </h2>
        <p className="mb-8 text-lg">
          Discover the 7 most common nutritional gaps affecting energy,
          immunity, and long-term vitality — and how to correct them.
        </p>
        <div className="grid gap-4 max-w-md mx-auto">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Button className="bg-[#2F6F4E] text-white hover:bg-[#24563C] rounded-2xl py-3">
            Get Free Blueprint
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#F0F5F2] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Client Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-2xl shadow-lg bg-white">
              <CardContent className="p-6">
                <p>
                  "I finally understood what my body needed. My energy levels
                  improved within weeks."
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-lg bg-white">
              <CardContent className="p-6">
                <p>
                  "The supplement plan was structured and simple. No more
                  random purchases."
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-lg bg-white">
              <CardContent className="p-6">
                <p>
                  "This approach made me proactive instead of reactive about my
                  health."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="bg-[#2F6F4E] text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Ready to Take Control of Your Health?
        </h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Book your private 1:1 consultation and receive a personalized diet
          analysis and supplement strategy tailored to your lifestyle.
        </p>
        <Button className="bg-white text-[#2F6F4E] hover:bg-[#E6F0EA] rounded-2xl px-10 py-4 text-lg">
          Schedule Your Session
        </Button>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact</h2>
        <div className="grid gap-4">
          <Input placeholder="Full Name" />
          <Input placeholder="Email Address" />
          <Textarea placeholder="Your Message" />
          <Button className="bg-[#2F6F4E] text-white hover:bg-[#24563C] rounded-2xl py-3">
            Send Message
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F3D2B] text-white py-8 text-center">
        <p>© {new Date().getFullYear()} Wellness & Lifestyle Coaching</p>
        <p className="text-sm mt-2">
          Empowering proactive, nutrition-first health transformation.
        </p>
      </footer>
    </div>
  );
}
