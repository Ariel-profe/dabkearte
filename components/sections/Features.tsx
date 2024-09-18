import { events } from '@/lib/utils';
import {SparklesText} from '@/components/ui/sparkles-text';

export const Features = () => {
  return (
    <div className='relative min-h-screen bg-primary/70 py-20 lg:py-40 mx-3 rounded-3xl px-3 lg:px-6 overflow-hidden'>
      <SparklesText text="¿Querés conocernos un poquito más?" />

      
      <div className="xl:container m-auto">
        <h2 className="mt-4 text-xl font-bold text-gray-500 md:text-2xl">
          Podes contratarnos para bailar en tu evento
          </h2>
        <div className="mt-16 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">

          {events.map(({desc, icon: Icon ,id, title}) => (
            <div key={id} className="group relative bg-white transition hover:z-[1] hover:shadow-lg hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8 lg:text-2xl font-medium text-gray-700 transition group-hover:text-primary">
                <Icon size={40} />
                <div className="space-y-2 ">
                  <h5>{title}</h5>
                  <p className="text-sm text-gray-600 group-hover:text-primary "> {desc} </p>
                </div>
              </div>
            </div>
          ))}
          
      </div>
      </div>
    </div>
  )
}

