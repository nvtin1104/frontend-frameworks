import { useContext } from "react";
import { GlobalContext } from "../../../context";

const About = () => {
    const { globalState, setGlobalState } = useContext(GlobalContext);
    console.log(globalState);
    return (
        <div className="section pt-4 px-3 px-lg-4" id="about">
            <div className="container-narrow">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="h4 my-2">Xin chào! Tôi là {globalState.name}.</h2>
                        <p>Tôi đam mê thiết kế UI/UX và Thiết kế Web. Tôi là một nhà phát triển front-end lành nghề và thành thạo một số ngôn ngữ backend như PHP (Laravel). Tôi là người học hỏi nhanh và là người làm việc theo nhóm để hoàn thành công việc. Tôi có thể dễ dàng tận dụng những thành quả dễ đạt được và nhanh chóng tối đa hóa khả năng phân phối kịp thời cho các lược đồ thời gian thực.</p>
                        <div className="row mt-3">
                            <div className="col-sm-4">
                                <div className="pb-1">Tuổi:</div>
                            </div>
                            <div className="col-sm-8">
                                <div className="pb-1 fw-bolder">{globalState.age}</div>
                            </div>
                            <div className="col-sm-4">
                                <div className="pb-1">Email:</div>
                            </div>
                            <div className="col-sm-8">
                                <div className="pb-1 fw-bolder">{globalState.email}</div>
                            </div>
                            <div className="col-sm-4">
                                <div className="pb-1">Số điện thoại:</div>
                            </div>
                            <div className="col-sm-8">
                                <div className="pb-1 fw-bolder">{globalState.phone}</div>
                            </div>
                            <div className="col-sm-4">
                                <div className="pb-1">Địa chỉ:</div>
                            </div>
                            <div className="col-sm-8">
                                <div className="pb-1 fw-bolder">{globalState.address}</div>
                            </div>
                            <div className="col-sm-4">
                                <div className="pb-1">Trạng thái:</div>
                            </div>
                            <div className="col-sm-8">
                                <div className="pb-1 fw-bolder">{globalState.status}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-1" data-aos="fade-left" data-aos-delay="100"><img className="avatar img-fluid mt-2" src="/assets/images/logo.jpg" width="400" height="400" alt="Walter Patterson" /></div>
                </div>
            </div>
        </div>
    )
}

export default About