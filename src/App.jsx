import React from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import WorkSection from './components/WorkSection'
import ServicesSection from './components/ServicesSection'
import PriceSection from './components/PriceSection'
import FeedbackSection from './components/FeedbackSection'
import SectionContact from './components/SectionContact'
import Footer from './components/Footer'

function App() {

  return (

    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <WorkSection></WorkSection>
      <ServicesSection></ServicesSection>
      <PriceSection></PriceSection>
      <FeedbackSection></FeedbackSection>
      <div className="lg:hidden">
      <SectionContact></SectionContact>
      </div>
      <Footer></Footer>
      
    </div>
  )
}

export default App
