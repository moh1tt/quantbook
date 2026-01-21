import { MapPin } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import ExternalLink from "@/components/ExternalLink";
import Section from "@/components/Section";
import PhotoGallery from "@/components/PhotoGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />

      <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl text-foreground mb-1.5 font-medium">mohit appari</h1>
          <div className="flex items-center gap-1.5 text-muted-foreground mb-4">
            <MapPin className="w-4 h-4 text-proud" />
            <span>tallahassee, fl</span>
          </div>
          <p className="text-muted-foreground">
            domains: software, finance, ai, forecasting, backtesting, and systematic trading
          </p>
        </header>

        {/* Bio */}
        <div className="space-y-6 mb-12 text-foreground leading-relaxed">
          <p>
            I'm [Your Name], and I've explored various projects, built multiple software products, and founded a
            company. I thrive in spaces where I'm not the smartest in the room but I can almost talk to anyone about
            anything.
          </p>

          <p>
            I'm a student at <ExternalLink href="#">University Name</ExternalLink>, majoring in Computer Science. This
            past summer, I worked as a <ExternalLink href="#">software engineer intern</ExternalLink> at{" "}
            <ExternalLink href="#">Company</ExternalLink>.
          </p>

          <p>
            Currently, I'm building{" "}
            <ExternalLink href="#" proud>
              project name
            </ExternalLink>
            , a tool that helps people do amazing things. We're focused on making complex processes simple and
            accessible.
          </p>

          <p>
            Outside of work, I'm passionate about exploring outdoors—whether it's hiking, photography, or traveling.
            Find my adventures on <ExternalLink href="#">instagram</ExternalLink>.
          </p>

          <p>
            I've also been writing consistently for the past year on <ExternalLink href="#">twitter</ExternalLink> about
            my learnings (professionally & personally) and the progress I make weekly.
          </p>

          <p className="italic text-muted-foreground">
            ps: i'm most proud of all the things in <span className="text-proud">red</span> :)
          </p>
        </div>

        {/* Pictures */}
        <PhotoGallery />

        {/* Building */}
        <Section title="building">
          <p>building an AI tool that helps automate workflows.</p>
          <p>
            <ExternalLink href="#" proud>
              project name
            </ExternalLink>{" "}
            - a productivity tool for developers.
          </p>
        </Section>

        {/* Startups */}
        <Section title="startups I've built prev">
          <p>
            <ExternalLink href="#" proud>
              startup.io
            </ExternalLink>{" "}
            — helped companies scale their operations with custom solutions.
          </p>
          <p>
            <ExternalLink href="#">another.app</ExternalLink> - built a platform and processed $10,000 in transaction
            volume.
          </p>
        </Section>

        {/* Past Work */}
        <Section title="past work">
          <p>
            <ExternalLink href="#">company.com</ExternalLink> - software engineer intern
          </p>
          <p>
            <ExternalLink href="#">startup.io</ExternalLink> - product manager
          </p>
          <p>
            read more on <ExternalLink href="#">linkedIn</ExternalLink> /{" "}
            <ExternalLink href="#" proud>
              resume
            </ExternalLink>
          </p>
        </Section>

        {/* Pet Projects */}
        <Section title="pet projects">
          <p>
            <ExternalLink href="#">project-one</ExternalLink>
          </p>
          <p>
            <ExternalLink href="#">project-two</ExternalLink>
          </p>
          <p>
            <ExternalLink href="#">project-three</ExternalLink>
          </p>
          <p>
            read more on <ExternalLink href="#">github</ExternalLink>
          </p>
        </Section>

        {/* Education */}
        <Section title="education">
          <p>
            masters in CS at <ExternalLink href="#">university</ExternalLink> (2024-26)
          </p>
          <p>
            bachelors in CS at <ExternalLink href="#">college</ExternalLink> (2020-24)
          </p>
        </Section>

        {/* Featured */}
        <Section title="featured">
          <p>
            <ExternalLink href="#">tech blog feature</ExternalLink>
          </p>
          <p>
            <ExternalLink href="#">podcast interview</ExternalLink>
          </p>
        </Section>

        {/* Fellowships */}
        <Section title="fellowships">
          <p>
            <ExternalLink href="#" proud>
              fellowship program ('23)
            </ExternalLink>
          </p>
          <p>
            <ExternalLink href="#">accelerator program</ExternalLink>
          </p>
        </Section>

        {/* Hobbies */}
        <Section title="what I do apart from work">
          <p>
            <ExternalLink href="#">photography</ExternalLink> — my <ExternalLink href="#">portfolio</ExternalLink>
          </p>
        </Section>

        {/* Toys */}
        <Section title="my toys">
          <p>mechanical keyboards</p>
          <p>
            <ExternalLink href="#">interesting gadget</ExternalLink>
          </p>
        </Section>

        {/* Tip */}
        <Section title="tip me">
          <p>
            <ExternalLink href="#">buymeacoffee</ExternalLink>
          </p>
        </Section>
      </main>
    </div>
  );
};

export default Index;
