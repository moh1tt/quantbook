import { MapPin, Linkedin, Twitter, Mail } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import ExternalLink from "@/components/ExternalLink";
import Section from "@/components/Section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex justify-center">
      <ThemeToggle />

      <main className="max-w-2xl w-full px-2 py-10 md:py-16">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl text-foreground mb-1.5 font-medium">mohit appari</h1>
          <div className="flex items-center gap-1.5 text-muted-foreground mb-4">
            <MapPin className="w-4 h-4 text-proud" />
            <span>tallahassee, fl</span>
          </div>
          <p className="text-muted-foreground">domains: ai, finance, dev, systematic trading</p>
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

        {/* Tip */}
        <Section title="tip me">
          <p>
            <ExternalLink href="#">buymeacoffee</ExternalLink>
          </p>
        </Section>

        {/* Social Links */}
        <footer className="flex items-center gap-6 pt-8 border-t border-border">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="mailto:your@email.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </footer>
      </main>
    </div>
  );
};

export default Index;
