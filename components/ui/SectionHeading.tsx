interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`font-heading text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[0.01em] mb-4 ${
          light ? 'text-cream' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body text-lg md:text-xl max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-cream/75' : 'text-oak-light'}`}
        >
          {subtitle}
        </p>
      )}
      <div className={`ornament mt-6 ${centered ? '' : 'justify-start'}`}>
        <span className="text-gold text-xs">◆</span>
      </div>
    </div>
  );
}
