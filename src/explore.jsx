import Rainboworder from './assets/orderRainbow.jpg'
import Vegetarianorder from './assets/orderVegetarian.jpg'
import Raspberryorder from './assets/orderRaspberry.jpg'
function Explore() {
  return (
    <>
      <div className="explopre mt-5 pt-5 mb-5" id="Explore">
        <h2
          className="text-center mb-3 fw-bold fs-1"
          style={{
            color: "#5d2e39",
          }}
        >
          Explore Our Foods
        </h2>
        <p className="text-center mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum in sit amet <br /> leo. Mauris feugiat
          erat tellus. Far far away, behind the word mountains, far from the
          countries Vokalia and <br /> Consonantia, there live the blind texts.
          Separated they live in Bookmarksgrove.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <img
                src={Rainboworder}
                alt=""
                style={{
                  width: "100%",
                  maxHeight: "100%",
                  maxWidth: "100%",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              />
              <h3
                className="mt-3"
                style={{
                  fontSize: "25px",
                }}
              >
                Rainbow Vegetable Sandwich
              </h3>
              <p>Time: 15 - 20 Minutes | Serves: 1</p>
              <h3
                className="mb-3 fw-bold"
                style={{
                  color: "#ab3550",
                }}
              >
                $10.5
              </h3>
              <hr></hr>
              <div className="price">
                <button
                  type="button"
                  className="mb-3 btn fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Order Now
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <img
                src={Vegetarianorder}
                alt=""
                style={{
                  width: "100%",
                  maxHeight: "100%",
                  maxWidth: "100%",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              />
              <h3
                className="mt-3"
                style={{
                  fontSize: "25px",
                }}
              >
                Vegetarian Burger with beans
              </h3>
              <p>Time: 30 - 45 Minutes | Serves: 1</p>
              <h3
                className="mt-3 fw-bold"
                style={{
                  color: "#ab3550",
                }}
              >
                $9.20
              </h3>
              <hr></hr>
              <div className="price">
                <button
                  type="button"
                  className="mb-3 btn fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Order Now
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <img
                src={Raspberryorder}
                alt=""
                style={{
                  width: "100%",
                  maxHeight: "100%",
                  maxWidth: "100%",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              />
              <h3
                className="mt-3"
                style={{
                  fontSize: "25px",
                }}
              >
                Raspberry Stuffed French Toast
              </h3>
              <p>Time: 10 - 15 Minutes | Serves: 1</p>
              <h3
                className="mb-3 fw-bold"
                style={{
                  color: "#ab3550",
                }}
              >
                $12.50
              </h3>
              <hr></hr>
              <div className="price">
                <button
                  type="button"
                  className="mb-3 btn fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-3" id="exampleModalLabel">
                Make Your Order Now!
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {/* Form In Model */}

              <form class="row g-3 my-3 mb-4 px-3 mx-">
                <div class="col-md-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    class="form-control fw-bold"
                    id="name"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    class="fw-bold form-control"
                    id="email"
                  />
                </div>
                <div class="col-12">
                  <input
                    type="text"
                    class="form-control fw-bold"
                    id="inputAddress"
                    placeholder="Address"
                  />
                </div>
                <div class="col-12">
                  <input
                    type="number"
                    class="form-control fw-bold"
                    id="number"
                    placeholder="Zip Code"
                  />
                </div>
                <div class="col-">
                  <input
                    type="text"
                    placeholder="Mobile No."
                    class="form-control  fw-bold"
                    id="Phone"
                  />
                </div>
                <br />
                <div class="col-">
                  <select id="Option" class="form-select fw-bold">
                    <option selected>Rainbow Vegetable Sandwich-$10.5</option>
                    <option>Vegetarian Burger with beans-$9.20</option>
                    <option>Raspberry Stuffed French Toast-$12.50</option>
                  </select>
                </div>

                <div class="col-12 btn-modal1 text-center">
                  <button type="submit" class="mt-2 btn btn-primary ">
                    Send Message <i class="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
