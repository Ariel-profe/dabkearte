import { About } from "@/components/sections/About"
import { Galery } from "@/components/sections/Galery"
import { Hero } from "@/components/sections/Hero"
import { Surprise } from "@/components/sections/Surprise"
import { Team2 } from "@/components/sections/Team2"

const Homepage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Team2 />
      <Galery />
      <Surprise />
    </div>
  )
}

export default Homepage