// import React from 'react'

const Services = () => {
    return (
        <div className="section px-3 px-lg-4 pt-5" id="services">
            <div className="container-narrow">
                <div className="text-center mb-5">
                    <h2 className="marker marker-center">Dịch vụ</h2>
                </div>
                <div className="text-center">
                    <p className="mx-auto mb-3" style={{ maxWidth: "600px" }}>Tôi cung cấp dịch vụ phù hợp cho bất kỳ trang web hoặc ứng dụng nào. Tôi có thể nhanh chóng tối ưu hóa việc giao hàng đúng thời gian cho các lược đồ thời gian thực.</p>

                </div>
                <div className="row py-3">
                    <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="100"><img className="mb-2" src="/public/assets/images/services/web-design.svg" width="96" height="96" alt="web design" />
                        <div className="h5">Web Design</div>
                    </div>
                    <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="200"><img className="mb-2" src="/public/assets/images/services/graphic-design.svg" width="96" height="96" alt="graphic design" />
                        <div className="h5">Web Dev</div>
                    </div>
                    <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="300"><img className="mb-2" src="/public/assets/images/services/ui-ux.svg" width="96" height="96" alt="ui-ux" />
                        <div className="h5">UI/UX</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services