export const Hero = () => {
  return (
    <section className="flex min-h-[80vh] w-full items-center justify-center bg-[#0E0C0A] px-6">
      <div className="flex flex-col items-center">
        <h1 className="flex flex-col items-center text-center">
          <span className="font-fraunces font-light text-4xl  md:text-6xl text-[#D7D2C9]">
            We build software
          </span>
          <span className="font-fraunces font-bold text-4xl md:text-6xl bg-linear-to-r from-[#C9A84C] to-[#967d35] bg-clip-text text-transparent pb-1">
            that moves your business
          </span>
          <span className="font-fraunces font-light text-4xl  md:text-6xl text-[#D7D2C9]">
            forward
          </span>
        </h1>
        <p className="mt-10 max-w-2xl text-center text-base text-[#7B6E63]">
          Kestrel is a small-by-choice studio delivering precision-crafted web
          products. Direct communication, zero bloat, and results you can stake
          your reputation on.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded bg-linear-to-r from-[#C9A84C] to-[#967d35] px-6 py-3 text-sm font-medium text-[#0E0C0A] transition-opacity duration-200 hover:opacity-90"
          >
            Start a project →
          </a>
          <a
            href="#work"
            className="px-6 py-3 text-sm font-medium text-[#7B6E63] transition-colors duration-200 hover:text-[#C9A84C] focus:text-[#C9A84C]"
          >
            View our work →
          </a>
        </div>
      </div>
    </section>
  );
};
