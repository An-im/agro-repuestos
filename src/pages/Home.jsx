import Header from "../components/Header"
import Hero from "../components/Hero"
import BrandsSection from "../components/BrandsSection"

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-layout px-6">
        <Header />
        <Hero />
        <BrandsSection />
      </div>
    </div>
  )
}

export default Home
