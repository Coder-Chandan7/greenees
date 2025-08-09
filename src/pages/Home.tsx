import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, MapPin, Users, Star, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import heroChaiImage from '@/assets/hero-chai.jpg';
import heroTeaSpicesImage from '@/assets/hero-tea-spices.jpg';
import heroIdliFeastImage from '@/assets/hero-idli-feast.jpg';
import heroSnacksSpreadImage from '@/assets/hero-snacks-spread.jpg';
import heroFoodTruckImage from '@/assets/hero-food-truck.jpg';
import steamIdliImage from '@/assets/steam-idli.jpg';
import cheesePizzaImage from '@/assets/cheese-pizza.jpg';
import AutoPlay from 'embla-carousel-autoplay';

const Home = () => {
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

  const specialties = [
    {
      icon: Coffee,
      title: "Special Chai",
      description: "Our signature Green Leaf-Pudina tea that started it all in Surat"
    },
    {
      icon: ChefHat,
      title: "Soft Idlis",
      description: "Famous for their softness and ease of digestion"
    },
    {
      icon: Star,
      title: "Pocket Friendly",
      description: "Quality food at affordable prices for students and families"
    }
  ];

  const heroImages = [
    {
      image: heroChaiImage,
      title: "Chalo Chai Ho Jaaye!",
      subtitle: "Gujarat's first food truck serving authentic chai since 2009"
    },
    {
      image: heroTeaSpicesImage,
      title: "Authentic Flavors",
      subtitle: "Traditional spices and perfect brewing techniques"
    },
    {
      image: heroIdliFeastImage,
      title: "Fresh & Delicious",
      subtitle: "Soft idlis made fresh every day"
    },
    {
      image: heroSnacksSpreadImage,
      title: "Variety of Snacks",
      subtitle: "Crispy pakoras, samosas and more delightful treats"
    },
    {
      image: heroFoodTruckImage,
      title: "Food Truck Pioneer",
      subtitle: "South Gujarat's first mobile food experience"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "10+", label: "Outlets" },
    { number: "50K+", label: "Happy Customers" },
    { number: "100%", label: "Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Carousel className="h-full" opts={{loop: true,}}>
          <CarouselContent className="h-full" >
            {heroImages.map((hero, index) => (
              <CarouselItem key={index} className="h-screen">
                <div 
                  className="relative h-full flex items-center justify-center bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${hero.image})`
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center text-white px-4"
                  >
                    <motion.h1 
                      className="text-5xl md:text-7xl font-bold mb-6"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {hero.title}
                    </motion.h1>
                    <motion.p 
                      className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {hero.subtitle}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="space-x-4"
                    >
                      <Button asChild size="lg" className="btn-primary">
                        <Link to="/menu">
                          Explore Full Menu
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-foreground">
                        <Link to="/outlets">Find Outlets</Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
          <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        </Carousel>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-warm">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">ABOUT US</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Launched in 2009 as the very first 'Food Truck' in South Gujarat. The idea was inspired by Europe 
                and the concept was new at that time. Mr. Snehal Modi & Mr. Sunil Dubey saw the opportunity which 
                was missed by many Gujarati businessmen.
              </p>
            </div>
          </motion.div>

          {/* Specialties Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="card-warm hover:scale-105 transition-transform duration-300 text-center p-6">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <specialty.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{specialty.title}</h3>
                    <p className="text-muted-foreground">{specialty.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 bg-background">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Menu</h2>
            <p className="text-xl text-muted-foreground">
              Discover our delicious range of chai, idlis, and snacks
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Greenees Special Chai",
                image: heroChaiImage,
                description: "Our signature green leaf-pudina chai"
              },
              {
                name: "Steam Idli",
                image: steamIdliImage, 
                description: "Soft and fluffy steamed idlis"
              },
              {
                name: "Cheese Pizza",
                image: cheesePizzaImage,
                description: "Fresh and cheesy pizza varieties"
              }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300"
              >
                <div className="aspect-square bg-muted overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/menu">
                View Complete Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Franchise?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join Gujarat's fastest-growing tea chain. Investment under 10 lacs with complete support.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/franchise">Learn More</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary">
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;