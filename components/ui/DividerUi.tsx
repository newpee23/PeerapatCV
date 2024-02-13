import { Divider } from 'antd';

type Props = {
    text: string;
}

const DividerUi = ({ text }: Props) => {
    return (
        <Divider>{text}</Divider>
    )
}

export default DividerUi