import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Phone, DollarSign, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Franchise = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    hasLocation: '',
    business: '',
    remarks: ''
  });

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

  const benefits = [
    {
      icon: DollarSign,
      title: "Investment under 10 lacs*",
      description: "Low investment with high return potential"
    },
    {
      icon: TrendingUp,
      title: "Lower Capex, Higher Returns",
      description: "Optimized business model for maximum profitability"
    },
    {
      icon: Users,
      title: "Comparatively Less Area Required",
      description: "Only 300 sq.ft needed to start your outlet"
    },
    {
      icon: Award,
      title: "Complete Support",
      description: "Operational & marketing support from the brand"
    }
  ];

  const support = [
    "Kitchen Planning & Setup",
    "Sales & Marketing Training", 
    "Technology Integration",
    "Logistics & Supply Chain",
    "Vendor Management Support",
    "Manpower Training",
    "Brand Marketing Materials",
    "Ongoing Operational Support"
  ];

  const requirements = [
    "Minimum 300 sq.ft area",
    "Investment capacity of 8-10 lacs",
    "Passion for food business",
    "Commitment to brand standards",
    "Local market knowledge",
    "Basic business understanding"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll get back to you shortly.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      state: '',
      city: '',
      hasLocation: '',
      business: '',
      remarks: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Why Greenees?</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join Gujarat's fastest-growing tea chain and become part of our success story. 
            Low investment, high returns, and complete support from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+919825253920" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Us: +91 12345 67890
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary"
              onClick={() => document.getElementById('franchise-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get a Callback
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Franchise Benefits</h2>
            <p className="text-xl text-muted-foreground">Why choose Greenees for your business venture</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="card-warm h-full">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Support & Requirements */}
      <section className="py-20 bg-muted/50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Support */}
            <motion.div variants={itemVariants}>
              <Card className="card-warm h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Complete Support System</h3>
                  <div className="space-y-3">
                    {support.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Requirements */}
            <motion.div variants={itemVariants}>
              <Card className="card-warm h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Basic Requirements</h3>
                  <div className="space-y-3">
                    {requirements.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Franchise Form */}
      <section id="franchise-form" className="py-20 bg-background">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Franchise Enquiry</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Are you looking for a franchise opportunity? Fill out the form below and 
              become a part of the fastest-growing tea chain in Gujarat!
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <Card className="card-warm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email ID *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        placeholder="Gujarat"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="Enter your city"
                      />
                    </div>
                    <div>
                      <Label htmlFor="hasLocation">Do you have the location?</Label>
                      <Select onValueChange={(value) => handleInputChange('hasLocation', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes, I have a location</SelectItem>
                          <SelectItem value="no">No, I need help finding one</SelectItem>
                          <SelectItem value="looking">Currently looking</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="business">Are you into any other business or profession? If yes, please specify:</Label>
                    <Input
                      id="business"
                      value={formData.business}
                      onChange={(e) => handleInputChange('business', e.target.value)}
                      placeholder="Current business/profession (optional)"
                    />
                  </div>

                  <div>
                    <Label htmlFor="remarks">Your Remarks</Label>
                    <Textarea
                      id="remarks"
                      value={formData.remarks}
                      onChange={(e) => handleInputChange('remarks', e.target.value)}
                      placeholder="Any additional information or questions..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-primary">
                    Send Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl font-bold mb-12">Our Partner Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Patel",
                location: "Adajan Franchise",
                quote: "Best decision I made! Greenees's support system is incredible and the returns are fantastic."
              },
              {
                name: "Priya Shah",
                location: "Pal Franchise", 
                quote: "The brand recognition is amazing. Customers love our chai and keep coming back!"
              },
              {
                name: "Amit Mehta",
                location: "Navsari Franchise",
                quote: "Low investment, high profits, and complete guidance. What more can you ask for?"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6"
              >
                <p className="italic mb-4 opacity-90">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm opacity-75">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Franchise;