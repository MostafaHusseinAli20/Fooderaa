function Home() {
  const ImgUrl =
    "https://womensfitness.co.uk/wp-content/uploads/sites/3/2022/11/Shutterstock_1675475479.jpg?resize=900,581";
  return (
    <>
      <div className="home" style={{
        marginTop : "5rem",
      }} id="Home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1> Good food choices are good investments. </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum amet leo.
              </p>
              <button type="button" className="mb-4 btn order-btn">
                Order Now <i class="fa-solid fa-store"></i>
              </button>
              <button type="button" className="mb-4 mx-3 btn learn-btn">
                Learn More <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <div className="imgStyle col-md-6 col-sm-12 mt-3">
                <img src={ImgUrl} alt="" style={{
                    width: '100%',
                    maxWidth: '100%',
                    height: 'auto',
                }}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
