import { Link } from "react-router-dom";
import service1 from "./Images/service1.avif";
import service2 from "./Images/service2.avif";
import service3 from "./Images/service3.avif";

const Service = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="text-center text-primary py-3">our services</h2>
          <div className="col-12 d-flex gap-3 justify-content-center align-items-center py-4">
            <div className="card col-3 text-center">
              <img
                src={service1}
                className="card-img-top img-fluid"
                alt="services"
              />
              <div className="card-body">
                <h5 className="card-title">Communications</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="#" className="btn btn-primary">
                  visit
                </Link>
              </div>
            </div>
            <div className="card col-3 text-center">
              <img
                src={service2}
                className="card-img-top img-fluid"
                alt="services"
              />
              <div className="card-body">
                <h5 className="card-title">Happy Customers</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="#" className="btn btn-primary">
                  visit
                </Link>
              </div>
            </div>
            <div className="card col-3 text-center">
              <img
                src={service3}
                className="card-img-top img-fluid"
                alt="services"
              />
              <div className="card-body">
                <h5 className="card-title">24/7 service</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="#" className="btn btn-primary">
                  visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
