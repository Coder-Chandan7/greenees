import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import greneLogo from '@/assets/greenees-logo.jpeg';

const Footer = () => {
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

  return (
    <footer className="bg-primary text-primary-foreground">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img src={greneLogo} alt="Greenees" className="h-12 w-auto rounded-lg shadow-md group-hover:shadow-lg transition-shadow" />
                <div className="absolute inset-0 bg-gradient-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="text-white">
                <h1 className="text-3xl font-bold tracking-wide font-dancing">Greenees</h1>
                <p className="text-xs text-primary-foreground/80 -mt-1">Fast Food</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Serving the finest chai and delicious snacks since 2009. 
              Gujarat's favorite food truck turned into a beloved franchise.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/greeneesfastfood" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/greenees.surat/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '/about-us' },
                { name: 'Menu', path: '/menu' },
                { name: 'Outlets', path: '/outlets' },
                { name: 'Franchise', path: '/franchise' },
                { name: 'Contact Us', path: '/contact-us' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-foreground/80" />
                <span className="text-sm text-primary-foreground/80">
                  Shop 1 & 2, The Park Food Court,<br />
                  Opp: SVNIT, Ichhanath, Umra,<br />
                  Surat - 395007
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <a 
                  href="tel:+91 1234567890"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                <a 
                  href="mailto:greeneessurat@gmail.com"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  greeneessurat@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex justify-between">
                <span>Monday - Sunday</span>
                <span>8:00 AM - 11:00 PM</span>
              </div>
              <div className="mt-4">
                <p className="font-medium text-primary-foreground">Chalo Chai Ho Jaaye!</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-primary-foreground/20 mt-8 pt-6 text-center"
        >
          <p className="text-sm text-primary-foreground/80">
            © 2024 Greenees. All rights reserved. | Made with ❤️ for chai lovers
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;