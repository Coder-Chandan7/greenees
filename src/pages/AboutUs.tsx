import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Heart, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';

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
      image: "https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxtYW58ZW58MHx8MHx8fDA%3D",
      social: {
        twitter: "https://twitter.com/ramsrivasan",
        linkedin: "https://linkedin.com/in/ramsrivasan",
        facebook: "https://facebook.com/ramsrivasan"
      }
    },
    {
      name: "Rajesh Dubey", 
      role: "Co-Founder",
      description: "Handles Operations, Marketing & Business Development. His vision drives Greenees's expansion across Gujarat.",
      image: "https://images.unsplash.com/photo-1594672830234-ba4cfe1202dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxtYW58ZW58MHx8MHx8fDA%3D",
      social: {
        twitter: "https://twitter.com/rajeshdubey",
        linkedin: "https://linkedin.com/in/rajeshdubey",
        instagram: "https://instagram.com/rajeshdubey"
      }
    },
    {
      name: "Keshav Bhatt",
      role: "Co-Founder", 
      description: "Manages Technology, Innovation & Customer Experience. Focuses on modernizing the Greenees experience.",
      image: "https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww",
      social: {
        twitter: "https://twitter.com/keshavbhatt",
        linkedin: "https://linkedin.com/in/keshavbhatt",
        facebook: "https://facebook.com/keshavbhatt",
        instagram: "https://instagram.com/keshavbhatt"
      }
    }
  ];

  interface Founder {
    name: string;
    role: string;
    description: string;
    image: string;
    social: {
      [key: string]: string;
    };
  }

  interface FounderCardProps {
    founder: Founder;
    index: number;
  }

  const FounderCard = ({ founder, index }: FounderCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const getSocialIcon = (platform) => {
      switch (platform) {
        case 'twitter':
          return Twitter;
        case 'facebook':
          return Facebook;
        case 'linkedin':
          return Linkedin;
        case 'instagram':
          return Instagram;
        default:
          return null;
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        viewport={{ once: true }}
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
          {/* Image Container */}
          <div className="relative h-80 overflow-hidden">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Social Media Icons */}
            <motion.div
              className="absolute top-4 right-4 flex flex-col gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : 20
              }}
              transition={{ duration: 0.3, staggerChildren: 0.1 }}
            >
              {Object.entries(founder.social).map(([platform, url], socialIndex) => {
                const IconComponent = getSocialIcon(platform);
                return (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition-colors duration-300 shadow-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 0
                    }}
                    transition={{ 
                      duration: 0.3,
                      delay: socialIndex * 0.1
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{founder.name}</h3>
            <p className="text-primary font-semibold mb-3">{founder.role}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{founder.description}</p>
          </div>
        </div>
      </motion.div>
    );
  };

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
      <section className="pt-10 pb-20 bg-background" ref={timelineRef}>
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
                  image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=400&q=80",
                  icon: "🚚",
                  position: "top"
                },
                {
                  year: "2010", 
                  title: "First Outlet",
                  event: "Opened first outlet in Surat for students",
                  image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80",
                  icon: "🏪",
                  position: "bottom"
                },
                {
                  year: "2015",
                  title: "Innovation",
                  event: "Moved to Food Court - one of Surat's first",
                  image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=400&q=80",
                  icon: "🏢",
                  position: "top"
                },
                {
                  year: "2021",
                  title: "Expansion",
                  event: "Started Franchise expansion",
                  image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80",
                  icon: "📈",
                  position: "bottom"
                },
                {
                  year: "2024",
                  title: "Success",
                  event: "10+ successful franchise outlets",
                  image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80",
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
              <FounderCard key={founder.name} founder={founder} index={index} />
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