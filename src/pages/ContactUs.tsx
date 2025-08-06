import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
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

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Shop 1 & 2, The Park Food Court, Opp: SVNIT, Ichhanath, Umra, Surat - 395007",
      link: "https://maps.app.goo.gl/EwgC7Bm9d5HvA9ZP7"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98252 53920",
      link: "tel:+919825253920"
    },
    {
      icon: Mail,
      title: "Email",
      content: "greneesurat@gmail.com",
      link: "mailto:greneesurat@gmail.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Sunday: 8:00 AM - 11:00 PM"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/greneefastfood",
      color: "text-blue-600"
    },
    {
      icon: Instagram,
      name: "Instagram", 
      url: "https://www.instagram.com/grenee.surat/",
      color: "text-pink-600"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our menu, outlets, or franchise opportunities? 
            We'd love to hear from you! Get in touch with us today.
          </p>
        </motion.div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-background">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="h-full"
              >
                <Card className="card-warm h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg text-primary mb-3">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm leading-relaxed"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm leading-relaxed">{info.content}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="card-warm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="How can we help you?"
                        rows={5}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full btn-primary">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Social Links */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Map */}
              <Card className="card-warm">
                <CardContent className="p-0">
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Interactive map would be embedded here
                      </p>
                      <Button asChild className="mt-4" variant="outline">
                        <a 
                          href="https://maps.app.goo.gl/EwgC7Bm9d5HvA9ZP7"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on Google Maps
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="card-warm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-6">Follow Us</h3>
                  <div className="space-y-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <social.icon className={`h-6 w-6 ${social.color}`} />
                        <span className="font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="font-semibold text-primary mb-3">Quick Links</h4>
                    <div className="space-y-2 text-sm">
                      <a href="https://www.zomato.com/greenee-food-truck" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">
                        Order on Zomato
                      </a>
                      <a href="https://www.swiggy.com/restaurants/grenee-the-park-opp-svnit-athwa-surat-76479" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">
                        Order on Swiggy
                      </a>
                      <a href="https://wa.me/9825253920" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">
                        WhatsApp Us
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </motion.div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What are your delivery charges?",
                answer: "Delivery charges vary by location. Check Zomato or Swiggy for exact charges."
              },
              {
                question: "Do you cater for events?",
                answer: "Yes! Contact us for custom catering packages for your events and parties."
              },
              {
                question: "Are you hiring?",
                answer: "We're always looking for passionate team members. Call us to inquire about opportunities."
              },
              {
                question: "Can I suggest a new outlet location?",
                answer: "Absolutely! We value community input for expansion. Share your suggestions with us."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-lg p-6 border"
              >
                <h4 className="font-semibold text-primary mb-2">{faq.question}</h4>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactUs;