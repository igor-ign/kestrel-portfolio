interface SectionHeadingProps {
  label: string;
  title: string;
  highlight: string;
  id?: string;
}

export const SectionHeading = ({ label, title, highlight, id }: SectionHeadingProps) => {
  return (
    <>
      <p className="font-sans text-sm font-semibold tracking-widest text-[#C9A84C] mb-6">
        {label}
      </p>
      <h2 id={id} className="font-fraunces font-light text-3xl md:text-5xl text-white mb-14">
        {title}{' '}
        <span className="bg-linear-to-r from-[#C9A84C] to-[#967d35] bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
    </>
  );
};
