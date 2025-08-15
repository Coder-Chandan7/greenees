import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";


const gujaratGeoJson = "https://cdn.jsdelivr.net/gh/udit-001/india-maps-data@bcbcba3/geojson/states/gujarat.geojson";

const Outlets = () => {
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

  const outlets = [
  {
    name: "Treat Food Mall (TFM Main Branch)",
    city: "Surat (Main)",
    address: "Shop 1 & 2, The Park Food Court, Opp: SVNIT, Ichhanath, Umra, Surat - 395007",
    phone: "+91 12345 67890",
    mapUrl: "https://maps.app.goo.gl/EwgC7Bm9d5HvA9ZP7",
    timing: "8:00 AM - 11:00 PM",
    coordinates: [72.831062, 21.170240], // Surat official
    isMain: true
  },
  {
    name: "Ahmedabad Branch",
    city: "Ahmedabad",
    address: "Ahmedabad, Gujarat",
    phone: "+91 12345 67890",
    mapUrl: "https://goo.gl/maps/your-link-here",
    timing: "8:00 AM - 11:00 PM",
    coordinates: [72.587, 23.026] // Ahmedabad
  },
  {
    name: "Vadodara Branch",
    city: "Vadodara",
    address: "Vadodara, Gujarat",
    phone: "+91 12345 67890",
    mapUrl: "https://goo.gl/maps/your-link-here",
    timing: "8:00 AM - 11:00 PM",
    coordinates: [73.16, 22.00] // Vadodara
  },
  {
    name: "Rajkot Branch",
    city: "Rajkot",
    address: "Rajkot, Gujarat",
    phone: "+91 12345 67890",
    mapUrl: "https://goo.gl/maps/your-link-here",
    timing: "8:00 AM - 11:00 PM",
    coordinates: [70.56, 22.18] // Rajkot
  },
  {
    name: "Jamnagar Branch",
    city: "Jamnagar",
    address: "Jamnagar, Gujarat",
    phone: "+91 12345 67890",
    mapUrl: "https://goo.gl/maps/your-link-here",
    timing: "8:00 AM - 11:00 PM",
    coordinates: [70.0667, 22.4729] // Jamnagar
  }
];


  const cities = [
    { name: "Surat", count: 10 },
    { name: "Navsari", count: 1 },
    { name: "Coming Soon", count: "More cities" }
  ];

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
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Greenees Outlets</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find your nearest Greenees outlet and enjoy our delicious chai and snacks.
            We're expanding across Gujarat to serve you better!
          </p>
        </motion.div>
      </section>

      {/* Cities Overview */}
      <section className="py-16 bg-background">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Presence</h2>
            <p className="text-muted-foreground">Growing across Gujarat, one city at a time</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {cities.map((city, index) => (
              <motion.div
                key={city.name}
                variants={itemVariants}
                className="text-center"
              >
                <Card className="card-warm">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-4xl mb-4">🏪</div>
                    <h3 className="text-xl font-semibold mb-2">{city.name}</h3>
                    <p className="text-2xl font-bold text-primary">{city.count}</p>
                    <p className="text-sm text-muted-foreground">
                      {typeof city.count === 'number' ? 'Outlets' : ''}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gujarat tour map */}
      <section className='py-14 bg-muted/50'>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Gujarat Tour</h2>
            <p className="text-muted-foreground">Explore our journey across Gujarat</p>
          </motion.div>
          <div className='relative'>
            <motion.div
              variants={itemVariants}
              className='rounded-2xl shadow-xl overflow-hidden'
            >
              <div className='h-96 md:h-[500px] relative'>
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{ scale: 6000, center: [72.8, 21.5] }}
                  className="w-full h-full"
                >
                  <Geographies geography={gujaratGeoJson}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#E0F7FA"
                          stroke="#B2EBF2"
                          strokeWidth={0.5}
                          style={{
                            default: {
                              fill: "#f0fdf4",
                              stroke: "#22c55e",
                              strokeWidth: 0.5,
                              outline: "none",
                            },
                            hover: {
                              fill: "#dcfce7",
                              stroke: "#16a34a",
                              strokeWidth: 1,
                              outline: "none",
                            },
                            pressed: {
                              fill: "#bbf7d0",
                              stroke: "#15803d",
                              strokeWidth: 1,
                              outline: "none",
                            },
                          }}
                        />
                      ))
                    }
                  </Geographies>
                  {outlets.map((outlet, index) => (
                    <Marker
                      key={index}
                      coordinates={outlet.coordinates}
                    >
                      <circle r={4} fill="#FF5722" />
                      <text textAnchor="middle" y={-10} style={{ fontSize: '12px', fill: '#000' }}>
                        {outlet.name}
                      </text>
                    </Marker>
                  ))}
                </ComposableMap>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Outlets Grid */}
      <section className="py-20 bg-muted/50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">All Outlets</h2>
            <p className="text-muted-foreground">Visit us at any of our convenient locations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outlets.map((outlet, index) => (
              <motion.div
                key={outlet.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Card className={`card-warm h-full ${outlet.isMain ? 'ring-2 ring-primary' : ''}`}>
                  <CardContent className="p-6">
                    {outlet.isMain && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                          Main Branch
                        </span>
                      </div>
                    )}

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg text-primary mb-2">{outlet.name}</h3>
                      </div>

                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-start space-x-2">
                          <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                          <span>{outlet.address}</span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <a
                            href={`tel:${outlet.phone}`}
                            className="hover:text-primary transition-colors"
                          >
                            {outlet.phone}
                          </a>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{outlet.timing}</span>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          asChild
                          className="w-full btn-primary"
                          size="sm"
                        >
                          <a
                            href={outlet.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2"
                          >
                            <MapPin className="h-4 w-4" />
                            <span>Get Directions</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Can't Find a Nearby Outlet?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We're constantly expanding! Contact us to suggest a new location or inquire about franchise opportunities.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+919825253920">Call Us Now</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary">
              <a href="/contact-us">Contact Us</a>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Outlets;