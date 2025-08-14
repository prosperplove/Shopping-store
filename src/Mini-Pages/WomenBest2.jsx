import React, { useEffect } from "react";
import ShoppingCart from "../Cart/ShoppingCart";

const WomenBest2 = ({ title = "", products = [], productDetails = [] }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={{ marginTop: "15vh" }}>
      <div className="container my-4 py-4">
        <h1 className="text-center py-4 mb-4" style={{ fontSize: "1rem" }}>
          {title}
        </h1>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            {/* Large screens: vertical carousel */}
            <div
              className="d-none d-lg-block"
              style={{ height: "80vh", overflowY: "auto" }}
            >
              <div className="d-flex flex-column align-items-center">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="mb-4"
                    style={{ minWidth: "300px" }}
                  >
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.alt || `Product image ${product.id}`}
                      style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Small screens: horizontal carousel */}
            <div className="d-lg-none">
              <div
                id="smallScreenCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  {products.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#smallScreenCarousel"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      aria-current={index === 0 ? "true" : undefined}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="carousel-inner">
                  {products.map((product, index) => (
                    <div
                      key={product.id}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <div className="d-flex justify-content-center">
                        <div style={{ minWidth: "80%", maxWidth: "90%" }}>
                          <img
                            src={product.image}
                            className="card-img-top"
                            alt={product.alt || `Product image ${product.id}`}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#smallScreenCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#smallScreenCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <ShoppingCart products={productDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenBest2;
