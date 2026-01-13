import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    client: "Modern Engineering Solutions",
    rating: 5,
    feedback: "Salman did an amazing job designing our Google Looker Studio dashboard. He clearly understands data and translated complex metrics from GA4 into a clean, well-structured, and easy-to-read dashboard. Communication was smooth, he was responsive to feedback, and delivered exactly what we needed. Highly professional, detail-oriented, and reliable. I would definitely recommend him and look forward to working with him again.",
    project: "Google Looker Studio Dashboard",
  },
  {
    client: "ServiceMarket",
    rating: 5,
    feedback: "Salman is a highly skilled Data Engineer who delivered a solid, production-ready analytics foundation. He designed and built a scalable data warehouse in Amazon Redshift, implemented live data synchronization using AWS DMS, and ensured data reliability across systems. He also created and optimized analytical dashboards for Finance, Marketing, and Sales teams, focusing on performance, correctness, and efficient query design. His understanding of data modeling, pipeline optimization, and business requirements made a significant impact on our reporting stack. Strong ownership, clean execution, and excellent technical depth. Highly recommended.",
    project: "Data Engineering BI",
  },
  {
    client: "Ericsson Team Lead",
    rating: 5,
    feedback: "I hired Salman for his first role as a Junior Data Engineer at Ericsson and had the opportunity to mentor him as he grew professionally. Throughout our time working together, he consistently upskilled, strengthening his technical abilities in Python, SQL, ETL pipelines, and cloud-based data workflows, while demonstrating an impressive capacity to learn quickly and take ownership of challenging tasks. He is proactive, reliable, and approaches problem-solving with maturity beyond his experience level, making him a valuable member of the team. I am confident that with continued exposure and opportunities, Salman will progress rapidly in his career and become an asset to any data engineering team.",
    project: "Data Engineering & ETL Pipelines",
  },
];

const Feedback = () => {
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
    <section id="feedback" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass mb-6">
            <Quote className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client & Colleague <span className="gradient-text">Feedback</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
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
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-card/50 p-8 md:p-10">
                      {/* Quote icon */}
                      <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
                      
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>

                      {/* Project tag */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-primary mb-6">
                        {testimonial.project}
                      </div>

                      {/* Feedback text */}
                      <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                        "{testimonial.feedback}"
                      </p>

                      {/* Client name */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-lg font-bold text-primary">
                            {testimonial.client.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {testimonial.client}
                          </h4>
                          <p className="text-sm text-muted-foreground">Client</p>
                        </div>
                      </div>

                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity -z-10" />
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
            {testimonials.map((_, index) => (
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

export default Feedback;
