type Props = {
  src: string;
  alt: string;
  /** Natural aspect ratio of the photo (width / height). */
  ratio: number;
};

const brand = 'linear-gradient(123deg, #B600A8 0%, #7621B0 50%, #BE4C00 100%)';

const corners = {
  tl: '-left-3.5 -top-3.5 border-l-2 border-t-2 rounded-tl-xl',
  tr: '-right-3.5 -top-3.5 border-r-2 border-t-2 rounded-tr-xl',
  bl: '-bottom-3.5 -left-3.5 border-b-2 border-l-2 rounded-bl-xl',
  br: '-bottom-3.5 -right-3.5 border-b-2 border-r-2 rounded-br-xl',
} as const;

export default function FramedPortrait({ src, alt, ratio }: Props) {
  return (
    <div className="relative" style={{ aspectRatio: String(ratio) }}>
      {/* Brand glow behind the frame */}
      <div aria-hidden className="absolute -inset-3 -z-10 rounded-[40px] opacity-50 blur-3xl" style={{ background: brand }} />

      {/* Gradient outline + photo */}
      <div className="h-full w-full rounded-[26px] p-[3px]" style={{ background: brand }}>
        <div className="h-full w-full overflow-hidden rounded-[23px] bg-[#0C0C0C]">
          <img
            src={src}
            alt={alt}
            draggable={false}
            fetchPriority="high"
            className="h-full w-full object-cover"
            style={{ filter: 'contrast(1.04) saturate(1.05)' }}
          />
        </div>
      </div>

      {/* Corner brackets */}
      {Object.values(corners).map((c) => (
        <span key={c} aria-hidden className={`absolute h-7 w-7 border-[#D7E2EA] ${c}`} />
      ))}
    </div>
  );
}
