import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import feedback1 from "@/assets/feedback-1.png";
import feedback2 from "@/assets/feedback-2.png";
import feedback3 from "@/assets/feedback-3.png";
import feedback4 from "@/assets/feedback-4.png";

const feedbackImages = [
  { src: feedback1, alt: "Client Feedback 1" },
  { src: feedback2, alt: "Client Feedback 2" },
  { src: feedback3, alt: "Client Feedback 3" },
  { src: feedback4, alt: "Client Feedback 4" },
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
              {feedbackImages.map((feedback, index) => (
                <CarouselItem key={index}>
                  <div className="relative group p-4">
                    <div className="relative overflow-hidden rounded-xl border border-primary/20 shadow-2xl bg-card/50">
                      <img
                        src={feedback.src}
                        alt={feedback.alt}
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity -z-10" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-2 md:-left-12 bg-background/80 border-primary/30 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="right-2 md:-right-12 bg-background/80 border-primary/30 hover:bg-primary hover:text-primary-foreground" />
          </Carousel>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {feedbackImages.map((_, index) => (
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
