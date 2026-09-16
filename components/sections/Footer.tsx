import Logo from "@/components/ui/Logo";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#E6DED2] bg-[#F7F5F2]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div><Logo className="h-20 w-auto" /><p className="mt-4 max-w-xl text-sm leading-6 text-[#666666]">Ukážkový webový koncept vytvorený Samuelom Zelískom. Nejde o skutočné barber štúdio ani ponuku služieb.</p></div>
        <a href="https://www.samuelzeliska.sk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#A7865A] hover:text-[#8f704b]">www.samuelzeliska.sk <ExternalLink className="h-4 w-4" /></a>
      </div>
      <div className="border-t border-[#E6DED2] px-6 py-4 text-center text-sm text-[#666666]">© {new Date().getFullYear()} Samuel Zelíska · Portfolio demo projekt</div>
    </footer>
  );
}
