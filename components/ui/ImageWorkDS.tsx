import Image from "next/image";
import Link from "next/link";
import { dataWorkDuring } from "../data/dataWorkDuring";

interface Prop {
    image: dataWorkDuring
}

const ImageWorkDS = ({ image }: Prop) => {

    return (
        <div className="m-auto shadow-boxShadow px-6">
           <Link href={image.base64} target="_blank">
            <Image
                className="transition-transform transform hover:scale-110 z-10 duration-300 rounded "
                priority
                src={image.base64}
                height={300}
                width={300}
                alt="Peerapat Mueangmo"
            />
            </Link>
        </div>
    );
};

export default ImageWorkDS;