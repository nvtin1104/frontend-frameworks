import Slider from "../component/common/Slider/Slider";
import PrintIcon from '@mui/icons-material/Print';
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Profile } from "../component/common/Profile/Profile";
import SettingButton from './../component/common/SettingButton/SettingButton';

const Home = () => {
    let componentRef = useRef();
    const [profile, setProfile] = useState({});
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const actions = [
        { icon: <PrintIcon />, name: "Print", onClick: handlePrint }
    ];
    const handleFecth = () => {
        fetch('http://localhost:3000/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProfile(data))
            .catch(error => console.error('There was a problem with your fetch operation:', error));
    }

    useEffect(() => {
        handleFecth();
        console.log(profile)
    }, []);
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