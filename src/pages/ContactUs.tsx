import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SiZomato, SiSwiggy } from 'react-icons/si';
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
      content: "+91 12345 67890",
      link: "tel:+919825253920"
    },
    {
      icon: Mail,
      title: "Email",
      content: "greeneessurat@gmail.com",
      link: "mailto:greeneessurat@gmail.com"
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
      url: "https://www.facebook.com/share/1Jac3XVQZi/",
      color: "text-blue-600"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/greenees_vesu/",
      color: "text-pink-600"
    },
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      url: "https://wa.me/918200458206",
      color: "text-[#25D366]"
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 pb-10 bg-gradient-warm">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-dancing">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our menu, outlets, or franchise opportunities?
            We'd love to hear from you! Get in touch with us today.
          </p>
        </motion.div>
      </section>

      {/* Contact Information Cards */}
      <section className="pt-5 pb-10 bg-background">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          {/* Single Contact Info Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="card-warm bg-muted/30">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Address */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-2">Address</h3>
                      <a
                        href="https://maps.app.goo.gl/EwgC7Bm9d5HvA9ZP7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm leading-relaxed"
                      >
                        Shop no 2 to 7 walkway canal near g.d goenka school vesu canal road, Surat, Gujarat 395007
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-2">Call Us</h3>
                      <a
                        href="tel:+919825253920"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        +91 12345 67890
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-2">Email Us</h3>
                      <a
                        href="mailto:greeneessurat@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        greeneessurat@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Follow Us */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Instagram className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-2">Follow Us</h3>
                      <div className="flex space-x-3">
                        <a
                          href="https://www.facebook.com/share/1Jac3XVQZi/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 transition-colors"
                        >
                          <Facebook className="h-5 w-5" />
                        </a>
                        <a
                          href="https://www.instagram.com/greenees_vesu/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600 transition-colors"
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                        <a
                          href="https://wa.me/918200458206"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 transition-colors"
                        >
                          <FaWhatsapp className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3008030121396!2d72.7782941!3d21.140424199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0530debc20f4f%3A0xf811f46574507566!2sGreenees%20Fast%20Food!5e0!3m2!1sen!2sin!4v1755263889106!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='rounded-lg'
                    allowFullScreen
                    style={{ border: 0 }}
                    >
                  </iframe>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="card-warm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-6">Follow Us</h3>
                  <div className="flex items-center justify-start space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors group"
                        title={social.name}
                      >
                        <social.icon className={`h-6 w-6 ${social.color}`} />
                      </a>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="font-bold text-primary mb-3 text-xl">Order On</h3>
                    <div className="flex items-center justify-start space-x-4">
                      <a 
                        href="http://zoma.to/r/21393989" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors group"
                        title="Order on Zomato"
                      >
                        <SiZomato className="h-6 w-6 text-[#E23744]" />
                      </a>
                      <a 
                        href="https://www.swiggy.com/city/surat/greenees-fast-food-main-road-vesu-rest658759" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors group"
                        title="Order on Swiggy"
                      >
                        <SiSwiggy className="h-6 w-6 text-[#FC8019]" />
                      </a>
                      <a 
                        href="https://wa.me/9825253920" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors group"
                        title="WhatsApp Us"
                      >
                        <FaWhatsapp className="h-6 w-6 text-[#25D366]" />
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
      {/* <section className="py-20 bg-background">
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
      </section> */}
    </div>
  );
};

export default ContactUs;