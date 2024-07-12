
const Contact = () => {
    return (
        <div className="section px-2 px-lg-4 pb-4 pt-5 mb-5" id="contact">
            <div className="container-narrow">
                <div className="text-center mb-5">
                    <h2 className="marker marker-center">Kết nối với tôi</h2>
                </div>
                <div className="row">
                    <div className="col-md-6" data-aos="zoom-in" data-aos-delay="100">
                        <div className="bg-light my-2 p-3 pt-2"><form
                            action="https://formspree.io/f/mnqezaee"
                            method="POST"
                        >
                            <div className="form-group my-2">
                                <label htmlFor="name" className="form-label fw-bolder">Tên</label>
                                <input className="form-control" type="text" id="name" name="name" required></input>
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="email" className="form-label fw-bolder">Email</label>
                                <input className="form-control" type="email" id="email" name="_replyto" required>
                                </input>
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="message" className="form-label fw-bolder">Tin nhắn</label>
                                <textarea
                                    className="form-control"
                                    style={{ resize: "none" }}
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                />
                            </div>
                            <button className="btn btn-primary mt-2" type="submit">Gửi</button>
                        </form>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-left" data-aos-delay="300">
                        <div className="mt-3 px-1">
                            <div className="h5">Hãy nói chuyện để tôi có thể giúp bạn!</div>
                            <p>Nếu bạn thích công việc của tôi và muốn sử dụng dịch vụ của tôi, hãy gửi cho tôi một tin nhắn bằng cách sử dụng mẫu liên hệ.</p>
                            <p>Hoặc liên hệ qua email, Skype hoặc số điện thoại của tôi.</p>
                            <p>Hẹn gặp bạn!</p>

                        </div>
                        <div className="mt-53 px-1">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="pb-1">Email:</div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="pb-1 fw-bolder">nvtin1104@gmail.com</div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="pb-1">Số điện thoại:</div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="pb-1 fw-bolder">+84-905085920</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact