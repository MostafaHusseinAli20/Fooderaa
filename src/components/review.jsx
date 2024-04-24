import ImgReview from "../assets/Review/1.jpg"
import ImgReview2 from "../assets/Review/2.jpg"
function Review() {
    return (
        <>
            <section className="text-center review mt-5 mb-5 pb-5 " style={{
                backgroundColor: "#ab3550",
                position : "relative",
                zIndex : "2"
            }} id="Review">
                <div className="container">
                    <h1 className="text-light pt-5">Testimonials</h1>
                    <div className="comentes" style={{
                        marginTop: "5rem",
                    }}>
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="active bg-dark" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="active bg-dark" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner bg-white rounded-4 py-5">
                            <div className="carousel-item active">
                            <img src={ImgReview} className="rounded-circle" alt="..." style={{
                                width: '70px',
                                maxWidth : '70px',
                            }}/>
                            <p className="rounded-4 fs-5 mt-4">"Far far away, behind the word mountains, far from the countries <br /> Vokalila and Consonanita, there live the blind texts, Separated they <br /> Live."</p>
                            <h6 className="fw-bold" style={{
                                color : "#ab3550",
                            }}>Slimab Dave - Web Designer</h6>
                            </div>
                            <div className="carousel-item">
                            <img src={ImgReview2} className="rounded-circle" alt="..." style={{
                                width: '70px',
                                maxWidth : '70px',
                            }}/>
                            <p className="rounded-4 fs-5 mt-4">"Far far away, behind the word mountains, far from the countries <br /> Vokalila and Consonanita, there live the blind texts, Separated they <br /> Live far from the countries Vokalia."</p>
                            <h6 className="fw-bold" style={{
                                color : "#ab3550",
                            }}>Johnthan Doe - UX Designer</h6>
                            </div>
                            <div className="carousel-item">
                            <img src={ImgReview} className="rounded-circle" alt="..." style={{
                                width: '70px',
                                maxWidth : '70px',
                            }}/>
                            <p className="rounded-4 fs-5 mt-4">"Far far away, behind the word mountains, far from the countries <br /> Vokalila and Consonanita, there live the blind texts."</p>
                            <h6 className="fw-bold" style={{
                                color : "#ab3550",
                            }}>Maccy Doe - Front end</h6>
                            </div>
                        </div>
                      
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Review;