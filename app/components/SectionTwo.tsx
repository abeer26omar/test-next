const SectionTwo = () => {
    return (
        <section className="section_two position-relative" id="about">
            <div className="container-fluid px-16">
                <div className="white_card px_3 wow animate__animated animate__fadeInUp">
                    <div className="row g-4 align-items-center justify-content-between column_reverse">
                        <div className="col-xxl-4 col-xl-5 col-12">
                            <img src="assets/images/about_us.webp" alt="about us" className="w-100 about_us_img"/>
                        </div>
                        <div className="col-xxl-7 col-xl-5 col-12 pt-xl-0 pt-4">
                            <h1 className="title_above lh-56 h-primary fs-45 fw-700"><span>About</span> Us</h1>
                            <p className="p-grey text_justify lh-24 fw-400 fs-16">Comet Innovations will launch its operation in Egypt in 2024, serving the Egyptian market as well as the MENA region. The company adopts a multi-disciplinary approach to problem-solving that is tailored for each country based on customers' needs and the market reality.</p>
                            <p className="p-grey text_justify lh-24 fw-400 fs-16">Comet Innovations integrates cutting-edge technology and strategic insights to empower Real Estate companies to become more digitally savvy, attuned to their customer's needs, and capable of monitoring and evaluating their financial sources of revenue in each community they develop.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default SectionTwo;