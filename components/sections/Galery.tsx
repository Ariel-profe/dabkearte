
import { SparklesText } from '../ui/sparkles-text'

export const Galery = () => {
    return (
        <section className='xl:container mx-auto py-10 lg:py-20' id='galeria'>
            <SparklesText text='¡Encontra más en nuestras redes!' className='text-center lg:text-start' />
            <div className=" px-4 my-2 sm:px-6 lg:px-8 mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="space-y-2">
                        <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
                        <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
                        <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
                    </div>
                    <div className="space-y-2">
                        <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
                        <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
                    </div>
                    <div className="space-y-2">
                        <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
                        <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
                        <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
                    </div>
                    <div className="space-y-2">
                        <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
                        <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}