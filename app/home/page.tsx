
import React, { use } from 'react';
import '../components/css/homeHeader.css';
import { EmployeeApi, ProductApi } from "@/pages/api";


const Home = async () => {

  let cartItems: any[] = [];
  let totalPrice = 0;
  
  function addToCart(product){
    const newItem = {
      productId: product.productId,
      name: product.name,
      price: product.price,
    };
    
    cartItems = [...cartItems, newItem];
    totalPrice += Number(product.productId.price);
  }

  function closeOrder () {
    cartItems = [];
    totalPrice = 0;
  };

  const products = await ProductApi.getAllProducts();
  const employees = await EmployeeApi.getAllEmployees();
  const myEmployee = await EmployeeApi.findEmployee(3);
  
  return (
    <>
    <div className="text-4x1 p1-5 pr-5">
      <div className="card-container">
        <div className="welcome"> Welcome</div>
        <div className="mt-5 text-center grid bg-clip-border rounded-xl">
          <div className="card ring-1 ring-black">
            <div className="card-border-top">
              <div id="img-container">
                <img id="img" src="https://cdl.ucf.edu/wp-content/uploads/2021/02/blank-profile-picture-973460_640.png"></img>
              </div>
              <span>{myEmployee.name}</span>
              <p className="job"> Employee ID: {myEmployee.employeeId} </p>
              <p className="job"> Active Status: {myEmployee.activeStatus} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="mt-10 text-3xl pl-5 pr-5 grid ring-1 ring-black bg-yellow-300 py-5 bg-clip-border rounded-xl">
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <div className="text-left relative flex w-35 flex-col rounded-xl">
            Create New Order
          </div>
          </div>
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.productId}
              className="relative flex w-50 flex-col ring-1 ring-black rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
            >
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {product.name}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  {Number(product.price).toFixed(2)}
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  // onclick="addToCart(product)"
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
                  "
                >
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="list"></div>
    </div>
    <div className="Order">
      <img src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
      width = "100"
      height= "100"> 
      </img>
      <div className="orderCard">
        <ul className="listCard">
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}
              </li>
          ))}
        </ul>
        <div>
            <div className="total">${totalPrice.toFixed(2)}</div>
            <button
                // onclick="closeOrder()"
                data-ripple-light="true"
                type="button"
                className="closeOrder select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
                "> Close
            {/* <div className="closeOrder onClick={closeOrder}" > Close </div> */}
            </button>
            </div>
      </div>
    </div>
    </>
  );
};

export default Home;
