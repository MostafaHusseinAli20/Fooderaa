function FAQ() {
    const mainTitle = "Frequently Asked Questions";
    const title1 = "Is Foodera Bread really baked fresh each day?";
    const title2 = "Do you bake breads containing animal fats or products?";
    const title3 = "Can I order your products online?";
    const title4 = "When are you opening a shop near me?";
    return ( 
        <>
            <div className="faq mt-5 py-4 mb-5" id="FAQ">
                <h1 style={{
                    textAlign: "center",
                    marginBottom: "6rem",
                    color: "#5d2e39",
                    fontSize: "40px",
                }}>{mainTitle}</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <h4 className="fs-5"><span className="" style={{
                                color : '#F98169',
                                
                            }}>~</span>{title1}</h4>
                            <p style={{
                                width : "80%",
                                
                            }}>
                            Far far away, behind the word mountains, far from the countries Vokalia <br /> and Consonantia, there live the blind texts. Separated they live in <br /> Bookmarksgrove right at the coast of the Semantics, a large language.
                            </p>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <h4 className="fs-5"><span style={{
                                color: '#F98169'
                            }}>~</span>{title2}</h4>
                            <p style={{
                                width : "80%",
                            }}>
                            Far far away, behind the word mountains, far from the countries Vokalia <br /> and Consonantia, there live the blind texts. Separated they live in <br /> Bookmarksgrove right at the coast of the Semantics, a large language.
                            </p>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <h4 className="fs-5"><span style={{
                                color: '#F98169'
                            }}>~</span>{title3}</h4>
                            <p style={{
                                width : "80%",
                            }}>
                                Far far away, behind the word mountains, far from the countries Vokalia <br /> and Consonantia, there live the blind texts. Separated they live in <br /> Bookmarksgrove right at the coast of the Semantics, a large language.
                            </p>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <h4 className="fs-5"><span style={{
                                color: '#F98169'
                            }}>~</span>{title4}</h4>
                            <p style={{
                                width : "80%",
                            }}>
                                Far far away, behind the word mountains, far from the countries Vokalia <br /> and Consonantia, there live the blind texts. Separated they live in <br /> Bookmarksgrove right at the coast of the Semantics, a large language.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default FAQ;