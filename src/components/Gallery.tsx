import type { FC } from 'preact/compat';
import { useGallery } from '../hooks/useGallery'
import "photoswipe/style.css";

type GalleryProps = {
    i18n: any
}

const Gallery:FC<GalleryProps> = ({ i18n }) => {

    const { photos } = useGallery({ edicion: '1' })
    
    return (

        <section className="max-w-6xl mx-auto py-20 px-20">
            <h2
                className="mx-auto mb-8 text-center text-3xl lg:text-6xl font-semibold tracking-wide"
            >
                {i18n.GALLERY.TITLE}
            </h2>

            <div className="grid-cols-3 grid gap-8 mx-auto py-20" id="galeria">
                {
                    //   Array.from({ length: 9 }).map((_ , i) => (
                    photos.map(({ height, width }, i) => (
                        <a
                            href={`/archivo-page/1/gallery/thumbnails/img-${i + 1}.webp`}
                            target="_blank"
                            data-cropped="true"
                            data-pswp-width={width}
                            data-pswp-height={height}
                            className="rounded-xl hover:scale-105 transition-all relativehover:shadow-md"
                        >
                            {
                                //<img
                                //     class="blur-lg absolute inset-0 opacity-70 -z-10 rounded-xl object-cover w-full h-full min-h-[450px] max-h-[450px]"
                                //     loading="lazy"
                                //     src={`/archivo-page/1/gallery/img-${i + 1}.webp`}
                                //     alt="Fotografía de los premios ESLAND"
                                //   />/*/
                            }
                            <div
                                style={{
                                    backgroundImage: `url('/archivo-page/1/gallery/thumbnails/img-${i + 1}.webp');`
                                }}
                                className="blur-xl absolute inset-0 opacity-70 -z-10 rounded-xl object-cover w-full h-full min-h-[450px] max-h-[450px]"
                            />
                            <img
                                className="rounded-xl w-full h-full min-h-[450px] max-h-[450px] object-cover"
                                loading="lazy"
                                src={`/archivo-page/1/gallery/img-${i + 1}.webp`}
                                alt="Fotografía de los premios ESLAND"
                            />
                        </a>
                    ))
                }
            </div>
        </section>
    )
}

export default Gallery