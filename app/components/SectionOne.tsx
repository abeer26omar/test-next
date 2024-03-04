const SectionOne = () => {
    return (
        <section className="section_one">
            <div className="container px-container">
                <div className="row g-4 align-items-center">
                    <div className="col-xl-5 col-12 position-relative">
                        <div className="wow animate__animated animate__fadeInLeft">
                            <h1 className="title h-primary lh-82 fs-77 fw-700"><span>COMET</span><br />INNOVATIONS</h1>
                            <p className="p-grey lh-24 fw-400 fs-18 pt-24">Tech-based one-stop shop Consultancy Firm that caters to <br /> Real Estate developers.</p>
                            <a className="contact_btn spacer" href="#contact">
                                <span>Get Started</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-7 col-12 position-relative">
                        <div className="white_card">
                            <div className="dots">
                                <span className="dot1 bg_red"></span>
                                <span className="dot2 bg_green"></span>
                                <span className="dot3 bg_yellow"></span>
                            </div>
                            <div className="search_container my-2">
                                <div className="row">
                                    
                                    <div className="col-6 d-flex justify-content-end">
                                        <img src="assets/images/profile.webp" alt="profile" className="rounded_img" width="40px" height="40px"/>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3">
                                <img src="assets/images/white_container.webp" alt="white_container_bg" width="100%"className="img_box mb_5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default SectionOne;