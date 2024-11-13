import { About } from "@/components/sections/About"
import { Banners } from "@/components/sections/Banners"
import { Galery } from "@/components/sections/Galery"
import { Hero } from "@/components/sections/Hero"
import { Sponsors } from "@/components/sections/Sponsors"

import { Surprise } from "@/components/sections/Surprise"
import { Team } from "@/components/sections/Team"
import { Upcoming } from "@/components/sections/Upcoming"

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Team />
      <Galery />
      <Banners />
      <Sponsors />
      <Surprise />
      <Upcoming />
    </>
  )
}

export default Homepage