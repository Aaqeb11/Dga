import React from 'react'
import Image from 'next/image'

const ImageWithHover = ({ src, alt, className, title, description }:{src:any,alt:string,className:string,title:string,description:string}) => (
  <div className={`relative group ${className}`}>
    <Image
      src={src}
      alt={alt}
      width={1000}
            height={600}
            quality={100}
      className="w-full h-full object-cover transition-transform duration-500 group-hover"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300">
      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-2xl font-semibold mb-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {title}
        </h3>
        
        {/* Animated Line */}
        <div className="w-full h-[1px] relative mb-4">
          <div className="absolute left-[50%] right-[50%] h-full bg-[#f2d98c] group-hover:left-[20%] group-hover:right-[20%] transition-all duration-500 ease-in-out"></div>
        </div>
        
        <p className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const Glimpses = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full ">
              <div className="h-10 flex items-center relative z-10 md:-mt-24 -mt-4">
                <span className='text-black md:text-5xl text-3xl'>Glimp</span>
                <span className="md:text-5xl text-3xl text-[#f2d98c]">ses</span>
            </div>
            
            <div className="w-full mt-10 md:mt-14">
                <div className="w-full flex md:flex-row flex-col">
                    <ImageWithHover
                        src="/intro_pic_1.jpg"
                        alt="pic1"
                        className="md:w-[50%] w-[100%]  max-h-[40vh]  md:max-h-full"
                        title="Modern Living"
                        description="Contemporary design meets functionality"
                    />
                    <ImageWithHover
                        src="/intro_pic_2.jpg"
                        alt="pic1"
                        className="md:w-[25%] w-[100%]"
                        title="Interior Design"
                        description="Elegant spaces crafted with care"
                    />
                    <ImageWithHover
                        src="/intro_pic_3.jpg"
                        alt="pic1"
                        className="md:w-[25%] w-[100%]  max-h-[40vh] md:max-h-full"
                        title="Luxury Homes"
                        description="Where comfort meets style"
                    />
                </div>
                <div className="w-full flex md:flex-row flex-col">
                    <ImageWithHover
                        src="/intro_pic_1.jpg"
                        alt="pic1"
                        className="md:w-[25%] w-[100%]  max-h-[40vh] md:max-h-full"
                        title="Urban Living"
                        description="City life reimagined"
                    />
                    <ImageWithHover
                        src="/intro_pic_2.jpg"
                        alt="pic1"
                        className="md:w-[25%] w-[100%]  max-h-[40vh] md:max-h-full"
                        title="Outdoor Spaces"
                        description="Natural beauty enhanced"
                    />
                    <ImageWithHover
                        src="/intro_pic_3.jpg"
                        alt="pic1"
                        className="md:w-[50%] w-[100%]  max-h-[40vh] md:max-h-full"
                        title="Dream Homes"
                        description="Making visions reality"
                    />
                </div>
            </div>
        </div>
    )
}

export default Glimpses