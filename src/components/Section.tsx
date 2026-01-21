interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="mb-10">
      <h2 className="text-foreground text-lg mb-4">{title}</h2>
      <div className="space-y-2 text-muted-foreground">
        {children}
      </div>
    </section>
  );
};

export default Section;
