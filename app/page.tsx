import { About } from "@/components/sections/About"
import { Galery } from "@/components/sections/Galery"
import { Hero } from "@/components/sections/Hero"

import { Surprise } from "@/components/sections/Surprise"
import { Team } from "@/components/sections/Team"

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Team />
      <Galery />
      <Surprise />
    </>
  )
}

export default Homepage