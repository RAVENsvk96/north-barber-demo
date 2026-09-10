"use client";

import Button from "@/components/ui/Button";
import { company } from "@/content/company";
import { heroFeatures } from "@/content/heroFeatures";
import { motion } from "framer-motion";
import { ExternalLink, Scissors } from "lucide-react";
import Image from "next/image";

export default function HeroBarber() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5F2] px-6 py-20 sm:py-24 lg:py-32">
      <div className="absolute right-0 top-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-[#A7865A]/15 blur-3xl" />
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#A7865A]/30 bg-[#A7865A]/10 px-4 py-2 text-sm font-semibold text-[#A7865A]"><Scissors className="h-4 w-4" /> Demo koncept barber webu</div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#A7865A]">{company.slogan}</p>
          <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-[#111111] sm:text-6xl lg:text-7xl">Strih, ktorý sedí vášmu štýlu.</h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[#666666]">Ukážka toho, ako môže výrazný a prehľadný web prezentovať služby moderného barber štúdia.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#sluzby">Pozrieť ukážku</Button>
            <a href="https://www.samuelzeliska.sk/#projekty" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E6DED2] bg-white px-6 py-3 font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:border-[#A7865A]/60 hover:text-[#A7865A]">Autor projektu <ExternalLink className="h-5 w-5" /></a>
          </div>
          <p className="mt-6 max-w-lg text-sm leading-6 text-[#666666]">Fiktívny prezentačný obsah. Web neprijíma rezervácie ani osobné údaje.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            {heroFeatures.map((item) => { const Icon = item.icon; return <div key={item.text} className="inline-flex items-center gap-2 rounded-full border border-[#E6DED2] bg-white px-4 py-2 text-sm font-medium text-[#666666] shadow-sm"><Icon className="h-4 w-4 text-[#A7865A]" /><span>{item.text}</span></div>; })}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="overflow-hidden rounded-[2rem] border border-[#E6DED2] bg-white p-3 shadow-2xl shadow-black/10">
          <div className="relative overflow-hidden rounded-[1.5rem]"><Image src={company.heroImage} alt="Ukážkový vizuál webu barber štúdia" width={1200} height={1600} priority className="h-[34rem] w-full object-cover object-right lg:h-[46rem]" /></div>
        </motion.div>
      </div>
    </section>
  );
}
