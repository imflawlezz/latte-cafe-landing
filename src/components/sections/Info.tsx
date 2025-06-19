export const Info = () => {
    return (
        <section className="text-white bg-[var(--secondary)] py-10 md:py-15 lg:py-30 px-4 sm:px-8 md:px-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="text-center p-6 bg-[var(--secondary-dark)]">
                    <h1 className="font-mono font-bold text-lg">Location</h1>
                    <p className="text-xl sm:text-2xl mt-4">
                        101 Cuba St, <br/>
                        Te Aro, Wellington
                    </p>
                </div>

                <div className="text-center p-6 bg-[var(--secondary-dark)]">
                    <h1 className="font-mono font-bold text-lg">Hours</h1>
                    <p className="text-xl sm:text-2xl mt-4">
                        Tuesday to Friday <br/>
                        7AM - 3PM
                    </p>
                    <p className="text-xl sm:text-2xl mt-4">
                        Saturday to Sunday <br/>
                        8AM - 3PM
                    </p>
                </div>

                <div className="text-center p-6 bg-[var(--secondary-dark)]">
                    <h1 className="font-mono font-bold text-lg">Mondays?</h1>
                    <p className="text-xl sm:text-2xl mt-4">
                        We are closed on Mondays to reflect and refuel
                    </p>
                </div>
            </div>
        </section>
    )
}