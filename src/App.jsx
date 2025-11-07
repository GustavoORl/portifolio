import React from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import WorkSection from './components/WorkSection'
import ServicesSection from './components/ServicesSection'

function App() {

  return (

    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <WorkSection></WorkSection>
      <ServicesSection></ServicesSection>
    </div>
  )
}

export default App
