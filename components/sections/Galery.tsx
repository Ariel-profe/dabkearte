
import { SparklesText } from '../ui/sparkles-text'

export const Galery = () => {
    return (
        <section className='container px-3 py-10 lg:py-20' id='galeria'>
            <SparklesText text='Momentos hermosos' subtext='Iremos actualizando las imágenes' className='text-center lg:text-start' />
                {/* First images */}
                <div className="flex flex-wrap">
                    <div className="flex w-full md:w-1/2 flex-wrap">
                        <div className="w-full lg:w-1/2 p-1 md:p-2">
                            <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center lg:hover:scale-95 transition lg:hover:scale-95 transition"
                            src="/images/galery/5.jpg" />
                        </div>
                        <div className="w-full lg:w-1/2 p-1 md:p-2">
                            <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center lg:hover:scale-95 transition"
                            src="/images/galery/2.jpg" />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center lg:hover:scale-95 transition"
                            src="/images/galery/4.jpg" />
                        </div>
                    </div>
                    <div className="flex w-full md:w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center lg:hover:scale-95 transition"
                            src="/images/galery/3.jpg" />
                        </div>
                        <div className="w-full lg:w-1/2 p-1 md:p-2">
                            <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center lg:hover:scale-95 transition"
                            src="/images/galery/1.jpg" />
                        </div>
                        <div className="w-full lg:w-1/2 p-1 md:p-2">
                            <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center lg:hover:scale-95 transition"
                            src="/images/galery/6.jpg" />
                        </div>
                    </div>
                </div>
                {/* Second images */}
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-full md:w-1/2 flex-wrap">
                        <div className="w-full lg:w-1/2 p-1 md:p-2">
                            <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center lg:hover:scale-95 transition"
                            src="/images/galery/7.jpg" />
                        </div>
                        <div className="w-full lg:w-1/2 p-1 md:p-2">
                            <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center lg:hover:scale-95 transition"
                            src="/images/galery/8.jpg" />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center lg:hover:scale-95 transition"
                            src="/images/galery/9.jpg" />
                        </div>
                    </div>
                    <div className="flex w-full md:w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center lg:hover:scale-95 transition"
                            src="/images/galery/10.jpg" />
                        </div>
                        <div className="w-full lg:w-1/2 p-1 md:p-2">
                            <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center lg:hover:scale-95 transition"
                            src="/images/galery/11.jpg" />
                        </div>
                        <div className="w-full lg:w-1/2 p-1 md:p-2">
                            <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center lg:hover:scale-95 transition"
                            src="/images/galery/12.jpg" />
                        </div>
                    </div>
                </div>
        </section>
    )
}