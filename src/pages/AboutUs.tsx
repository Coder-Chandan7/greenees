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
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-dancing">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From Gujarat's first food truck to a beloved franchise chain, 
            discover the journey that started with a simple dream and a passion for chai.
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="pt-10 pb-20 bg-muted/50" ref={timelineRef}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">From a single food truck to Gujarat's beloved chai chain</p>
          </motion.div>

          {/* Roadmap Container */}
          <div className="relative max-w-7xl mx-auto">
            {/* Main Road Path */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-secondary rounded-full transform -translate-y-1/2 hidden lg:block"></div>
            
            {/* Mobile/Tablet Vertical Path */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary rounded-full transform -translate-x-1/2 lg:hidden"></div>

            {/* Journey Milestones */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative">
              {[
                {
                  year: "2009",
                  title: "The Beginning",
                  event: "Started as Gujarat's first Food Truck",
                  image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=400",
                  icon: "🚚",
                  position: "top"
                },
                {
                  year: "2010", 
                  title: "First Outlet",
                  event: "Opened first outlet in Surat for students",
                  image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=400",
                  icon: "🏪",
                  position: "bottom"
                },
                {
                  year: "2015",
                  title: "Innovation",
                  event: "Moved to Food Court - one of Surat's first",
                  image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=400",
                  icon: "🏢",
                  position: "top"
                },
                {
                  year: "2021",
                  title: "Expansion",
                  event: "Started Franchise expansion",
                  image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
                  icon: "📈",
                  position: "bottom"
                },
                {
                  year: "2024",
                  title: "Success",
                  event: "10+ successful franchise outlets",
                  image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400",
                  icon: "🎉",
                  position: "top"
                }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className={`relative flex flex-col items-center ${
                    milestone.position === 'bottom' ? 'lg:flex-col-reverse lg:pt-20' : 'lg:pb-20'
                  }`}
                >
                  {/* Milestone Card */}
                  <div className="bg-card rounded-2xl shadow-warm hover:shadow-lg transition-all duration-300 p-6 max-w-xs w-full border border-border/50 backdrop-blur-sm">
                    {/* Image */}
                    <div className="relative mb-4 overflow-hidden rounded-xl">
                      <img 
                        src={milestone.image} 
                        alt={milestone.title}
                        className="w-full h-32 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{milestone.event}</p>
                    </div>
                  </div>

                  {/* Connection Point */}
                  <div className={`relative ${milestone.position === 'bottom' ? 'lg:order-first' : ''}`}>
                    {/* Desktop Connection */}
                    <div className="hidden lg:block">
                      <div className={`w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-lg ${
                        milestone.position === 'bottom' ? 'mb-4' : 'mt-4'
                      }`}></div>
                      {milestone.position === 'bottom' && (
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent"></div>
                      )}
                      {milestone.position === 'top' && (
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-t from-primary to-transparent"></div>
                      )}
                    </div>

                    {/* Mobile Connection */}
                    <div className="lg:hidden flex items-center justify-center my-4">
                      <div className="w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-lg"></div>
                    </div>
                  </div>

                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 left-4 w-6 h-6 bg-primary/20 rounded-full animate-bounce-gentle hidden lg:block"></div>
            <div className="absolute -bottom-4 right-4 w-6 h-6 bg-accent/30 rounded-full animate-bounce-gentle delay-1000 hidden lg:block"></div>
            <div className="absolute top-1/4 right-8 w-4 h-4 bg-secondary/40 rounded-full animate-bounce-gentle delay-500 hidden lg:block"></div>
          </div>

          {/* Journey Stats */}
          {/* <motion.div variants={itemVariants} className="mt-20 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Journey</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">5</div>
                <div className="text-sm text-muted-foreground">Major Milestones</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">10+</div>
                <div className="text-sm text-muted-foreground">Outlets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1st</div>
                <div className="text-sm text-muted-foreground">Food Truck in Gujarat</div>
              </div>
            </div>
          </motion.div> */}
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