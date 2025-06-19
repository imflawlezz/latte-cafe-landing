'use client';
import Image from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export const Gallery = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.3 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

    return (
        <section
            ref={ref}
            className="mx-auto px-4 py-10 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 lg:py-36 grid gap-4 lg:gap-10 md:grid-cols-2"
        >
            <motion.div
                className="flex flex-col gap-4 lg:gap-10 h-full"
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
            >
                <motion.div
                    className="flex-1 group overflow-hidden"
                    transition={{ duration: 0.4 }}
                >
                    <Image
                        src="/image-1.png"
                        width={256}
                        height={256}
                        alt="Bottles on shelf"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </motion.div>
                <motion.div
                    className="flex-1 group overflow-hidden"
                    transition={{ duration: 0.4 }}
                >
                    <Image
                        src="/image-2.png"
                        alt="Delicious food"
                        width={256}
                        height={256}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className="group overflow-hidden"
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
                transition={{ duration: 0.4 }}
            >
                <Image
                    src="/image-3.png"
                    alt="Restaurant interior"
                    width={256}
                    height={256}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </motion.div>
        </section>
    );
};