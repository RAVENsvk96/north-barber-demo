"use client";

import Logo from "@/components/ui/Logo";
import { navigation } from "@/content/navigation";
import { ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";

const portfolioUrl = "https://www.samuelzeliska.sk/#projekty";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="border-b border-[#A7865A]/25 bg-[#A7865A]/10 px-6 py-2.5 text-center text-xs font-semibold tracking-wide text-[#111111]">
        UKÁŽKOVÝ PROJEKT — nejde o skutočné barber štúdio ani rezervačný web
      </div>
      <header className="sticky top-0 z-50 border-b border-[#E6DED2] bg-[#F7F5F2]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5" aria-label="Hlavná navigácia">
          <Logo />
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navigation.map((item) => <a key={item.href} href={item.href} className="text-[#666666] transition hover:text-[#A7865A]">{item.label}</a>)}
          </div>
          <div className="flex items-center gap-3">
            <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-xl bg-[#A7865A] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8f704b] sm:inline-flex">
              Späť na portfólio <ExternalLink className="h-4 w-4" />
            </a>
            <button type="button" aria-label={isOpen ? "Zatvoriť menu" : "Otvoriť menu"} aria-expanded={isOpen} onClick={() => setIsOpen((value) => !value)} className="rounded-xl border border-[#E6DED2] bg-white p-2 text-[#111111] md:hidden">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className="border-t border-[#E6DED2] bg-[#F7F5F2] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium">
              {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="text-[#666666] hover:text-[#A7865A]">{item.label}</a>)}
              <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 font-semibold text-[#A7865A]">Späť na portfólio <ExternalLink className="h-4 w-4" /></a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
