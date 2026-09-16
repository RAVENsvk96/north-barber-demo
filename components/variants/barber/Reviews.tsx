"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { motion } from "framer-motion";
import { LayoutTemplate, Scissors, Smartphone } from "lucide-react";

const goals = [
  { icon: Scissors, title: "Výrazná identita", text: "Kontrastná typografia a tlmené prémiové farby komunikujú charakter moderného barber štúdia." },
  { icon: LayoutTemplate, title: "Jasná ponuka", text: "Služby a dôležité informácie sú usporiadané tak, aby sa návštevník rýchlo zorientoval." },
  { icon: Smartphone, title: "Mobilná použiteľnosť", text: "Rozhranie zostáva čitateľné, rýchle a pohodlné aj na menších obrazovkách." },
];

export default function ReviewsBarber() {
  return (
    <section id="recenzie" className="relative z-40 -mt-8 rounded-t-[2.75rem] border-t border-[#DDD3C5] bg-[#EEE9E2] px-6 pb-24 pt-28 shadow-[0_-12px_34px_rgba(23,21,18,0.055)] lg:pb-32 lg:pt-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading badge="Ciele návrhu" title="Web vytvorený pre silný prvý dojem." description="Táto sekcia predstavuje dizajnové ciele demo projektu. Neobsahuje recenzie skutočných klientov." />
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {goals.map((item, index) => { const Icon = item.icon; return (
            <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.06 }} className="rounded-[1.5rem] border border-[#E6DED2] bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#A7865A]/10"><Icon className="h-5 w-5 text-[#A7865A]" /></div>
              <h3 className="mt-6 text-xl font-semibold text-[#111111]">{item.title}</h3><p className="mt-4 leading-7 text-[#666666]">{item.text}</p>
            </motion.article>
          ); })}
        </div>
      </div>
    </section>
  );
}
