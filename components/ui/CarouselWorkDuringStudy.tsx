import Slider from "react-slick";
import ImageWorkDS from "./ImageWorkDS"
import { dataWorkDuring1, dataWorkDuring2, dataWorkDuring3, dataWorkDuringMobile } from "../../data/dataWorkDuring"

const CarouselWorkDuringStudy = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };
    return (
        <div className="w-full py-8">
            <div className="text-white hidden xl:block">
                <Slider {...settings}>
                    <div>
                        <div className={`grid gap-4 xl:gap-5 grid-cols-3 xl:px-20 m-auto w-full`}>
                            {dataWorkDuring1.map((items) => (
                                <ImageWorkDS image={items} key={items.id} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className={`grid gap-4 xl:gap-5 grid-cols-3 xl:px-20 m-auto w-full`}>
                            {dataWorkDuring2.map((items) => (
                                <ImageWorkDS image={items} key={items.id} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className={`grid gap-4 xl:gap-5 grid-cols-3 xl:px-20 m-auto w-full`}>
                            {dataWorkDuring3.map((items) => (
                                <ImageWorkDS image={items} key={items.id} />
                            ))}
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="block xl:hidden">
                <Slider {...settings}>
                    {dataWorkDuringMobile.map((items) => (
                        <div key={items.id}>
                            <div className={`grid grid-cols-1 m-auto w-full`}>
                                <ImageWorkDS image={items} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default CarouselWorkDuringStudy