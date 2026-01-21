import HeroSection from '../../components/homeSections/HeroSection'
import FeaturedProducts from '../../components/homeSections/FeaturedProducts'
import CatgoriesSection from '../../components/homeSections/CatgoriesSection'
import ContactSection from '../../components/homeSections/ContactSection'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Index() {
  return (
    <div className='page'>
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CatgoriesSection />
        <ContactSection />  
      </main>
      <Footer />
    </div>
  )
}

export default Index