import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Target, Wrench, Users, TrendingUp } from "lucide-react";
import { getProjectById } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-primary hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  const sections = [
    { icon: Target, title: "Objectives", items: project.objectives, color: "primary" },
    { icon: Wrench, title: "Tools & Technologies", items: project.tools, color: "accent" },
    { icon: Users, title: "My Contributions", items: project.contributions, color: "primary" },
    { icon: TrendingUp, title: "Outcomes & Impact", items: project.outcomes, color: "accent" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to projects
              </Link>

              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-primary text-sm font-medium mb-2 block"
                  >
                    {project.company}
                  </motion.span>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold"
                  >
                    {project.title}
                  </motion.h1>
                </div>

                <motion.a
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-secondary/80 transition-all group"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Website
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-sm font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-4xl"
            >
              <h2 className="text-2xl font-bold mb-4 gradient-text">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Details Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="p-6 rounded-xl card-gradient border border-border"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 rounded-lg ${section.color === 'primary' ? 'bg-primary/10 border-primary/20' : 'bg-accent/10 border-accent/20'} border`}>
                      <section.icon className={`w-5 h-5 ${section.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <h3 className="text-xl font-semibold">{section.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${section.color === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-center p-8 rounded-xl card-gradient border border-border"
            >
              <h3 className="text-2xl font-bold mb-3">Interested in similar solutions?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help with your data engineering challenges.
              </p>
              <a
                href="https://www.upwork.com/freelancers/~01b7c271b3c10b02a9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all glow-primary"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
