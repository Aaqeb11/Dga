import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <>
            <div className="flex flex-col justify-evenly p-4  gap-8 w-full "> 
                <div className="flex flex-col">
                    <div className="h-20 w-full"></div>
                    <div><span className="text-black text-5xl">Designing</span> <span className="text-5xl text-black">Dreams</span></div>
                </div>

                <div>
                    <p className="md:text-md">
                    At HARSH INTERIOR, we specialize in delivering comprehensive, turn-key contract solutions
that streamline the project lifecycle from concept to completion. With a focus on quality,
efficiency, and reliability, we provide our clients with end-to-end project management and
execution, ensuring every detail is meticulously handled to achieve seamless, timely, and costeffective
outcomes.
                    </p>
                </div>

                <div>
                    <button className="border-[1px] px-6 py-4 border-black">READ MORE</button>
                </div>
            </div>

            <div className="w-full h-full relative">
                <Image
                    src="/harsh.png"
                    alt="welcome image"
                    width={1200}    // Increased width
                    height={800}    // Increased height
                    quality={100}
                    className="h-[30vw]  md:w-[40vw] 2xl:w-[25vw] md:-top-[210px] 2xl:-top-[200px] absolute z-10 w-[80vw] left-4 md:left-0 "
                    priority        // Add priority loading for important images
                />
            </div>
        </>
    )
}

export default About