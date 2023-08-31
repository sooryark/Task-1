import { Link } from "react-router-dom";

const product = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    brand: "OPPO",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
  },
  {
    id: 5,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    brand: "Huawei",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/5/thumbnail.jpg",
  },
  {
    id: 6,
    title: "MacBook Pro",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    brand: "APPle",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/6/thumbnail.png",
  },
  {
    id: 7,
    title: "Samsung Galaxy Book",
    description:
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    brand: "Samsung",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
  },
  {
    id: 8,
    title: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    brand: "Microsoft Surface",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
  },
  {
    id: 9,
    title: "Infinix INBOOK",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    brand: "Infinix",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
  },
  {
    id: 10,
    title: "HP Pavilion 15-DK1056WM",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    brand: "HP Pavilion",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
  },
];

const Products = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="text-primary text-center py-3">Our Products</h2>
          <div className="col-12 py-5 d-flex flex-wrap justify-content-center gap-3">
            {product ? (
              product.map((data) => {
                return (
                  <div className="card col-12 col-lg-3 m-1 border-2 rounded-2">
                    <img
                      src={data.thumbnail}
                      className="card-img-top img-fluid"
                      alt="card"
                      style={{ height: 180 }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text  h-25">{data.description}</p>
                      <p className="card-text text-success py-2">
                        price : Rs-{data.price}
                      </p>
                      <div className="text-center">
                        <Link to="#" className="btn btn-success w-100">
                          Add cart
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center">Loading</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
