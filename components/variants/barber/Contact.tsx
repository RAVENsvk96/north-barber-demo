"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export default function ContactBarber() {
  return (
    <section id="kontakt" className="relative z-50 -mt-8 rounded-t-[2.75rem] border-t border-[#E4DCCF] bg-[#FCFAF7] px-6 pb-24 pt-28 shadow-[0_-12px_34px_rgba(23,21,18,0.055)] lg:pb-32 lg:pt-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading badge="Demo projekt" title="Páči sa vám tento barber koncept?" description="Toto je ukážka dizajnu a vývoja, nie stránka skutočného štúdia. Rezervácie ani osobné údaje tu neprijímame." />
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-14 rounded-[2rem] border border-[#E6DED2] bg-white p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-2xl"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A7865A]/10"><ShieldCheck className="h-6 w-6 text-[#A7865A]" /></div><h3 className="mt-6 text-2xl font-semibold text-[#111111]">Bez fiktívnych rezervácií a kontaktov</h3><p className="mt-4 leading-7 text-[#666666]">Telefón, email, adresa a mapa sú v demo verzii zámerne vypnuté. Ak hľadáte autora projektu, pokračujte na jeho portfólio.</p></div>
          <a href="https://www.samuelzeliska.sk/#kontakt" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#A7865A] px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8f704b] lg:mt-0">Kontaktovať autora <ArrowUpRight className="h-5 w-5" /></a>
        </motion.div>
      </div>
    </section>
  );
}
