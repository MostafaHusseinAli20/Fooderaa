function Footer() {
    return (
        <div className="text-center text-light mt-5 p-4" style={{
            backgroundColor: "#ab3550",
        }}>
            <div className="container my-3 py-3">
            <div className="footer">
                <div className="footer mx-auto contact">
                    <h6 className="fs-5 text-center mx-2">Register</h6>
                    <h6 className="fs-5 text-center mx-2">Forum</h6>
                    <h6 className="fs-5 text-center mx-2">Affiliate</h6>
                    <h6 className="fs-5 text-center mx-2 textFaq">FAQ</h6><br />
                   
                </div>
            </div>
            <div className="links mx-auto">
                <i className="fa-brands fa-facebook my-4 mx-2"style={{
                    fontSize: '24px'
                }}></i>
                <i className="fa-brands fa-twitter my-4 mx-2"style={{
                    fontSize: '24px'
                }}></i>
                <i className="fa-brands fa-youtube my-4 mx-2"style={{
                    fontSize: '24px'
                }}></i>
                <i className="fa-solid fa-globe my-4 mx-2"style={{
                    fontSize: '24px'
                }}></i>
                <i className="fa-brands fa-linkedin-in my-4 mx-2"style={{
                    fontSize: '24px'
                }}></i>
                <i className="fa-brands fa-instagram my-4 mx-2"style={{
                    fontSize: '24px'
                }}></i>
                </div>
                <h6 style={{
                    fontSize: '13px'
                }}>&copy; 2024. Made With &hearts;<br /> By Mostafa Hussein. All rights reserved.</h6>
            </div>
        </div>
    );
}

export default Footer;