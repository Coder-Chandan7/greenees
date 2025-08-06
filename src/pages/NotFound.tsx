import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-warm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <div className="text-8xl mb-8">🍵</div>
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md">
          Oops! This page seems to have gone for a chai break. Let's get you back to the good stuff!
        </p>
        <div className="space-x-4">
          <Button asChild className="btn-primary">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/menu">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Check Our Menu
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
