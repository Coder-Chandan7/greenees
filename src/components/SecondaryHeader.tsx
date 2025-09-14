import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SecondaryHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed top-[64px] left-0 right-0 z-40 backdrop-blur-md bg-black shadow-sm transition-all duration-300 hover:bg-white/40"
    >
      {/* Background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ 
          background: ["rgba(255,255,255,0.15)", "rgba(255,255,255,0.25)", "rgba(255,255,255,0.15)"] 
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
      </motion.div>
      
      <div className="container mx-auto px-4 py-3 relative">
        <div className="flex items-center justify-center space-x-6">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <motion.div 
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <h2 className="text-lg font-semibold text-accent-foreground hover:text-primary transition-colors duration-300">
              Be our franchise
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button 
              asChild
              variant="secondary"
              size="sm"
              className="group bg-primary hover:bg-primary-dark text-primary-foreground hover:text-primary-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/franchise/#franchise-form" className="flex items-center space-x-2">
                <span>Join Us</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SecondaryHeader;