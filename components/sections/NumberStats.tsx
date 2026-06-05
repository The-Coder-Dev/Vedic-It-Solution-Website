
import StatsCard from "../StatsCard"

const NumberStats = () => {


    return (
        <section className='w-full h-auto  '>
            <div className="h-full w-full mx-auto max-w-345 md:py-10 flex justify-between flex-col gap-5">
                <div className="p-6 mb-30">
                    <div className="border-b pb-8 flex items-center justify-between">
                        <p className="text-black uppercase font-semibold"><span className="text-primary">[ {" "}</span>achievements<span className="text-primary"> {" "}]</span></p>
                        <p className="font-semibold">©2025</p>
                    </div>
                    <h1 className="text-black mt-10 font-semibold uppercase max-w-4xl text-7xl">Results That Speak for Themselves</h1>
                    <p className="max-w-xl font-xl  mt-3 text-muted-foreground">Delivering record-breaking results backed by powerful metrics and real impact—because great design drives real growth.</p>
                </div>

                {/* Grid Cols */}
                <div className=" grid md:grid-cols-3 gap-3">
                    <StatsCard />
                </div>
            </div>

        </section>
    )
}

export default NumberStats

// style={{ y: hero }}
