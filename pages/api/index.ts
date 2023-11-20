import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface Customers {
  phoneNo: string;
  name: string;
  address: string;
  zipCode: number;
}

interface CustomerOrders {
  customer_order: number;
  phone: string;
  employeeid: number;
}

interface Employee {
  employeeId: number;
  activeStatus: string;
  name: string;
}

interface OrderDetails {
  order_number: number;
  customer_order: string;
  total_price: number;
  time: Date;
}

interface OrderList {
  orderIndex: number;
  orderNumber: number;
  productId: number;
  quantity: number;
}

interface Product {
  product_id: number;
  name: string;
  price: number;
}

export async function getTestUsers() {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return users;
}

export class ProductApi {
  static async getAllProducts() {
    const res = await fetch("http://localhost:3000/api/products");
    const Products: Product[] = await res.json();
    return Products;
  }
  static async findProduct(id: number) {
    const res = await fetch(`http://localhost:3000/api/product/${id}`);
    const Products: Product[] = await res.json();
    return Products;
  }
}

export class EmployeeApi {
  static async getAllEmployees() {
    const res = await fetch("http://localhost:3000/api/employee");
    const Employees: Employee[] = await res.json();
    return Employees;
  }

  static async findEmployee(id: number) {
    const res = await fetch(`http://localhost:3000/api/getEmployee/${id}`);
    const Employee: Employee = await res.json();
    return Employee;
  }
}

export class OrderListApi {
  static async getAllOrderLists() {
    const res = await fetch("http://localhost:3000/api/orderList");
    const OrderList: OrderList[] = await res.json();
    return OrderList;
  }

  static async findOrderList(id: number) {
    const res = await fetch(`http://localhost:3000/api/getOrderList/${id}`);
    const OrderList: OrderList[] = await res.json();
    return OrderList;
  }
}


export class CustomerApi {
  static async getAllCustomers() {
    const res = await fetch("http://localhost:3000/api/customers");
    const Customers: Customers[] = await res.json();
    return Customers;
  }
  
  static async findCustomer(id: number) {
    const res = await fetch(`http://localhost:3000/api/getCustomer/${id}`);
    const Customers: Customers[] = await res.json();
    return Customers;
  }
}

// export async function kevin(request: Request) {
//   const { userId, title }: Partial<Todo> = await request.json();

//   if (!userId || !title)
//     return NextResponse.json({ message: "Missing required data" });

//   const res = await fetch(DATA_SOURCE_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       userId,
//       title,
//       completed: false,
//     }),
//   });

//   const newTodo: Todo = await res.json();

//   return NextResponse.json(newTodo);
// }
