import React, { use } from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardBody,
  Image,
  Button,
} from "@nextui-org/react";

import { getTestUsers } from "@/pages/api";

const Home = async () => {
  const users = await getTestUsers();

  return (
    <>
      <div className="mt-12 text-3xl text-center grid py-10 bg-clip-border rounded-xl">
        <div>Welcome Employee {users[3].name}!</div>
      </div>
      <div className="text-3xl text-left grid py-1 bg-clip-border rounded-xl">
        <div>Employee ID: {users[3].id}</div>
      </div>
      <div className="text-3xl text-left grid py-1 bg-clip-border rounded-xl">
        <div>Full Name: {users[3].name}</div>
      </div>
      <div className="text-3xl text-left grid py-1 bg-clip-border rounded-xl">
        <div>Active Status: Currently Part time</div>
      </div>
      <div className="mt-3 text-3xl pl-5 pr-5 grid bg-stone-500 py-5 bg-clip-border rounded-xl">
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <div className="text-left relative flex w-35 flex-col rounded-xl">
            New Order
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="relative flex w-50 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
            >
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {user.name}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  {user.email}
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
