import { MapPin, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import ExternalLink from "@/components/ExternalLink";
import Section from "@/components/Section";
import BlogList from "@/components/BlogList";
import { featuredBlogs } from "@/blogs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex justify-center relative">
      <div className="ambient-bg" />
      <ThemeToggle />

      <main className="max-w-3xl w-full px-4 py-10 md:py-16">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl text-foreground mb-1.5 font-medium">mohit appari</h1>
          <div className="flex items-center gap-1.5 text-muted-foreground mb-4">
            <MapPin className="w-4 h-4 text-proud" />
            <span>tallahassee, fl</span>
          </div>
          <p className="text-muted-foreground">domains: quant, finance, stats, ai, ml, python</p>
        </header>

        {/* Bio */}
        <div className="space-y-6 mb-12 text-foreground leading-relaxed">
          <p>
            Hey! I’m Mohit, experienced developer and a data scientist with a passion for finance, trading and quantitative analysis. Currently working as a data analyst
            at <ExternalLink href="https://intranet.apd.myflorida.com/" proud>apd</ExternalLink>, where a typical day involves diving into data, analyzing and processing it to drive 
            insights and support decision-making.
          </p>
          <p>
            Outside of work, I'm building <ExternalLink href='#' proud>atlas</ExternalLink> a systematic trading platform written in native 
            python, designed to be fast, flexible and scalable. It's my playground to research, implement trading stratergies, backtest and paper trade them all 
            in one unified platform integrating ai and data driven insights.
          </p>

          <p>
            I enjoy writing, be it in finance, data, or some random project that I explore. When I’m not deep in data or markets, you’ll find me exploring new cafés, experimenting with coffee,
            dabbling in photography, or just chilling with some good music and gaming. 
          </p>

          <p className="italic text-muted-foreground">
            ps: i'm most proud of all the things in <span className="text-proud">red</span> :)
          </p>
        </div>

        {/* Good Reads */}
        <Section title="good reads">
          <BlogList blogs={featuredBlogs} />
          <Link
            to="/blogs"
            className="inline-block mt-4 text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2 text-sm"
          >
            view all →
          </Link>
        </Section>

        {/* Past Work */}
        <Section title="past work">
          <p>
            <ExternalLink href="https://intranet.apd.myflorida.com/">APD</ExternalLink> - data analyst
          </p>
          <p>
            <ExternalLink href="https://bin-ouyang.com/people/">Florida State University</ExternalLink> - researcher
          </p>
          <p>
            <ExternalLink href="https://www.spglobal.com/en">S&P Global</ExternalLink> - software developer
          </p>
          <p>
            <ExternalLink href="https://www.lg.com/in/">LG</ExternalLink> - software developer intern
          </p>
          <p>
            <ExternalLink href="https://www.itchotels.com/in/en">ITC</ExternalLink> - software developer intern
          </p>
          <p>
            read more on <ExternalLink href="https://www.linkedin.com/in/moh1tt">linkedIn</ExternalLink> /{" "}
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
            masters in DS at <ExternalLink href="https://www.fsu.edu/">florida state university</ExternalLink> (2023-25)
          </p>
          <p>
            bachelors in CS at <ExternalLink href="#">christ university</ExternalLink> (2018-22)
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
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
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
