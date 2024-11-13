"use client"
import React, { useEffect, useRef } from 'react'
import { Card, CardContent, CardTitle } from "./ui/card"
import { BsQuote } from "react-icons/bs"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi
} from "@/components/ui/carousel"

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

const Testimonials = () => {
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
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
            <Carousel 
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
                setApi={setApi}
            >
                <CarouselContent>
                    {testimonialsData.map((testimonial) => (
                        <CarouselItem key={testimonial.id}>
                            <Card className="relative p-8 h-[500px] md:h-[300px]">
                                <div className="absolute right-0 top-0 bg-black p-2">
                                    <BsQuote className="text-white text-7xl"/>
                                </div>
                                
                                <CardTitle className="flex items-center gap-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                        <Image 
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="text-xl font-semibold">
                                        {testimonial.name}
                                    </p>
                                </CardTitle>
                                
                                <CardContent className="pt-6">
                                    <p className="text-gray-600">
                                        {testimonial.review}
                                    </p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                
                {/* Dots navigation */}
                <div className="flex justify-center gap-2 mt-4">
                    {testimonialsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                                current === index 
                                    ? 'bg-black' 
                                    : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </Carousel>
        </div>
    )
}

export default Testimonials