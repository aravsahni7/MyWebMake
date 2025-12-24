import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import demoBarbershop from "@/assets/demo-barbershop.jpg";
import demoDental from "@/assets/demo-dental.jpg";
import demoContractor from "@/assets/demo-contractor.jpg";
import demoFitness from "@/assets/demo-fitness.jpg";
import demoRestaurant from "@/assets/demo-restaurant.jpg";
import demoRealestate from "@/assets/demo-realestate.jpg";

const demoProjects = [
  {
    id: "modern-barbershop",
    title: "Urban Cuts Barbershop",
    industry: "Barber",
    description: "Bold, modern design with online booking integration",
    designedFor: "Bookings & brand presence",
    image: demoBarbershop,
  },
  {
    id: "dental-clinic",
    title: "Bright Smile Dental",
    industry: "Dental",
    description: "Clean, trustworthy design for healthcare",
    designedFor: "Patient trust & appointments",
    image: demoDental,
  },
  {
    id: "contractor-site",
    title: "Summit Renovations",
    industry: "Contractor",
    description: "Professional contractor website with project gallery",
    designedFor: "Quote generation",
    image: demoContractor,
  },
  {
    id: "fitness-studio",
    title: "Core Fitness Studio",
    industry: "Fitness",
    description: "Energetic design with class schedules",
    designedFor: "Memberships & bookings",
    image: demoFitness,
  },
  {
    id: "restaurant-landing",
    title: "Maple Bistro",
    industry: "Restaurant",
    description: "Appetizing design with menu showcase",
    designedFor: "Reservations & visibility",
    image: demoRestaurant,
  },
  {
    id: "realtor-site",
    title: "Montreal Home Finder",
    industry: "Real Estate",
    description: "Sophisticated listing showcase",
    designedFor: "Lead generation",
    image: demoRealestate,
  },
];

const WorkHighlightsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <SectionHeader
          badge="Demo Concepts"
          title="Sample Work & Design Concepts"
          subtitle="These are demo concepts showcasing the quality and variety of websites we build. Your project could look this good."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {demoProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - Demo concept`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm text-xs">
                    Demo Concept
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <Badge variant="secondary" className="mb-2 text-xs">{project.industry}</Badge>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {project.description}
                </p>
                <p className="text-xs text-accent font-medium">
                  Designed for: {project.designedFor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg text-foreground font-medium mb-4">
            Your project could be featured here next.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/work">
              View All Demo Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkHighlightsSection;
