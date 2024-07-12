import { useState } from "react"

// import './style.css'
const Cv = () => {
    const user = JSON.parse(localStorage.getItem("user")) || {
        name: "John Doe",
        email: "john@gmail.com",
        address: "123 Main St",
        phone: "555-555-5555",
        age: "25",
    };
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [address, setAddress] = useState(user.address);
    const [phone, setPhone] = useState(user.phone);
    const handleSaveInfor = () => {
        // console.log(user);
        user.name = name;
        user.email = email;
        user.address = address;
        user.phone = phone;
        localStorage.setItem("user", JSON.stringify(user));
    }
    const handlePrintfInfor = () => {
        window.print();
    }
    return (
        <section id="about-section" className="pt-5 pb-5">
            <div className="container wrapabout">
                <div>
                    <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />

                    <input type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
                    <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />

                    <button onClick={handleSaveInfor}>Luu</button>
                    <button onClick={handlePrintfInfor}>In</button>

                </div>
                <div className="red"></div>
                <div className="row">
                    <div className="col-lg-6 align-items-center justify-content-left d-flex mb-5 mb-lg-0">
                        <div className="blockabout">
                            <div className="blockabout-inner text-center text-sm-start">
                                <div className="title-big pb-3 mb-3">
                                    <h3>ABOUT ME</h3>
                                </div>
                                <p className="description-p text-muted pe-0 pe-lg-0">
                                    {name}
                                </p>
                                <p className="description-p text-muted pe-0 pe-lg-0">
                                    Dia chi  {address}
                                </p>
                                <p className="description-p text-muted pe-0 pe-lg-0">
                                    Phone  {phone}
                                </p>
                                <p className="description-p text-muted pe-0 pe-lg-0">
                                    {email}
                                </p>
                                <p className="description-p text-muted pe-0 pe-lg-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas optio reiciendis deleniti voluptatem facere.</p>
                                <div className="sosmed-horizontal pt-3 pb-3">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                </div>
                                <a href="#" className="btn rey-btn mt-3">See More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <figure className="potoaboutwrap">
                            <img src="https://bootdey.com/image/400x700/FF7F50/000000" alt="potoabout" />
                        </figure>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Cv