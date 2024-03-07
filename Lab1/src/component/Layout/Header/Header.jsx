import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="header-nav" role="navigation">
                <div className="container"><Link className="link-dark navbar-brand site-title mb-0" to="/">Nguyễn Văn Tín</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-2">
                            <li className="nav-item"><a className="nav-link" href="#about">Về tôi </a></li>
                            <li className="nav-item"><a className="nav-link" href="#skills">Kĩ năng</a></li>
                            <li className="nav-item"><Link className="nav-link" to="/#services">Dịch vụ</Link></li>
                            {/* <li className="nav-item"><a className="nav-link" href="#portfolio">Hồ sơ</a></li> */}
                            <li className="nav-item"><a className="nav-link" href="#experience">Kinh nghiệm</a></li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Liên hệ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/edit" className="nav-link">Chỉnh sửa</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;
