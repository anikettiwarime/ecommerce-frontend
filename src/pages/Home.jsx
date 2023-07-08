import HeroSection from "../components/HeroSection"
import Services from "../components/Services"
import Trusted from "../components/Trusted"

const Home = () => {
  const data = {
    name: "Aniket Shop",
  }
  return (
    <>
      <HeroSection props={data} />
      <Services />
      <Trusted />
    </>)
}

export default Home