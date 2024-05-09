// import React from 'react'

const Footer = () => {
    return (
        <footer className="pt-4 pb-4 text-center bg-light">
            <div className="container">
                <div className="my-3">
                    <div className="h4">Nguyễn Văn Tín</div>
                    <p>Web Developer</p>
                    <div className="social-nav">
                        <nav role="navigation">
                            <ul className="nav justify-content-center">
                            <li className="nav-item"><a className="nav-link" href="https://twitter.com/nvtin1104" title="Twitter"><i className="fab fa-twitter"></i><span className="menu-title sr-only">Twitter</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/nvtin1104" title="Facebook"><i className="fab fa-facebook"></i><span className="menu-title sr-only">Facebook</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/nvtin1104/" title="Instagram"><i className="fab fa-instagram"></i><span className="menu-title sr-only">Instagram</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/in/nvtin1104/" title="LinkedIn"><i className="fab fa-linkedin"></i><span className="menu-title sr-only">LinkedIn</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="text-small text-secondary">
                    <div className="mb-1">&copy; Super Folio. All rights reserved.</div>
                    <div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer