import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import dashboard1 from "@/assets/dashboard-1.png";
import dashboard2 from "@/assets/dashboard-2.png";
import dashboard3 from "@/assets/dashboard-3.png";
import dashboard4 from "@/assets/dashboard-4.png";

const dashboardImages = [
  {
    src: dashboard1,
    title: "Service Fulfilment Dashboard",
    description: "Heatmap visualization for service delivery monitoring across cities. This dashboard provides real-time tracking of service completion rates, identifying bottlenecks and optimizing resource allocation for maximum efficiency.",
  },
  {
    src: dashboard2,
    title: "LTV Dashboard",
    description: "Customer lifetime value analytics with monthly trend comparisons. Deep dive into customer segmentation, revenue forecasting, and churn prediction to maximize long-term customer relationships and profitability.",
  },
  {
    src: dashboard3,
    title: "Analytics Report",
    description: "Multi-metric performance tracking with trend analysis. Comprehensive overview of key business indicators, enabling data-driven decision making through interactive visualizations and actionable insights.",
  },
  {
    src: dashboard4,
    title: "Geographic Analytics",
    description: "Regional performance insights with interactive visualizations. Geographic distribution analysis for market penetration, regional sales performance, and location-based strategic planning.",
  },
];

const Dashboards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {dashboardImages.map((dashboard, index) => (
                <CarouselItem key={index}>
                  <div className="grid md:grid-cols-2 gap-8 items-center p-4">
                    {/* Description Side */}
                    <div className="order-2 md:order-1 space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Dashboard {index + 1} of {dashboardImages.length}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {dashboard.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {dashboard.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Analytics", "Real-time", "Interactive"].map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full glass text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Dashboard Image Side */}
                    <div className="order-1 md:order-2 relative group">
                      <div className="relative overflow-hidden rounded-xl border border-primary/30 shadow-2xl aspect-[4/3]">
                        <img
                          src={dashboard.src}
                          alt={dashboard.title}
                          className="w-full h-full object-cover blur-sm transition-all duration-500 group-hover:blur-md"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-background/30 group-hover:bg-background/40 transition-all duration-300" />
                        
                        {/* Lock indicator */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="px-4 py-2 rounded-lg glass text-muted-foreground text-sm">
                            Preview
                          </div>
                        </div>
                      </div>

                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity -z-10" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-2 md:-left-12 bg-background/80 border-primary/30 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="right-2 md:-right-12 bg-background/80 border-primary/30 hover:bg-primary hover:text-primary-foreground" />
          </Carousel>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {dashboardImages.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboards;
