import Image from 'next/image'

export const Hero = () => {
    return (
        <section className="relative w-full sm:px-8 md:px-14 md:pb-9 bg-[var(--primary-background)]">
            <div className="relative aspect-[2/3] md:aspect-video lg:aspect-auto lg:h-[640px] w-full">
                <Image
                    src="/hero.png"
                    alt="Cafe interior or hero image"
                    fill
                    priority
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 90vw, 80vw"
                    className="object-cover object-center"
                    quality={90}
                />
            </div>
        </section>
    )
}