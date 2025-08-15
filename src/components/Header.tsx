import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import greneLogo from '@/assets/greenees-logo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Menu', path: '/menu' },
    { name: 'Outlets', path: '/outlets' },
    { name: 'Franchisee', path: '/franchise' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm shadow-warm"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img src={greneLogo} alt="Greenees" className="h-12 w-auto rounded-lg shadow-md group-hover:shadow-lg transition-shadow" />
              <div className="absolute inset-0 bg-gradient-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold tracking-wide">Greenees</h1>
              <p className="text-xs text-primary-foreground/80 -mt-1">Food Truck</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-white font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-white'
                    : 'text-primary-foreground/80 hover:text-primary-foreground'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary-foreground hover:bg-primary-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-4 pb-4"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`block py-2 px-4 rounded transition-colors ${
                    isActive(item.path)
                      ? 'bg-primary-dark text-primary-foreground'
                      : 'text-primary-foreground/80 hover:bg-primary-dark/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;