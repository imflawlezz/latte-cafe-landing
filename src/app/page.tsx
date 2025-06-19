import {Header} from "@/components/sections/Header";
import {Hero} from "@/components/sections/Hero";
import {AboutUs} from "@/components/sections/AboutUs";
import {Menu} from "@/components/sections/Menu";
import {Info} from "@/components/sections/Info";
import {Gallery} from "@/components/sections/Gallery";
import {Description} from "@/components/sections/Description";
import {Footer} from "@/components/sections/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <AboutUs />
            <Menu />
            <Info />
            <Gallery />
            <Description />
            <Footer />
        </>
    );
}
