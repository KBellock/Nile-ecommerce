import { Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
            <Carousel 
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={4000}
            >
                <div>
                    <img loading="lazy" src="/banner-1.jpeg" alt="amazon-ad-1"/>
                </div>

                <div>
                    <img loading="lazy" src="banner-2.jpg" alt="amazon-ad-2"/>
                </div>

                <div>
                    <img loading="lazy" src="banner-3.jpg" alt="amazon-ad-3" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
