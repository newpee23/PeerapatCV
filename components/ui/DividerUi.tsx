import { Divider } from "antd";

type Props = {
    text: string;
}

const DividerUi = ({ text }: Props) => {
    return (
        <Divider className="text-white">{text}</Divider>
    )
}

export default DividerUi