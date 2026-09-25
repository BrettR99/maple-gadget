import Image from "next/image";

export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/logo.webp"
        alt="Maple Gadget logo"
        width={size}
        height={size}
        className="rounded-xl"
        priority
      />
      <span className="font-display text-xl font-bold tracking-tight text-white">
        Maple<span className="text-maple-400">Gadget</span>
      </span>
    </span>
  );
}
