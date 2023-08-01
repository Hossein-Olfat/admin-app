import { useEffect, useState, useContext, useMemo } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Spinner } from "../../../src/Spinner";
import { Removebox } from "../Removebox.jsx";
import { TiTick } from "react-icons/ti";
import { Delete_modal_context } from "../../modal_Context";
function ProductItem_content() {
  const [Chosen_product, setChosen_product] = useState(null);
  const Deletebox = useContext(Delete_modal_context);
  const ProductId = useParams();
  const [Allproducts, setAllproducts] = useOutletContext();
  console.log(Allproducts);
  useEffect(() => {
    let ignore;
    fetch(
      `https://dashboard-admin-server.iran.liara.run/Products/${ProductId.ProductId}`
    )
      .then((chosen) => {
        return chosen.json();
      })
      .then((_chosen) => {
        if (!ignore) {
          setChosen_product(_chosen);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);
  console.log(Chosen_product);
  return (
    <>
      {Chosen_product !== null ? (
        <div className=" w-full flex">
          <section className="flex relative flex-col gap-3 shadow w-[490px]">
            <div
              style={{
                backgroundImage: `url(/images/${Chosen_product.img})`,
              }}
              className=" w-full max-w-[490px] aspect-video overflow-hidden bg-cover bg-center"
            ></div>
            <div className="px-3 pb-3 flex flex-col gap-3">
              <div className=" flex flex-col">
                <div className=" flex items-center gap-x-3 gap-y-1 px-1">
                  <h1 className=" w-1/2 font-semibold">Id </h1>{" "}
                  <p className="text-sm mb-1">{Chosen_product.id}</p>
                </div>
                <div className=" flex items-center px-1 gap-x-3 gap-y-1">
                  <h1 className=" w-1/2 font-semibold">Name </h1>{" "}
                  <p className="text-sm mb-1">{Chosen_product.title}</p>
                </div>
                <div className=" flex items-center px-1 gap-x-3 gap-y-1">
                  <h1 className=" w-1/2 font-semibold">Price </h1>{" "}
                  <p className="text-sm mb-1">{Chosen_product.price}$</p>
                </div>
                <div className=" flex items-center px-1 gap-x-3 gap-y-1">
                  <h1 className=" w-1/2 font-semibold">Sales </h1>{" "}
                  <p className="text-sm mb-1">{Chosen_product.sales}$</p>
                </div>
                <div className=" flex items-center px-1 gap-x-3 gap-y-1">
                  <h1 className=" w-1/2 font-semibold">InStock </h1>{" "}
                  <p className="text-sm mb-1">{Chosen_product.InStock}</p>
                </div>
                <div className=" flex items-center px-1 gap-x-3 gap-y-1">
                  <h1 className=" w-1/2 font-semibold">Active </h1>{" "}
                  <p className="text-sm mb-1">{Chosen_product.Active}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className=" bg-green-600 text-white w-[80px] flex justify-center items-center rounded-2xl cursor-pointer">
                  <button>Edit</button>
                </div>
                <div
                  onClick={() => {
                    Deletebox[1](Chosen_product.id);
                  }}
                  className=" bg-red-600 text-white w-[80px] flex justify-center items-center rounded-2xl cursor-pointer"
                >
                  <button>Remove</button>
                </div>
                <Removebox
                  chosen={Chosen_product}
                  from={"Products"}
                  deletebox={Deletebox}
                  setdatas={setAllproducts}
                />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
export { ProductItem_content };
