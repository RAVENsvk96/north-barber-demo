import Link from "next/link";
import { company } from "@/content/company";

type LogoProps = {
  className?: string;
  inverted?: boolean;
};

export default function Logo({ className = "", inverted = false }: LogoProps) {
  return (
    <Link href="#" className={`inline-flex flex-col leading-none ${className}`}>
      <span
        className={`text-2xl font-semibold tracking-[0.22em] ${
          inverted ? "text-white" : "text-[#111111]"
        }`}
      >
        {company.name}
      </span>
      <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-[#C4A574]">
        Barber Studio
      </span>
    </Link>
  );
}
