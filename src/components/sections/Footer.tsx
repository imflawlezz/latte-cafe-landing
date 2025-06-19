import Link from "next/link";

const footerLinks = [
    "Home",
    "About",
    "Menu",
    "Info",
    "Contact",
    "Bookings",
    "Privacy Policy",
    "Style Guide",
    "Licenses",
    "Instructions",
    "Changelog",
    "Password",
    "404",
];

export const Footer = () => {
    return (
        <footer className="max-w-2xl flex flex-col sm:items-center mx-auto px-10 py-14 sm:text-center text-[var(--footer-primary)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-x-6 gap-y-2 text-xl sm:text-base text-black">
                {footerLinks.map((label) => (
                    <Link
                        key={label}
                        href="/"
                        className="hover:underline transition-colors"
                    >
                        {label}
                    </Link>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-[var(--footer-secondary)]">
                <span>© Latte Cafe 2025.</span>
                <span>Webflow Template by Nikolai Bain.</span>
                <span>
                    Site by{" "}
                    <a href="https://github.com/imflawlezz" className="underline hover:text-black" target="_blank">
                        imflawlezz
                    </a>.
                </span>
            </div>
        </footer>
    );
};
