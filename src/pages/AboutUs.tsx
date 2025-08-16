import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

const AboutUs = () => {
   const timelineRef = useRef<HTMLElement>(null);

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const founders = [
    {
      name: "Ram Srivasan",
      role: "Co-Founder",
      description: "Experience of more than 15 years in the Food Industry. He manages Finance, Purchase & Negotiation at Greenees.",
      image: "👨‍💼"
    },
    {
      name: "Rajesh Dubey", 
      role: "Co-Founder",
      description: "Handles Operations, Marketing & Business Development. His vision drives Greenees's expansion across Gujarat.",
      image: "👨‍💼"
    },
    {
      name: "Keshav Bhatt",
      role: "Co-Founder", 
      description: "Manages Technology, Innovation & Customer Experience. Focuses on modernizing the Greenees experience.",
      image: "👨‍💼"
    }
  ];

  const milestones = [
    { year: "2009", event: "Started as Gujarat's first Food Truck" },
    { year: "2010", event: "Opened first outlet in Surat for students" },
    { year: "2015", event: "Moved to Food Court - one of Surat's first" },
    { year: "2021", event: "Started Franchise expansion" },
    { year: "2024", event: "10+ successful franchise outlets" }
  ];

  const values = [
    {
      icon: Award,
      title: "Quality",
      description: "We never compromise on the quality of our ingredients and preparation"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Every cup of chai is made with love and dedication to our craft"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building relationships and serving smiles across Gujarat"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Constantly evolving while staying true to our traditional roots"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From Gujarat's first food truck to a beloved franchise chain, 
            discover the journey that started with a simple dream and a passion for chai.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto md:px-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story, Our Passion</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  At Greenees, we believe in serving joy with every meal. From our humble beginnings as Gujarat's first food truck, 
                  we've focused on fresh ingredients, innovative recipes, and lightning-fast service.
                </p>
                <p className="text-lg leading-relaxed">
                  Launched in 2009, our journey started with a simple vision - to bring authentic flavors and quality food 
                  to the streets of Gujarat. What began as a single food truck has now grown into a beloved franchise chain 
                  across the state.
                </p>
              </div>
              <Button className="btn-primary mt-6" onClick={scrollToTimeline}>
                Learn More About Us
              </Button>
            </motion.div>

            {/* Image */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-warm">
                <img
                  src="https://media.istockphoto.com/id/1271340986/photo/modern-kitchen-cooks-prepare-meals-on-the-stove-in-the-kitchen-of-the-restaurant-or-hotel-the.jpg?s=1024x1024&w=is&k=20&c=4ZSZP4XH8r3m2kbadvoXiwiNSNtEo9eaUrmuzp4A74g="
                  alt="Our team preparing fresh food with passion"
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
            </div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/50" ref={timelineRef}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">Key milestones in our growth story</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                variants={itemVariants}
                className="flex items-center mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-gradient-primary rounded-full mr-8 relative">
                  {index !== milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-border"></div>
                  )}
                </div>
                <div className="flex-grow">
                  <p className="text-lg text-muted-foreground">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-background">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Meet the Founders</h2>
            <p className="text-xl text-muted-foreground">The visionaries behind Greenees's success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="card-warm text-center">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-6xl mb-4">{founder.image}</div>
                    <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                    <p className="text-primary font-medium mb-4">{founder.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{founder.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl opacity-90">What drives us every day</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="opacity-90 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;