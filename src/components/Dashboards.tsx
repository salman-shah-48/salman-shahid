import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Map, Gamepad2, ShoppingCart, TrendingUp } from "lucide-react";

const dashboards = [
  {
    title: "Geographic Performance Analysis",
    description: "Multi-platform paid media analytics combining Google Ads, YouTube, and Facebook data with geographic drilldowns from region to city level.",
    icon: Map,
    features: ["Map-based visualizations", "Regional budget optimization", "Cross-platform attribution"],
  },
  {
    title: "Gaming Analytics (GA4 + Firebase)",
    description: "Unified gaming performance view combining acquisition, engagement, monetization, and retention metrics for product and growth teams.",
    icon: Gamepad2,
    features: ["Install vs uninstall analysis", "Cohort retention tracking", "Revenue attribution"],
  },
  {
    title: "LTV & Churn Analysis",
    description: "Customer lifetime value and churn analytics integrating Shopify orders with Recharge subscriptions for e-commerce growth teams.",
    icon: TrendingUp,
    features: ["Subscription vs one-time LTV", "Monthly cohort analysis", "Product-level insights"],
  },
  {
    title: "Service Fulfilment Dashboard",
    description: "Real-time operational monitoring for service delivery with heatmap visualization across cities and service categories.",
    icon: BarChart3,
    features: ["Heatmap performance view", "City-level comparisons", "Weekly trend analysis"],
  },
];

const Dashboards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dashboards" className="py-24 md:py-32 relative bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dashboard <span className="gradient-text-accent">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Interactive analytics solutions built for decision-makers across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dashboards.map((dashboard, index) => (
            <motion.div
              key={dashboard.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-background border border-border hover:border-accent/40 transition-all duration-300"
              style={{
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 group-hover:glow-accent transition-all">
                  <dashboard.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                  {dashboard.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-4">
                {dashboard.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {dashboard.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary/60 text-muted-foreground"
                  >
                    {feature}
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

export default Dashboards;
