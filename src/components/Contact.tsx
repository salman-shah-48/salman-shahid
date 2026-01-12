import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Salman Shah
            </h3>
            <p className="text-lg text-primary font-medium">
              4+ Years of Experience in Data Engineering
            </p>
          </div>

          <p className="text-muted-foreground mb-10">
            Interested in working together or discussing data engineering challenges? 
            I'm always open to new opportunities and conversations.
          </p>

          <div className="flex items-center justify-center mb-12">
            <a
              href="https://www.upwork.com/freelancers/~01b7c271b3c10b02a9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all glow-primary text-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
              </svg>
              Hire me on Upwork
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-xl card-gradient border border-border"
          >
            <p className="text-lg font-medium mb-2">Open to opportunities</p>
            <p className="text-muted-foreground text-sm">
              Currently available for data engineering roles, consulting projects, and collaborative ventures.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
