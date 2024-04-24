import Stomach from './components/Stomach';
import Home from './components/home';
import NavScrollExample from './components/navbar';
import Explore from './explore';
import Review from './components/review';
import FAQ from './components/Faq';
import Footer from './components/footer';
// import imges
import prideImg from './assets/pride/pride img.png'
import newImg from './assets/new/new img.png'
function App() {
  return (
    <>
   <NavScrollExample></NavScrollExample>
   <Home></Home>
   <section className="about py-4 text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h2>1287+</h2>
          <h5>SAVINGS</h5>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h2>5786+</h2>
          <h5>PHOTOS</h5>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h2>1440+</h2>
          <h5>ROCKETS</h5>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h2>7110+</h2>
          <h5>GLOBES</h5>
        </div>
      </div>
    </div>
   </section>
   {/* Pride  Section */}
   <section className="pride mt-5 py-5 mb-4" id='Pride'>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img src={prideImg} alt='' style={{
            width: '100%',
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '1rem'
          }}/>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h2> We pride ourselves on making real food from the best ingredients. </h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. </p>
          <button type="button" className="prid-btn">Learn More</button>
        </div>
      </div>
    </div>
   </section>
   {/* New Section */}
   <section className="new mb-4" id='Pride'>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h1>We make everything by hand with the best possible ingredients.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

          <p className='fs-5'><i className='fw-bold fa-solid fa-check' style={{
            color: '#ab3550',
            fontSize : '30px',
          }}></i> Etiam sed dolor ac diam volutpat.</p>
          <p className='fs-5'><i class="fw-bold fa-solid fa-check" style={{
            color: '#ab3550',
            fontSize : '30px'
          }}></i> Erat volutpat aliquet imperdiet.</p>
          <p className='fs-5'><i class="fw-bold fa-solid fa-check" style={{
            color : '#ab3550',
            fontSize : '30px'
          }}></i> purus a odio finibus bibendum.</p>
          <button className='new-btn' type='button' style={{
             padding: '.5rem 1.2rem',
          }}>Learn More</button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img src={newImg} alt="" style={{
            width : "100%"
          }} />
        </div>
      </div>
    </div>
   </section>
   <Stomach></Stomach>
   <Explore></Explore>
   <Review></Review>
   <FAQ></FAQ>
   <Footer></Footer>
    </>
  );
}
export default App;