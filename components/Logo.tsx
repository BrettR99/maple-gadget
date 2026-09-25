export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className="grid place-items-center rounded-xl bg-gradient-to-br from-maple-500 to-maple-600 shadow-[0_8px_24px_-8px_rgba(229,56,59,0.7)]"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 32 32"
          width={size * 0.68}
          height={size * 0.68}
          fill="white"
          aria-hidden="true"
        >
          <path d="M16 1.5l2.1 5.6 4.6-1.9-1.4 4.6 5.2.6-3.9 3.2 4.6 3.4-5.4.5.9 5.2-4.6-2.4-.6 6.1-2.1 4.1-2.1-4.1-.6-6.1-4.6 2.4.9-5.2-5.4-.5 4.6-3.4-3.9-3.2 5.2-.6-1.4-4.6 4.6 1.9z" />
          <circle cx="16" cy="14.5" r="2.1" fill="#c0272f" />
          <circle cx="16" cy="14.5" r="1" fill="white" />
        </svg>
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-white">
        Maple<span className="text-maple-400">Gadget</span>
      </span>
    </span>
  );
}
