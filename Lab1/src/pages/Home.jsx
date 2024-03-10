import Slider from "../component/common/Slider/Slider";
import PrintIcon from '@mui/icons-material/Print';
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Profile } from "../component/common/Profile/Profile";
import SettingButton from './../component/common/SettingButton/SettingButton';

const Home = () => {
    let componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const actions = [
        { icon: <PrintIcon />, name: "Print", onClick: handlePrint }
    ]
    return (
        <>
            <Slider />
            <SettingButton actions={actions} />
            <button onClick={handlePrint}>Print this out!</button>
            <Profile ref={componentRef} />
        </>
    )
}

export default Home