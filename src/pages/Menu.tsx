import { motion } from 'framer-motion';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import heroChaiImage from '@/assets/hero-chai.jpg';
import heroTeaSpicesImage from '@/assets/hero-tea-spices.jpg';
import heroIdliFeastImage from '@/assets/hero-idli-feast.jpg';
import heroSnacksSpreadImage from '@/assets/hero-snacks-spread.jpg';
import heroFoodTruckImage from '@/assets/hero-food-truck.jpg';
import steamIdliImage from '@/assets/steam-idli.jpg';
import cheesePizzaImage from '@/assets/cheese-pizza.jpg';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('chai');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const menuCategories = {
    chai: {
      name: "Chai & Beverages",
      emoji: "🍵",
      images: [heroChaiImage, heroTeaSpicesImage, steamIdliImage, heroSnacksSpreadImage],
      items: [
        { name: "Greenees Special Chai", price: "₹15", popular: true },
        { name: "Green Leaf Pudina Chai", price: "₹18", special: true },
        { name: "Masala Chai", price: "₹15" },
        { name: "Ginger Chai", price: "₹16" },
        { name: "Cardamom Chai", price: "₹17" },
        { name: "Black Tea", price: "₹12" },
        { name: "Coffee", price: "₹20" },
        { name: "Cold Coffee", price: "₹35" }
      ]
    },
    idli: {
      name: "Steam Idli",
      emoji: "🍛",
      images: [steamIdliImage, heroIdliFeastImage, heroChaiImage, heroFoodTruckImage],
      items: [
        { name: "Steam Idli (2 pcs)", price: "₹25", popular: true },
        { name: "Butter Steam Idli", price: "₹30" },
        { name: "Cheese Butter Steam Idli", price: "₹40" },
        { name: "Masala Idli", price: "₹35" },
        { name: "Cheese Masala Idli", price: "₹45" },
        { name: "Chocolate Idli", price: "₹40", special: true },
        { name: "Cheese Chocolate Idli", price: "₹50" },
        { name: "Schezwan Steam Idli", price: "₹35" },
        { name: "Schezwan Cheese Steam Idli", price: "₹45" },
        { name: "Peri Peri Steam Idli", price: "₹35" },
        { name: "Peri Peri Cheese Steam Idli", price: "₹45" }
      ]
    },
    pizza: {
      name: "Pizza",
      emoji: "🍕",
      images: [cheesePizzaImage, heroSnacksSpreadImage, heroFoodTruckImage, heroChaiImage],
      items: [
        { name: "Veg. Cheese Pizza", price: "₹80", popular: true },
        { name: "Only Cheese Pizza", price: "₹70" },
        { name: "Cheese Burst Pizza", price: "₹100", special: true },
        { name: "Tandoori Paneer Pizza", price: "₹90" },
        { name: "Italian Pizza", price: "₹85" },
        { name: "Veg. Schezwan Pizza", price: "₹85" },
        { name: "Maggi Pizza", price: "₹75" }
      ]
    },
    ultaPizza: {
      name: "Ulta Pizza",
      emoji: "🍕",
      images: [cheesePizzaImage, heroTeaSpicesImage, heroIdliFeastImage, steamIdliImage],
      items: [
        { name: "Veg. Cheese Ulta Pizza", price: "₹90", popular: true },
        { name: "Only Cheese Ulta Pizza", price: "₹80" },
        { name: "Italiano Ulta Pizza", price: "₹95", special: true }
      ]
    },
    sandwich: {
      name: "Sandwich & Snacks",
      emoji: "🥪",
      images: [heroSnacksSpreadImage, heroFoodTruckImage, heroChaiImage, steamIdliImage],
      items: [
        { name: "Veg. Sandwich", price: "₹40" },
        { name: "Peri Peri Veg. Sandwich", price: "₹45" },
        { name: "Veg. Cheese Sandwich", price: "₹50", popular: true },
        { name: "Chatni Sandwich", price: "₹35" },
        { name: "Grilled Sandwich", price: "₹55" },
        { name: "Club Sandwich", price: "₹65" },
        { name: "Maggi", price: "₹30" },
        { name: "Cheese Maggi", price: "₹40" }
      ]
    },
    combos: {
      name: "Combo Offers",
      emoji: "🍽️",
      images: [heroFoodTruckImage, heroChaiImage, steamIdliImage, cheesePizzaImage],
      items: [
        { name: "Chai + 2 Idli", price: "₹35", popular: true },
        { name: "Chai + Sandwich", price: "₹50" },
        { name: "Chai + Maggi", price: "₹40" },
        { name: "Special Combo (Chai + Cheese Idli + Sandwich)", price: "₹75", special: true }
      ]
    }
  };

  const shuffleImages = (categoryKey: string) => {
    const category = menuCategories[categoryKey as keyof typeof menuCategories];
    if (category && category.images) {
      const shuffled = [...category.images].sort(() => Math.random() - 0.5);
      return shuffled;
    }
    return [];
  };

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
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Our Menu</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our delicious range of chai, idlis, pizzas, and snacks - 
            all made fresh with love and served at pocket-friendly prices
          </p>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="chai" className="w-full" onValueChange={(value) => setActiveCategory(value)}>
            <TabsList className="grid w-full h-full grid-cols-3 lg:grid-cols-6 mb-12">
              {Object.entries(menuCategories).map(([key, category]) => (
                <TabsTrigger key={key} value={key} className="text-xs lg:text-sm">
                  <span className="mr-1">{category.emoji}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(menuCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  <motion.div variants={itemVariants} className="text-center">
                    <h2 className="text-3xl font-bold text-primary mb-8">
                      {category.emoji} {category.name}
                    </h2>
                  </motion.div>

                  {/* Photo Gallery */}
                  <motion.div variants={itemVariants} className="mb-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {shuffleImages(key).map((image, index) => (
                        <motion.div
                          key={`${key}-${index}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="aspect-square overflow-hidden rounded-lg shadow-soft hover:shadow-warm transition-all duration-300"
                        >
                          <img 
                            src={image} 
                            alt={`${category.name} ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Menu Items */}
                  <motion.div 
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {category.items.map((item, index) => (
                      <motion.div
                        key={item.name}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="relative bg-card rounded-lg p-6 shadow-soft hover:shadow-warm transition-all duration-300"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-lg leading-tight">{item.name}</h3>
                          <span className="text-primary font-bold text-lg ml-2">{item.price}</span>
                        </div>
                        
                        <div className="flex gap-2">
                          {item.popular && (
                            <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                              🔥 Popular
                            </Badge>
                          )}
                          {item.special && (
                            <Badge className="bg-gradient-primary text-primary-foreground">
                              ⭐ Special
                            </Badge>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Special Notes */}
      <section className="py-16 bg-muted/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Special Notes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">🍵 Our Signature</h4>
                  <p>Green Leaf-Pudina tea was the first ever in Surat and remains our most loved item.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">🍛 Soft Idlis</h4>
                  <p>Our idlis are famous for their softness and ease of digestion - a crowd favorite!</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">💰 Pocket Friendly</h4>
                  <p>Quality food at affordable prices - perfect for students and families.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">🔥 Fresh Made</h4>
                  <p>All items are prepared fresh to order with the finest ingredients.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Menu;