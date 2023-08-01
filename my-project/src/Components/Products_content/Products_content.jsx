import { useState, useEffect, useContext } from "react";

import { Validation } from "../Validation.jsx";
import { Link, useParams, Outlet } from "react-router-dom";
import { Spinner } from "../../Spinner.jsx";
// fetch("https://dashboard-admin-server.iran.liara.run/Products", {
//   method: "POST",
//   body: JSON.stringify({
//     id: 4,
//     title: "Dell",
//     img: "dell.jpg",
//     price: 230,
//     sales: 780000,
//     Active: "No",
//     InStock: "Yes",
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// fetch("https://dashboard-admin-server.iran.liara.run/Products/6", {
//   method: "DELETE",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
function Products_content() {
  const [Products, setProducts] = useState([]);
  const ProductId = useParams();
  useEffect(() => {
    let ignore;

    fetch("https://dashboard-admin-server.iran.liara.run/Products")
      .then((products) => {
        return products.json();
      })
      .then((_products) => {
        if (!ignore) {
          setProducts(_products);
        }
      });
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      {ProductId.ProductId === undefined ? (
        Products.length !== 0 ? (
          <div className=" w-full grid grid-cols-autofit gap-4">
            {Products.map((Product) => {
              return (
                <section
                  key={Product.id}
                  className=" flex flex-col shadow max-w-[500px]"
                >
                  <div
                    style={{
                      backgroundImage: `url(/images/${Product.img})`,
                    }}
                    className={`
              bg-no-repeat w-full aspect-video bg-center bg-cover`}
                  ></div>
                  {console.log(Product.img)}
                  <div className=" py-3 flex justify-center">
                    <div className=" flex flex-col items-center w-full gap-3">
                      <div className=" flex items-center w-full justify-evenly">
                        <h1 className=" font-semibold text-xl">
                          {Product.title}
                        </h1>
                        <p className=" text-lg">{Product.price}$</p>
                      </div>
                      <Link to={`${Product.id}`}>
                        <div className="flex justify-center text-base  ">
                          <button
                            className=" bg-blue-600 py-[2px] px-4 transition-[background-color] text-white rounded-[10px] hover:bg-gray-600 hover:text-white"
                            type="button"
                          >
                            show details
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <Spinner />
        )
      ) : (
        <Outlet context={[Products, setProducts]} />
      )}
    </>
  );
}
export { Products_content };
/*Products.length !== 0 ? (
        <div className=" w-full grid grid-cols-autofit gap-4">
          {Products.map((Product) => {
            return (
              <section key={Product.id} className=" flex flex-col shadow">
                <div
                  style={{
                    backgroundImage: `url(./public/images/${Product.img})`,
                  }}
                  className={`
              bg-no-repeat w-full h-[200px] bg-center bg-cover`}
                ></div>
                {console.log(Product.img)}
                <div className=" py-3 flex justify-center">
                  <div className=" flex flex-col items-center w-full gap-3">
                    <div className=" flex items-center w-full justify-evenly">
                      <h1 className=" font-semibold text-xl">
                        {Product.title}
                      </h1>
                      <p className=" text-lg">{Product.price}$</p>
                    </div>
                    <Link to={`${Product.id}`}>
                      <div className="flex justify-center text-base  ">
                        <button
                          className=" bg-blue-600 py-[2px] px-4 transition-[background-color] text-white rounded-[10px] hover:bg-gray-600 hover:text-white"
                          type="button"
                        >
                          show details
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>*/
