import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Jazz NPM Telecom",
    description: "Deep analytics across multi-vendor telecom systems for network health monitoring at national scale. Unified PRS (Huawei), NetNumen, and ZTE data into standardized KPIs.",
    url: "https://jazz.com.pk/",
    tags: ["SQL", "Python", "Plotly", "Telecom"],
    impact: ["Unified multi-vendor visibility", "Reduced investigation time", "Eliminated static reports"],
  },
  {
    title: "Zain Iraq Automation",
    description: "Automated telecom data pipelines replacing manual workforce-heavy reporting. Built end-to-end data orchestration with AWS MWAA and Airflow.",
    url: "https://www.iq.zain.com/en/",
    tags: ["AWS", "Airflow", "NetAct", "SAP"],
    impact: ["Major reduction in manual work", "Hours → automated schedules", "Scalable analytics"],
  },
  {
    title: "ServiceMarket Analytics",
    description: "Scalable Redshift-based analytics warehouse with marketing attribution. Real-time replication via AWS DMS for on-demand services platform.",
    url: "https://servicemarket.com",
    tags: ["Redshift", "AWS DMS", "Tableau", "Looker"],
    impact: ["Unified marketing + ops analytics", "Accurate attribution insights", "Single source of truth"],
  },
  {
    title: "Terafort Gaming Analytics",
    description: "Full-funnel gaming analytics combining Singular, Firebase, and GA4. Built retention cohorts and funnel analysis for multiple games.",
    url: "https://www.terafort.com/",
    tags: ["BigQuery", "Firebase", "GA4", "Looker Studio"],
    impact: ["Clear conversion visibility", "Improved marketing decisions", "Faster iteration"],
  },
  {
    title: "Biolabs D2C Platform",
    description: "Full-funnel D2C analytics combining Shopify, multi-channel ads, Klaviyo CRM, and GA4. Cohort-based LTV models and ROAS optimization.",
    url: "https://scandinavianbiolabs.com/",
    tags: ["Shopify", "BigQuery", "Looker", "Fivetran"],
    impact: ["Clear ROI visibility", "Improved budget allocation", "Deep LTV understanding"],
  },
  {
    title: "Regeneron Enterprise",
    description: "Enterprise data pipelines in regulated pharmaceutical environment. Built compliant, scalable solutions using Spark and NiFi.",
    url: "https://www.regeneron.com/",
    tags: ["Spark", "NiFi", "Airflow", "Redshift"],
    impact: ["Enterprise-grade platform", "Compliance-ready", "Multi-BU analytics"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Enterprise-scale data solutions across telecom, e-commerce, gaming, and pharmaceuticals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-xl card-gradient border border-border hover:border-primary/40 transition-all duration-300 cursor-pointer"
              style={{
                boxShadow: 'var(--shadow-card)',
              }}
              whileHover={{ 
                y: -4,
                boxShadow: 'var(--shadow-hover)',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <p className="text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  {project.impact.slice(0, 2).map((item, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
