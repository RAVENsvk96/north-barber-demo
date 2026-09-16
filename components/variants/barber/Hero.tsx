"use client";

import { company } from "@/content/company";
import { heroFeatures } from "@/content/heroFeatures";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

export default function HeroBarber() {
  return (
    <section className="relative isolate min-h-[calc(100svh-35px)] overflow-hidden bg-[#171512] text-white">
      <Image
        src={company.heroImage}
        alt="Barber pri práci v NORTH Barber Studio"
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover object-[62%_center] sm:object-[68%_center] lg:object-center"
      />

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(16,15,13,0.96)_0%,rgba(16,15,13,0.82)_35%,rgba(16,15,13,0.22)_72%,rgba(16,15,13,0.08)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.32)_0%,transparent_28%,transparent_62%,rgba(0,0,0,0.78)_100%)]" />

      <div className="mx-auto flex min-h-[calc(100svh-35px)] max-w-[90rem] flex-col justify-end px-6 pb-9 pt-40 sm:px-10 sm:pb-12 lg:px-14 lg:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <div className="mb-7 flex items-center gap-4 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[#D0B486] sm:text-xs">
            <span className="h-px w-10 bg-[#D0B486]" />
            Bratislava · Barber studio
          </div>

          <h1 className="max-w-5xl font-display text-[3.35rem] font-medium leading-[0.84] tracking-[-0.04em] sm:text-[clamp(4rem,9vw,9rem)] sm:leading-[0.82] sm:tracking-[-0.045em]">
            Strih s vlastným
            <span className="block pl-8 text-[0.82em] text-[#D0B486] sm:pl-24 sm:text-[1em] lg:pl-36">
              charakterom.
            </span>
          </h1>

          <div className="mt-9 grid max-w-4xl gap-8 border-t border-white/25 pt-7 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              Precízny strih, úprava brady a pokojný servis bez zhonu. Priestor,
              kde každý detail zodpovedá vášmu štýlu.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#sluzby"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#C4A574] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#171512] transition hover:bg-[#D8BD91]"
              >
                Objaviť služby
                <ArrowDownRight className="size-4" />
              </a>
              <a
                href="#galeria"
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/35 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-white hover:bg-white hover:text-[#171512]"
              >
                Pozrieť galériu
                <ArrowDownRight className="size-4" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-9 grid border-t border-white/15 pt-3 text-[0.7rem] uppercase tracking-[0.14em] text-white/55 sm:grid-cols-3 sm:gap-6 sm:pt-5 sm:text-xs sm:tracking-[0.16em]"
        >
          {heroFeatures.map((item, index) => (
            <div key={item.text} className="flex items-center gap-3 border-b border-white/10 py-3 last:border-b-0 sm:border-b-0 sm:py-0">
              <span className="text-[#D0B486]">0{index + 1}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
