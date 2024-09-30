'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image";

const testimonials = [
    {
        stars: "★★★★★",
        title: "There's only two types of people. Those like $RVF and those that just haven't tried it yet.",
        name: "@IncomeSharks",
        role: "Twitter Icon",
        image: "/twitter.svg"
    },
    {
        stars: "★★★★★",
        title: "Reliable and very easy to use.",
        description: "This is my go-to exchange when looking for new investments. GUI is very nice and everything works so smoothly, I love it 🙌",
        name: "Felix Shouten",
        role: "Customer",
        image: "/150"
    },
    {
        stars: "★★★★★",
        title: "Easy to use",
        description: "I'm not an avid trader but I really like RocketX Exchange's easy-to-use interface for swapping tokens independently of the network they are located on, and the fact that you do not have to get your tokens off your hardware wallet.",
        name: "Frodo Jansen",
        role: "Customer",
        image: "/150"
    },
    {
        stars: "★★★★★",
        title: "Amazing Experience!",
        description: "It was super easy to use, very fast, and with no issues. I still can't believe all the different tokens and networks that I can trade! WOW!!!",
        name: "XAVIER de Paz",
        role: "Customer",
        image: "/150"
    },
    {
        stars: "★★★★★",
        title: "Best Crypto Swap Exchange.",
        description: "I just did a BNB to ETH cross-chain swap from the native chains and was blown away with the ease and gas fee, RocketX saved me.",
        name: "Debbie B",
        role: "Customer",
        image: "/150"
    },
    {
        stars: "★★★★★",
        title: "Flawless!",
        description: "I have tested the platform with 350+ tokens and it’s flawless. Crosschain swap executed in less than 1 minute with very low fees. There is no project that allows this in a decentralized way.",
        name: "NotJacker",
        role: "Customer",
        image: "/150"
    }
];



export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="testimonial-wrapper">
            <div className="m-auto max-w-[1200px] my-64">
                <div className="relative my-10 z-10 text-center">
                    <h2 className="backup-headline testimonial-headline  leading-[130px] text-center text-white text-5xl md:text-[100px] tracking-tighter font-black ms500">Testimonials</h2>
                </div>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex w-full mx-auto flex-col items-center h-full text-center px-2.5 justify-center testimonial-slide backdrop-blur-[10px] transition-all duration-500">
                            <div className="h-full min-h-[400px] overflow-hidden bg-white/[0.06] rounded-[10px] gap-[10px] p-[10px_20px]  w-full mx-auto sm:w-[70%] lg:w-full flex flex-col items-center justify-center">
                                <div className="stars text-yellow-500">{testimonial.stars}</div>
                                <h3 className="text-xl font-semibold mb-2">{testimonial.title}</h3>
                                {testimonial.description && (
                                    <p className="text-lg italic mb-2">{testimonial.description}</p>
                                )}
                                <div className="name">
                                    <Image
                                        width={40}
                                        height={40}
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-10 h-10 rounded-full inline mr-2"
                                    />
                                    <span className="text-sm font-medium">{testimonial.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </div>
    )
}