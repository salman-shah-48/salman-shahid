import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    skills: ["AWS (EC2, Lambda, S3, MWAA, IAM, DMS, SNS)", "GCP (Compute Engine, Dataflow, Cloud Run, GCS, Composer, Pub/Sub, IAM)"],
  },
  {
    title: "Data Engineering",
    skills: ["Apache Airflow", "Apache Spark", "Apache NiFi", "Fivetran", "AWS DMS"],
  },
  {
    title: "Databases & Warehouses",
    skills: ["Amazon Redshift", "Google BigQuery", "PostgreSQL", "MS SQL", "MySQL"],
  },
  {
    title: "Analytics & BI",
    skills: ["Looker Studio", "Tableau", "Plotly", "Advanced SQL"],
  },
  {
    title: "Programming",
    skills: ["Python", "SQL", "Data Modeling", "ETL/ELT Pipelines"],
  },
  {
    title: "Domain Expertise",
    skills: ["Telecom Analytics", "E-commerce", "Gaming Analytics", "Marketing Attribution"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive toolkit for building scalable data solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl card-gradient border border-border hover:border-primary/30 transition-all duration-300"
              style={{
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <h3 className="text-lg font-semibold mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
