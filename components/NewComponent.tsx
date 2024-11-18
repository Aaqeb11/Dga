"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Carousel, CarouselApi, CarouselItem, CarouselContent } from './ui/carousel'

const testimonialsData = [
    {
        id: 1,
        name: "Aaqeb",
        image: "/intro_pic_1.jpg",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cupiditate ipsum laborum veniam! Sint, est facere? Odit aperiam quidem ratione voluptas sunt, inventore sed voluptatem delectus natus porro accusantium facilis."
    },
    {
        id: 2,
        name: "John Doe",
        image: "/intro_pic_2.jpg",
        review: "Quasi possimus temporibus vel perspiciatis error odio corrupti eligendi saepe praesentium autem et fugiat, totam exercitationem sequi a accusantium. Sequi, esse officia?"
    },
    {
        id: 3,
        name: "Jane Smith",
        image: "/intro_pic_3.jpg",
        review: "Voluptatibus, nisi! Repudiandae illo laboriosam pariatur quae provident doloremque. Accusamus voluptatem mollitia natus eveniet ipsum dolorem sint, velit fugiat?"
    }
]

const NewComponent = () => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    // Autoplay functionality
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (api) {
                api.scrollNext()
            }
        }, 4000)

        return () => clearInterval(intervalId)
    }, [api])

    return (
        <div className="w-[70%] flex items-start justify-between border-b-2 border-green-300 gap-4 m-4 p-4">
            <div className="flex flex-col gap-4 w-1/2">
                <h1 className="text-4xl">Title</h1>
                <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, veniam architecto. Perspiciatis placeat, dicta dolor ad in accusantium ratione nam delectus, accusamus eum quae minima reprehenderit! Placeat non unde accusantium libero pariatur nihil dolore enim dolores, aperiam commodi illum impedit.</p>
            </div>
            <div className="w-1/2 flex">
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {testimonialsData.map((item) => (
                            <CarouselItem key={item.id} className="min-h-[40vh] max-h-[50vh]">
                                <Image 
                                    src={item.image} 
                                    alt={item.name} 
                                    width={500} 
                                    height={500}
                                    quality={100}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-2 mt-4">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    current === index 
                                        ? 'bg-green-700' 
                                        : 'bg-green-300'
                                }`}
                            />
                        ))}
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default NewComponent
