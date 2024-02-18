import { Image } from "antd";
import { dataWorkDuring } from "../data/dataWorkDuring";

interface Prop {
    image: dataWorkDuring
}
const ImageWorkDS = ({ image }: Prop) => {

    return (
        <div className="m-auto">
            <Image
                width={300}
                src={image.base64}
                about={image.name}
            />
        </div>
    );
};

export default ImageWorkDS;