import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    description: "Heatmap visualization for service delivery monitoring across cities",
  },
  {
    src: dashboard2,
    title: "LTV Dashboard",
    description: "Customer lifetime value analytics with monthly trend comparisons",
  },
  {
    src: dashboard3,
    title: "Analytics Report",
    description: "Multi-metric performance tracking with trend analysis",
  },
  {
    src: dashboard4,
    title: "Geographic Analytics",
    description: "Regional performance insights with interactive visualizations",
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

  // Auto-play slideshow
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
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
          className="max-w-5xl mx-auto"
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
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-xl border border-primary/30 shadow-2xl">
                      <img
                        src={dashboard.src}
                        alt={dashboard.title}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Title on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {dashboard.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {dashboard.description}
                        </p>
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity -z-10" />
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
