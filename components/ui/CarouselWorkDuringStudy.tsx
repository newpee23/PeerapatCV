import { Carousel } from "antd"
import ImageWorkDS from "./ImageWorkDS"
import { dataWorkDuring1, dataWorkDuring2, dataWorkDuring3 } from "../data/dataWorkDuring"

const CarouselWorkDuringStudy = () => {
    return (
        <Carousel className="text-white py-8">
            <div className="carousel-grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto  w-full">
                {dataWorkDuring1.map((items) => (
                    <ImageWorkDS key={items.id} image={items} />
                ))}
            </div>
            <div className="carousel-grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto  w-full">
                {dataWorkDuring2.map((items) => (
                    <ImageWorkDS key={items.id} image={items} />
                ))}
            </div>
            <div className="carousel-grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 m-auto  w-full">
                {dataWorkDuring3.map((items) => (
                    <ImageWorkDS key={items.id} image={items} />
                ))}
            </div>
        </Carousel>
    )
}

export default CarouselWorkDuringStudy