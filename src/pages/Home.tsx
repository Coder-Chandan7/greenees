import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, Star, ChefHat, Store, UserCheck, Clock, Calendar, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import heroChaiImage from '@/assets/hero-chai.jpg';
import heroTeaSpicesImage from '@/assets/hero-tea-spices.jpg';
import heroIdliFeastImage from '@/assets/hero-idli-feast.jpg';
import heroSnacksSpreadImage from '@/assets/hero-snacks-spread.jpg';
import heroFoodTruckImage from '@/assets/hero-food-truck.jpg';
import steamIdliImage from '@/assets/steam-idli.jpg';
import cheesePizzaImage from '@/assets/cheese-pizza.jpg';
import AutoPlay from 'embla-carousel-autoplay';
import { useEffect, useRef, useState } from 'react';

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselApi, setCarouselApi] = useState(null);

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

  const [counters, setCounters] = useState({
    years: 0,
    outlets: 0,
    customers: 0,
    satisfaction: 0
  });
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      const progress = currentStep / steps;
      
      setCounters({
        years: Math.min(Math.round(10 * progress), 15),
        outlets: Math.min(Math.round(10 * progress), 10),
        customers: Math.min(Math.round(50000 * progress), 50000),
        satisfaction: Math.min(Math.round(100 * progress), 100)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  const stats = [
    { number: counters.years + "+", label: "Years Experience" },
    { number: counters.outlets + "+", label: "Outlets" },
    { number: (counters.customers >= 30000 ? "30,000" : counters.customers.toLocaleString()) + "+", label: "Happy Customers" },
    { number: counters.satisfaction + "%", label: "Satisfaction" }
  ];

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    carouselApi.on('select', onSelect);
    onSelect(); // Set initial slide

    return () => {
      carouselApi.off('select', onSelect);
    };
  }, [carouselApi]);
  const scrollToSlide = (index) => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
  };

  // const stats = [
  //   { number: "15+", label: "Years Experience" },
  //   { number: "10+", label: "Outlets" },
  //   { number: "50K+", label: "Happy Customers" },
  //   { number: "100%", label: "Satisfaction" }
  // ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      
      <section className="relative h-screen">
        <Carousel 
          className="h-full" 
          opts={{ loop: true }}
          setApi={setCarouselApi}
        >
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
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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
        </Carousel>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex justify-center space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Our Categories Section */}
      <section className="py-20 bg-gradient-warm">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-sm text-primary font-medium mb-2 tracking-wider uppercase">Our Foods</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Categories</h2>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {[
              { name: "Pizza", description: "14 Restaurants Products", image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400" },
              { name: "Broast", description: "4 Restaurants Products", image: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=400" },
              { name: "Chicken", description: "6 Restaurants Products", image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400" },
              { name: "Burgers", description: "18 Restaurants Products", image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400" },
              { name: "Shakes", description: "23 Restaurants Products", image: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=400" },
              { name: "Sandwiches", description: "11 Restaurants Products", image: "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=400" },
              { name: "Pasta", description: "16 Restaurants Products", image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400" },
              { name: "Desserts", description: "24 Restaurants Products", image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400" }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group cursor-pointer"
              >
                <div className="relative mb-3 mx-auto w-28 h-28 md:w-32 md:h-32">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/menu">
                Explore Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-warm relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 md:px-20"
        >
          {/* Top Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story, Our Passion
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                At FastBite, we believe in serving joy with every meal. From our humble
                beginnings, we’ve focused on fresh ingredients, innovative recipes, and
                lightning-fast service. Discover the passion behind your favorite dishes!
              </p>
              <Button className="mt-6">
                <Link to="/about-us">Learn More About Us</Link>
              </Button>
            </motion.div>

            {/* Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://media.istockphoto.com/id/1271340986/photo/modern-kitchen-cooks-prepare-meals-on-the-stove-in-the-kitchen-of-the-restaurant-or-hotel-the.jpg?s=1024x1024&w=is&k=20&c=4ZSZP4XH8r3m2kbadvoXiwiNSNtEo9eaUrmuzp4A74g="
                  alt="Our team preparing fresh food with passion"
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="relative md:absolute left-0 md:left-1/2 transform md:-translate-x-1/2 md:translate-y-1/2 w-full max-w-4xl px-6 mt-12 md:mt-0 md:top-80">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-card shadow-lg rounded-2xl p-6">
              <div className="flex flex-col items-center">
                <Store className="w-10 h-10 text-primary mb-3"/>
                <h3 className="text-3xl font-bold text-primary">250+</h3>
                <p className="mt-2 text-muted-foreground">Total Outlets</p>
              </div>
            </div>
            <div className="bg-card shadow-lg rounded-2xl p-6">
              <div className="flex flex-col items-center">
                <UserCheck className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-3xl font-bold text-primary">500K+</h3>
                <p className="mt-2 text-muted-foreground">Happy Customers</p>
              </div>
            </div>
            <div className="bg-card shadow-lg rounded-2xl p-6">
              <div className="flex flex-col items-center">
                <CalendarDays className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-3xl font-bold text-primary">15+</h3>
                <p className="mt-2 text-muted-foreground">Years in Business</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Popular Menu Section */}
      <section className="py-20 md:pt-32 bg-background">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Popular Menu</h2>
            <p className="text-xl text-muted-foreground">
              Our most loved dishes that keep customers coming back
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  {
                    name: "Greenees Special Chai",
                    image: heroChaiImage,
                    description: "Our signature green leaf-pudina chai",
                    price: "₹25"
                  },
                  {
                    name: "Steam Idli",
                    image: steamIdliImage,
                    description: "Soft and fluffy steamed idlis",
                    price: "₹40"
                  },
                  {
                    name: "Cheese Pizza",
                    image: cheesePizzaImage,
                    description: "Fresh and cheesy pizza varieties",
                    price: "₹150"
                  },
                  {
                    name: "Masala Chai",
                    image: heroTeaSpicesImage,
                    description: "Traditional spiced tea blend",
                    price: "₹20"
                  },
                  {
                    name: "Vada Sambar",
                    image: heroIdliFeastImage,
                    description: "Crispy vadas with sambar",
                    price: "₹35"
                  },
                  {
                    name: "Mixed Pakoras",
                    image: heroSnacksSpreadImage,
                    description: "Assorted crispy pakoras",
                    price: "₹60"
                  }
                ].map((item, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4 py-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300"
                    >
                      <div className="aspect-[4/3] bg-muted overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold">{item.name}</h3>
                          {/* <span className="text-lg font-bold text-primary">{item.price}</span> */}
                        </div>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/menu">
                View Complete Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Customer Feedback Section */}
      <section className="py-20 bg-gradient-warm">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">What Our Happy Customers Say</h2>
            <p className="text-xl text-muted-foreground">
              Read what our valued customers have to say about their experience
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="relative">
            <Carousel 
              className="w-full" 
              opts={{ align: "center", loop: true }} 
              plugins={[AutoPlay({ delay: 5000 })]}
              setApi={setCarouselApi}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  {
                    quote: "The burgers here are simply the best I've ever had! The ingredients are so fresh, and the taste is out of this world.",
                    name: "John S.",
                    rating: 5
                  },
                  {
                    quote: "I love the commitment to local sourcing. It's great to enjoy such delicious food knowing it supports our community.",
                    name: "Sarah M.",
                    rating: 5
                  },
                  {
                    quote: "Burger Haven is my go-to spot! The atmosphere is always welcoming, and the staff are incredibly friendly. A true gem!",
                    name: "Emily K.",
                    rating: 5
                  },
                  {
                    quote: "I love the commitment to local sourcing. It's great to enjoy such delicious food knowing it supports our community.",
                    name: "Sarah M.",
                    rating: 5
                  },
                  {
                    quote: "Burger Haven is my go-to spot! The atmosphere is always welcoming, and the staff are incredibly friendly. A true gem!",
                    name: "Emily K.",
                    rating: 5
                  }
                ].map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 py-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-card rounded-lg p-6 shadow-soft hover:shadow-warm transition-all duration-300 h-full"
                    >
                      <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground font-bold">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold">{testimonial.name}</p>
                          <div className="flex items-center">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Dots Navigation for Customer Feedback */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex justify-center space-x-3 pb-4">
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-primary scale-125 shadow-lg'
                      : 'bg-primary/50 hover:bg-primary/75'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
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