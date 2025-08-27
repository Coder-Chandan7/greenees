import { motion } from 'framer-motion';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import heroChaiImage from '@/assets/hero-chai.jpg';
import heroTeaSpicesImage from '@/assets/hero-tea-spices.jpg';
import heroIdliFeastImage from '@/assets/hero-idli-feast.jpg';
import heroSnacksSpreadImage from '@/assets/hero-snacks-spread.jpg';
import heroFoodTruckImage from '@/assets/hero-food-truck.jpg';
import steamIdliImage from '@/assets/steam-idli.jpg';
import cheesePizzaImage from '@/assets/cheese-pizza.jpg';
import pizza4 from '@/assets/menu/pizza_4.jpg'
import pizza6 from '@/assets/menu/pizza_6.jpg'
import sandwich6 from '@/assets/menu/sandwitch_6.jpg'
import sandwich5 from '@/assets/menu/sandwitch_5.jpg'
import idli from '@/assets/menu/idli.jpg';
import idli2 from '@/assets/menu/idli_2.jpg';
import frenchFries from '@/assets/menu/french_fries.jpg';
import cake from '@/assets/menu/cake.jpg';
import burger2 from '@/assets/menu/burger_2.jpg';
import burger9 from '@/assets/menu/burger_9.jpg';
import coffee from '@/assets/menu/coffee.jpg';
import chocoCoffee from '@/assets/menu/choco_cofee.jpg';
import crispySanwich from '@/assets/menu/special.jpg';
import pizza7 from '@/assets/menu/pizza_7.jpg';
import pizza3 from '@/assets/menu/pizza_3.jpg';
import burger7 from '@/assets/menu/burger_7.jpg';
import coffee2 from '@/assets/menu/coffee_2.jpg';
import eggRoll from '@/assets/menu/egg_role.jpg';
import eggRoll3 from '@/assets/menu/egg_role_3.jpg';
import puff2 from '@/assets/menu/puff_2.jpg';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

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

  const categories = [
    { id: 'all', name: 'All', emoji: '🍽️' },
    { id: 'chai', name: 'Chai', emoji: '🍵' },
    { id: 'coffee', name: 'Coffee', emoji: '☕' },
    { id: 'idli', name: 'Idli', emoji: '🍛' },
    { id: 'pizza', name: 'Pizza', emoji: '🍕' },
    { id: 'burger', name: 'Burger', emoji: '🍔' },
    { id: 'sandwich', name: 'Sandwich', emoji: '🥪' },
    { id: 'snacks', name: 'Snacks', emoji: '🍿' },
  ];

  const menuItems = [
    {
      id: 1,
      category: 'chai',
      name: 'Greenees Special Chai',
      description: 'Our signature green leaf-pudina chai that started it all in Surat. A perfect blend of traditional spices and fresh mint leaves.',
      image: heroChaiImage,
      price: '₹15',
      popular: true
    },
    {
      id: 2,
      category: 'chai',
      name: 'Masala Chai',
      description: 'Traditional spiced tea blend with cardamom, ginger, and cinnamon. A warming cup of comfort that awakens your senses.',
      image: heroTeaSpicesImage,
      price: '₹15'
    },
    {
      id: 3,
      category: 'idli',
      name: 'Steam Idli',
      description: 'Soft and fluffy steamed idlis famous for their tenderness. Made fresh daily with the finest ingredients for easy digestion.',
      image: idli2,
      price: '₹25',
      popular: true
    },
    {
      id: 4,
      category: 'idli',
      name: 'Butter Steam Idli',
      description: 'Our classic steam idlis topped with rich, creamy butter. A delightful combination that melts in your mouth.',
      image: idli,
      price: '₹30'
    },
    {
      id: 5,
      category: 'pizza',
      name: 'Cheese Pizza',
      description: 'Fresh and cheesy pizza with premium mozzarella cheese. Crispy base with the perfect amount of tangy tomato sauce.',
      image: pizza4,
      price: '₹150',
      special: true
    },
    {
      id: 6,
      category: 'pizza',
      name: 'Veg Cheese Pizza',
      description: 'Loaded with fresh vegetables and melted cheese. A colorful and nutritious pizza that satisfies your cravings.',
      image: pizza6,
      price: '₹180'
    },
    {
      id: 7,
      category: 'sandwich',
      name: 'Veg Sandwich',
      description: 'Fresh vegetables layered between soft bread slices. A healthy and filling option packed with nutrients and flavor.',
      image: sandwich5,
      price: '₹40'
    },
    {
      id: 8,
      category: 'sandwich',
      name: 'Grilled Sandwich',
      description: 'Perfectly grilled sandwich with a crispy exterior and warm, melted filling. A satisfying meal that hits the spot.',
      image: sandwich6,
      price: '₹55',
      popular: true
    },
    {
      id: 9,
      category: 'snacks',
      name: 'Mixed Pakoras',
      description: 'Assorted crispy pakoras made with fresh vegetables and aromatic spices. Perfect for sharing with friends and family.',
      image: frenchFries,
      price: '₹60'
    },
    {
      id: 10,
      category: 'sandwich',
      name: 'Brown Sandwich Cake',
      description: 'Delicious and moist cake available in various flavors. A sweet treat to celebrate any occasion or simply indulge your sweet tooth.',
      image: cake,
      price: '₹20'
    },
    {
      id: 11,
      category: 'burger',
      name: 'Veg Burger',
      description: 'Juicy vegetable patty with fresh lettuce, tomato, and our special sauce. A delicious burger that satisfies your hunger.',
      image: burger9,
    },
    {
      id: 12,
      category: 'burger',
      name: 'Cheese Burger',
      description: 'Classic cheeseburger with a melted cheese slice, fresh veggies, and tangy sauce. A timeless favorite for all ages.',
      image: burger2,
      special: true
    },
    {
      id: 13,
      category: 'coffee',
      name: 'Espresso',
      description: 'Rich and bold espresso shot made from premium coffee beans. A perfect pick-me-up to start your day.',
      image: coffee,
      special: true
    },
    {
      id: 14,
      category: 'coffee',
      name: 'Chocolate Coffee',
      description: 'Chocolate Coffee with a perfect balance of espresso, steamed milk, and froth. A delightful treat for coffee lovers.',
      image: chocoCoffee,
      popular: true
    },
    {
      id: 15,
      category: 'pizza',
      name: 'Margherita Pizza',
      description: 'Classic Margherita pizza with fresh tomatoes, mozzarella cheese, and basil leaves. A simple yet flavorful choice.',
      image: pizza7,
    },
    {
      id: 16,
      category: 'sandwich',
      name: 'Crispy Veg Sandwich',
      description: 'Crispy veg sandwich with a variety of fresh vegetables and a tangy',
      image: crispySanwich,
    },
    {
      id: 17,
      category: 'pizza',
      name: 'Paneer Pizza',
      description: 'Delicious paneer pizza topped with fresh paneer cubes, vegetables, and a blend of spices. A flavorful twist on traditional pizza.',
      image: pizza3,
    },
    {
      id: 18,
      category: 'burger',
      name: 'Cheese Veg Burger',
      description: 'A delightful veg burger with a juicy vegetable patty, melted cheese, fresh lettuce, tomato, and our special sauce. A perfect combination of flavors in every bite.',
      image: burger7,
    },
    {
      id: 19,
      category: 'coffee',
      name: 'Cappuccino',
      description: 'A classic cappuccino made with rich espresso, steamed milk, and a frothy top. A perfect balance of bold coffee flavor and creamy texture.',
      image: coffee2,
    },
    {
      id: 20,
      category: 'snacks',
      name: 'Egg Roll',
      description: 'A delicious egg roll filled with a savory mixture of eggs, vegetables, and spices. A perfect snack to satisfy your hunger cravings.',
      image: eggRoll, 
    },
    {
      id: 21,
      category: 'snacks',
      name: 'Chicken Egg Roll',
      description: 'A flavorful chicken egg roll filled with tender chicken, eggs, vegetables, and spices. A perfect snack for meat lovers.',
      image: eggRoll3,
      popular: true
    },
    {
      id: 22,
      category: 'pizza',
      name: 'Veggie Delight Pizza',
      description: 'A delightful veggie pizza loaded with fresh vegetables, mozzarella cheese, and a tangy tomato sauce. A healthy and delicious choice for pizza lovers.',
      image: puff2,
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-0 bg-gradient-warm">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-dancing">Our Menu</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our delicious range of chai, idlis, pizzas, and snacks - 
            all made fresh with love and served at pocket-friendly prices
          </p>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-warm'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 '
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{category.emoji}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Menu Items Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-warm transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {item.popular && (
                      <Badge className="bg-secondary text-secondary-foreground">
                        🔥 Popular
                      </Badge>
                    )}
                    {item.special && (
                      <Badge className="bg-gradient-primary text-primary-foreground">
                        ⭐ Special
                      </Badge>
                    )}
                  </div>

                  {/* Price */}
                  {/* <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold text-lg">
                      {item.price}
                    </span>
                  </div> */}
                </div>

                {/* Content Overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <motion.h3
                    className="text-2xl font-bold mb-3  transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                  </motion.h3>
                  
                  <motion.p
                    className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold text-primary mb-2">No items found</h3>
              <p className="text-muted-foreground">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;