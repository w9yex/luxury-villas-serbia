import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Philosophy from './components/Philosophy'
import InteractiveMap from './components/InteractiveMap'
import Catalog, { villasData } from './components/Catalog'
import Locations, { locationsData } from './components/Locations'
import Reviews from './components/Reviews'
import BespokeCalculator from './components/BespokeCalculator'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import VillaModal from './components/VillaModal'

function App() {
  const [selectedVilla, setSelectedVilla] = useState(null);
  const [selectedLoc, setSelectedLoc] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark");
  };

  const handleBookClick = () => {
    // Open the first villa modal as the default booking target
    setSelectedVilla(villasData[0]);
  };

  // Helper matching geographic map marker clicks to location slide drawer states
  const handleSelectRegion = (regionName) => {
    const matchedRegion = locationsData.find(
      (loc) => loc.name.toLowerCase().includes(regionName.toLowerCase()) || 
               regionName.toLowerCase().includes(loc.name.toLowerCase())
    );
    if (matchedRegion) {
      setSelectedLoc(matchedRegion);
    }
  };

  return (
    <div className="bg-[#FBF8F3] min-h-screen text-[#1A1A1A] overflow-x-hidden">
      {/* Sticky Navigation Header */}
      <Header
        onBookClick={handleBookClick}
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />
      
      {/* Page Content sections */}
      <main>
        {/* Hero section handles its own scroll parallax internally */}
        <Hero />
        
        {/* Stats segment */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Stats />
        </motion.div>

        {/* Philosophy manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Philosophy />
        </motion.div>

        {/* Villa Catalog grid with animated filters */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Catalog onSelectVilla={setSelectedVilla} />
        </motion.div>

        {/* Landscapes Locations sliders and drawers */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Locations selectedLoc={selectedLoc} setSelectedLoc={setSelectedLoc} />
        </motion.div>

        {/* Interactive map of Serbia - Relocated below catalog and locations */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <InteractiveMap onSelectRegion={handleSelectRegion} />
        </motion.div>

        {/* Client reviews slider */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Reviews />
        </motion.div>

        {/* Dynamic Bespoke Concierge Price Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <BespokeCalculator onBookPackage={setSelectedVilla} />
        </motion.div>

        {/* Call to action & subscription */}
        <FinalCTA />
      </main>

      {/* Main Page Footer */}
      <Footer />

      {/* Villa detail overlay modal (rendered dynamically when active) */}
      <VillaModal
        villa={selectedVilla}
        onClose={() => setSelectedVilla(null)}
      />
    </div>
  );
}

export default App;
