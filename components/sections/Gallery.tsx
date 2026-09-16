"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  return (
    <section id="galeria" className="relative z-30 mx-auto -mt-8 max-w-6xl px-6 pb-24 pt-28 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:rounded-t-[2.75rem] before:border-t before:border-[#E4DCCF] before:bg-[#FCFAF7] before:shadow-[0_-12px_34px_rgba(23,21,18,0.055)] lg:pb-32 lg:pt-36">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          badge="Galéria"
          title="Každý detail má svoj význam."
          description="Moderný priestor, precízna práca a pokojná atmosféra tvoria zážitok z každej návštevy."
        />

        <div className="mt-14 space-y-6">
          <div className="overflow-hidden rounded-[2rem]">
            <Image
              src="/images/gallery-1.jpg"
              alt="Interiér barber štúdia"
              width={1600}
              height={900}
              className="h-[34rem] w-full object-cover transition duration-700 hover:scale-[1.03]"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem]">
              <Image
                src="/images/gallery-2.jpg"
                alt="Strih vlasov"
                width={800}
                height={1000}
                className="h-[26rem] w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="overflow-hidden rounded-[2rem]">
              <Image
                src="/images/gallery-3.jpg"
                alt="Úprava brady"
                width={800}
                height={1000}
                className="h-[26rem] w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}