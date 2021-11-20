import Banner from "../banner/banner";
import Model from "../model/model";

function content() {
  return (
    <div className="w-100 px-4 px-md-0  ">
      <div className="d-flex flex-column flex-lg-row">
        <div className="d-flex flex-column flex-grow-1 ">
          <Banner backgroundImageSrc={"./assets/b1.png"}>
            <div className="align-self-center mx-auto">
              <h1 className="text-uppercase fw-bold fs-3 ">
                get up to 50% off{" "}
              </h1>
            </div>
          </Banner>

          <Banner backgroundImageSrc={"./assets/b2.png"}>
            <div className="align-self-center mx-auto"></div>
          </Banner>
        </div>
        <div className="d-flex flex-grow-1">
          <Model profileImageSrc="./assets/image3.png" />
          <Model profileImageSrc="./assets/image4.png" />
        </div>
      </div>

      <div className="d-flex flex-column flex-lg-row">
        <div className="d-flex flex-grow-1">
          <Model profileImageSrc="./assets/image2.png" />
          <Model profileImageSrc="./assets/image1.png" />
        </div>
        <div className="d-flex flex-column flex-grow-1 ">
          <Banner backgroundImageSrc={"./assets/b3.png"}>
            <div className="d-flex flex-column justify-content-center  px-4">
              <h1
                style={{ color: "#001AA2" }}
                className="text-uppercase fw-bold fs-3 "
              >
                Trending & Hot
              </h1>
              <p className="text-capitalize fw-bold fs-6 ">
                A collection of trending Item
              </p>
            </div>
          </Banner>

          <Banner backgroundImageSrc={"./assets/b4.png"}>
            <div className="d-flex flex-column justify-content-center  px-4">
              <h1
                style={{ color: "#FD2E24" }}
                className="text-uppercase fw-bold fs-3 "
              >
                Trending & Hot
              </h1>
              <p className="text-capitalize fw-bold fs-6 ">
                A collection of trending Item
              </p>
            </div>
          </Banner>
        </div>
      </div>
    </div>
  );
}

export default content;
