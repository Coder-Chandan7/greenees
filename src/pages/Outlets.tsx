import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    L: any;
  }
}
const L = (window as any).L;

const Outlets = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
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
      name: "Greenees Fast Food (Main Branch)",
      city: "Surat (Main)",
      address: "Shop no 2 to 7 walkway canal near g.d goenka school vesu canal road, Surat, Gujarat 395007",
      phone: "+91 12345 67890",
      mapUrl: "https://maps.app.goo.gl/EwgC7Bm9d5HvA9ZP7",
      timing: "8:00 AM - 11:00 PM",
      coordinates: [21.170240, 72.831062],
      isMain: true,
      owner: "Hiren Patel",
      ownerImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Vesu (VIP High Street & Near Reliance Market), Surat",
      city: "Surat",
      address: "Vesu, Surat, Gujarat",
      phone: "+91 12345 67890",
      mapUrl: "https://goo.gl/maps/your-link-here",
      timing: "8:00 AM - 11:00 PM",
      coordinates: [21.1458, 72.7706],
      owner: "Ketan Patel",
      ownerImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "City Light, Surat",
      city: "Surat",
      address: "hop 10, Prachi Complex, Opposite Kotak Mahindra Bank, City Light, Surat",
      phone: "+91 12345 67890",
      mapUrl: "https://goo.gl/maps/your-link-here",
      timing: "8:00 AM - 11:00 PM",
      coordinates: [21.1702, 72.7852],
      owner: "Rameshbhai",
      ownerImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Piplod, Surat",
      city: "Surat",
      address: "Piplod, Surat, Gujarat",
      phone: "+91 12345 67890",
      mapUrl: "https://goo.gl/maps/your-link-here",
      timing: "8:00 AM - 11:00 PM",
      coordinates: [21.1561, 72.8036],
      owner: "Jigneshbhai",
      ownerImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Pasodara, Surat",
      city: "Surat",
      address: "Pasodara, Surat, Gujarat",
      phone: "+91 12345 67890",
      mapUrl: "https://goo.gl/maps/your-link-here",
      timing: "8:00 AM - 11:00 PM",
      coordinates: [21.2091, 72.9005],
      owner: "Maheshbhai",
      ownerImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Bhimpore, Surat",
      city: "Surat",
      address: "Bhimpore, Surat, Gujarat",
      phone: "+91 12345 67890",
      mapUrl: "https://goo.gl/maps/your-link-here",
      timing: "8:00 AM - 11:00 PM",
      coordinates: [20.9250, 72.8600],
      owner: "Sureshbhai",
      ownerImg: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Katargam, Surat",
      city: "Surat",
      address: "Katargam, Surat, Gujarat",
      phone: "+91 12345 67890",
      mapUrl: "https://goo.gl/maps/your-link-here",
      timing: "8:00 AM - 11:00 PM",
      coordinates: [21.2220, 72.8509],
      owner: "Dineshbhai",
      ownerImg: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Gujarat University area, Surat",
      city: "Surat",
      address: "Gujarat University area, Surat, Gujarat",
      phone: "+91 12345 67890",
      mapUrl: "https://goo.gl/maps/your-link-here",
      timing: "8:00 AM - 11:00 PM",
      coordinates: [21.1700, 72.7900],
      owner: "Pareshbhai",
      ownerImg: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Fatehgunj, Vadodara",
      city: "Vadodara",
      address: "Fatehgunj, Vadodara, Gujarat",
      phone: "+91 12345 67890",
      mapUrl: "https://goo.gl/maps/your-link-here",
      timing: "8:00 AM - 11:00 PM",
      coordinates: [22.3104, 73.1809],
      owner: "Amitbhai",
      ownerImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];


  const cities = [
    { name: "Surat", count: 10 },
    { name: "Navsari", count: 1 },
    { name: "Coming Soon", count: "More cities" }
  ];

  useEffect(() => {
    // Check if Leaflet is available
    if (typeof L !== 'undefined' && mapRef.current && !mapInstance.current) {
      // Initialize map
      const map = L.map(mapRef.current).setView([22.5, 72.5], 7);

      // Add tile layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map);

      // Custom green icon
      const greenIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -28]
      });

      // Collect coordinates for polyline
      const coordsArray = [];

      // Add markers
      outlets.forEach(outlet => {
        coordsArray.push(outlet.coordinates);
        L.marker(outlet.coordinates, { icon: greenIcon })
          .addTo(map)
          .bindTooltip(outlet.name, {
            permanent: false,
            direction: "top",
            className: "leaflet-custom-tooltip"
          })
          .bindPopup(`<div class="leaflet-custom-popup"><b>${outlet.name}</b></div>`);
      });

      // Draw line connecting all outlets
      L.polyline(coordsArray, {
        color: "green",
        weight: 3,
        opacity: 0.7,
        dashArray: "6, 8"
      }).addTo(map);

      // Fit bounds to show all markers
      map.fitBounds(coordsArray);

      mapInstance.current = map;
    }

    // Cleanup function
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

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
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-dancing">Greenees Outlets</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find your nearest Greenees outlet and enjoy our delicious chai and snacks.
            We're expanding across Gujarat to serve you better!
          </p>
        </motion.div>
      </section>

      {/* Cities Overview */}
      {/* <section className="py-16 bg-background">
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
      </section> */}

      {/* Gujarat tour map */}
      {/* <section className='py-14 bg-muted/50'>
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
    </section> */}
      <section className='py-14 pb-10 bg-muted/50'>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Gujarat Tour</h2>
            <p className="text-gray-600">Explore our journey across Gujarat</p>
          </motion.div>
          <div className='relative'>
            <motion.div
              variants={itemVariants}
              className='rounded-2xl shadow-xl overflow-hidden'
            >
              <div
                ref={mapRef}
                className='h-96 md:h-[500px] w-full rounded-2xl'
                style={{ minHeight: '400px' }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Outlets Grid */}
      <section className="py-20 bg-gradient-primary/10">
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
                    {/* {outlet.isMain && (
                      // <div className="absolute top-1 right-3">
                      //   <span className="bg-gradient-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                      //     Main Branch
                      //   </span>
                      // </div>
                    )} */}

                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-semibold text-lg text-primary">{outlet.name}</h3>
                        <img 
                          src="/src/assets/greenees-logo.jpeg" 
                          alt="Greenees Logo" 
                          className="w-12 h-12 object-contain rounded-full"
                        />
                      </div>

                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4 rounded-lg">
                          <img
                            src={outlet.ownerImg}
                            alt={outlet.owner}
                            className="h-12 w-12 rounded-full object-cover border-2 border-primary/30"
                          />
                          <div>
                            <p className="font-medium text-foreground">{outlet.owner}</p>
                            <p className="text-xs text-muted-foreground">Owner</p>
                          </div>
                        </div>

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