import { About } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"
import { Features } from "@/components/sections/Features"
import { Galery } from "@/components/sections/Galery"
import { Hero } from "@/components/sections/Hero"
import { Team } from "@/components/sections/Team"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"

const Homepage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Features />
      <div className="h-[40rem] flex items-center justify-center">
      <TextHoverEffect text="TENEMOS UNA SORPRESA" />
    </div>
      <Team />
      {/* <Galery /> */}
      <Contact />
    </div>
  )
}

export default Homepage