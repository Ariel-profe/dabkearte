import { About } from "@/components/sections/About"
import { Galery } from "@/components/sections/Galery"
import { Hero } from "@/components/sections/Hero"
import { Lottery } from "@/components/sections/Lottery"
import { Sponsors } from "@/components/sections/Sponsors"

import { Surprise } from "@/components/sections/Surprise"
import { Team } from "@/components/sections/Team"

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Team />
      <Galery />
      <Lottery />
      <Sponsors />
      <Surprise />
    </>
  )
}

export default Homepage