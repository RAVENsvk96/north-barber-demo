"use client";

import Logo from "@/components/ui/Logo";
import { navigation } from "@/content/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const portfolioUrl = "https://www.samuelzeliska.sk/#projekty";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative z-[60] border-b border-white/10 bg-[#171512] px-5 py-2.5 text-center text-[0.65rem] font-medium uppercase tracking-[0.22em] text-white/65">
        Ukážkový projekt — nejde o skutočné barber štúdio ani rezervačný web
      </div>

      <header className="absolute left-0 right-0 top-[35px] z-50 border-b border-white/15 text-white">
        <nav
          className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-5 sm:px-10 lg:px-14"
          aria-label="Hlavná navigácia"
        >
          <Logo inverted />

          <div className="hidden items-center gap-10 text-xs font-semibold uppercase tracking-[0.18em] lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/70 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 border border-white/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:border-[#C4A574] hover:bg-[#C4A574] hover:text-[#171512] sm:inline-flex"
            >
              Autor projektu
              <ArrowUpRight className="size-4" />
            </a>

            <button
              type="button"
              aria-label={isOpen ? "Zatvoriť menu" : "Otvoriť menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((value) => !value)}
              className="grid size-11 place-items-center border border-white/30 text-white transition hover:border-[#C4A574] lg:hidden"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="border-t border-white/15 bg-[#171512]/98 px-6 py-7 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-5 text-sm font-semibold uppercase tracking-[0.16em]">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-white/10 pb-4 text-white/75 transition hover:text-[#C4A574]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-[#C4A574]"
              >
                Autor projektu
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
