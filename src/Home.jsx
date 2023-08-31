import { Link } from "react-router-dom";
import banner from "./Images/banner.jpg";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex flex-column justify-content-center align-items-center">
            <h1 className="font-weight-bold">Welcome to Our Store</h1>
            <p>2023 Collections</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <Link className="text-center" to="products">
              <button className="btn btn-primary">Shop Now</button>
            </Link>
          </div>
          <div className="col-6">
            <img src={banner} alt="banner" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
