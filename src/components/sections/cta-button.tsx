import { Heart } from 'lucide-react';

const CtaButton = () => {
  return (
    <>
      <a
        href="https://trksy.org/aff_c?offer_id=3893&aff_id=64391"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-9 text-white font-bold text-xs rounded-lg shadow-2xl border border-primary/15 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(43,103,172,0.28)] mb-1.5 w-full md:w-auto relative !mx-0 !py-2 !rounded-[18px] !bg-[linear-gradient(90deg,#3f7fc6_0%,#2b67ac_100%)] !px-2.5 hover:brightness-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Heart
          className="w-2.5 h-2.5 mr-1 text-white/90 animate-pulse"
          fill="currentColor"
        />
        START REVIEW →
        <Heart
          className="w-2.5 h-2.5 ml-1 text-white/90 animate-pulse"
          fill="currentColor"
        />
      </a>
      <p className="text-foreground/75 text-[9px] italic mb-2">
        (Instant approval · No purchase required)
      </p>
    </>
  );
};

export default CtaButton;
