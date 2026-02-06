import Hero from "../components/Hero"
import BrandsSection from "../components/BrandsSection"

const Home = () => {
  return (
    <div className="flex flex-col items-center">

      <Hero />

      <div className="w-full max-w-layout px-6">
        <BrandsSection />
      </div>

    </div>
  )
}

export default Home

