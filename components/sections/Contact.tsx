import {SparklesText} from "@/components/ui/sparkles-text"
import { contactMethods } from "@/lib/utils"

export const Contact = () => {
  return (
    <section id='contacto' className="relative bg-primary/70 lg:py-20 mx-3 rounded-3xl px-3 lg:px-6 overflow-hidden">
      <SparklesText text="Estemos en contacto" />

      <div className="flex flex-col justify-center items-center gap-5 lg:gap-10">
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <p className="text-slate-300 text-2xl lg:text-5xl font-semibold sm:text-4xl">
            Como podemos ayudarte?
          </p>
          <p>
            Podes encontrarnos en Instagram, Facebook o YouTube!
          </p>
        </div> 

        <div>
          <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
          {contactMethods.map((item, idx) => (
            <li key={idx}>
              <h4 className="text-slate-300 text-lg font-medium">{item.title}</h4>
              <div className="mt-3 flex items-center gap-x-3">
                <div className="flex-none text-gray-400">
                  {item.icon}
                </div>
                <p>{item.contact}</p>
              </div>
            </li>
          ))}
          </ul>
        </div>       
      </div>
      
     
    </section>
  )
}
