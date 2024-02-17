import { Carousel } from "antd"
import ImageWorkDS from "./ImageWorkDS"
import { dataWorkDuring1, dataWorkDuring2, dataWorkDuring3 } from "../data/dataWorkDuring"

const CarouselWorkDuringStudy = () => {
    return (
        <Carousel className="text-white py-8">
            <div className="carousel-grid gap-5 grid-cols-1 sml:grid-cols-3 px-20">
                {dataWorkDuring1.map((items) => (
                    <ImageWorkDS key={items.id} image={items} />
                ))}
            </div>
            <div className="carousel-grid gap-5 grid-cols-1 sml:grid-cols-3 px-20">
                {dataWorkDuring2.map((items) => (
                    <ImageWorkDS key={items.id} image={items} />
                ))}
            </div>
            <div className="carousel-grid gap-5 grid-cols-1 sml:grid-cols-3 px-20">
                {dataWorkDuring3.map((items) => (
                    <ImageWorkDS key={items.id} image={items} />
                ))}
            </div>
        </Carousel>
    )
}

export default CarouselWorkDuringStudy