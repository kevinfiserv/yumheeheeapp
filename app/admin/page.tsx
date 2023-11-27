import Link from "next/link";
import '../components/css/homeHeader.css';
import '../components/css/adminButtons.css';
import React from "react";

const Admin = () => {
  return (
    <> 
      <div className="mydict">
      <div>
        <label>
          <span>
          <Link
              href="/adminCustomers">
              {/* <label> */}
              <input type="radio" name="radio" defaultChecked />
              Customers
              {/* </label> */}
            </Link>
          </span>
        </label>
        <label>
        <span>
          <Link
              href="/adminProducts">
              <label>
              <input type="radio" name="radio"/>
              Products
              </label>
            </Link>
          </span>
        </label>
        <label>
        <span>
          <Link
              href="/adminEmployees">
              <label>
              <input type="radio" name="radio" defaultChecked />
              Employees
              </label>
            </Link>
          </span>
        </label>
      </div>
    </div>
    </>
  );
};

export default Admin;
