import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

const BACKEND_API = "http://localhost:3000/api";

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
  orderNumber: number;
  customerOrder: string;
  totalPrice: number;
  time: Date;
}

interface OrderList {
  orderIndex: number;
  orderNumber: number;
  productId: number;
  quantity: number;
}

interface Product {
  productId: number;
  name: string;
  price: number;
}

export class ProductApi {
  static async getAllProducts() {
    const res = await fetch(`${BACKEND_API}/products`, {
      next: {
        revalidate: 10,
      },
    });
    const Products: Product[] = await res.json();
    return Products;
  }
  static async findProduct(id: number) {
    const res = await fetch(`${BACKEND_API}/product/${id}`);
    const Product: Product = await res.json();
    return Product;
  }

  static updateProduct(body: Product) {
    fetch(`${BACKEND_API}/updateProduct`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
  }
}

export class EmployeeApi {
  static async getAllEmployees() {
    const res = await fetch(`${BACKEND_API}/employee`);
    const Employees: Employee[] = await res.json();
    return Employees;
  }

  static async findEmployee(id: number) {
    const res = await fetch(`${BACKEND_API}/getEmployee/${id}`);
    const Employee: Employee = await res.json();
    return Employee;
  }
}

export class OrderListApi {
  static async getAllOrderLists() {
    const res = await fetch(`${BACKEND_API}/orderList`);
    const OrderList: OrderList[] = await res.json();
    return OrderList;
  }

  static async findOrderList(id: number) {
    const res = await fetch(`${BACKEND_API}/getOrderList/${id}`);
    const OrderList: OrderList = await res.json();
    return OrderList;
  }
}
export class OrderDetailApi {
  static async getAllOrderDetails() {
    const res = await fetch(`${BACKEND_API}/orderDetail`);
    const OrderDetails: OrderDetails[] = await res.json();
    return OrderDetails;
  }

  static async findOrderDetails(id: number) {
    const res = await fetch(`${BACKEND_API}/getOrderDetail/${id}`);
    const OrderDetails: OrderDetails = await res.json();
    return OrderDetails;
  }
}

export class CustomerApi {
  static async getAllCustomers() {
    const res = await fetch(`${BACKEND_API}/customers`);
    const Customers: Customers[] = await res.json();
    return Customers;
  }

  static async findCustomer(id: number) {
    const res = await fetch(`${BACKEND_API}/getCustomer/${id}`);
    const Customers: Customers = await res.json();
    return Customers;
  }
}
export class CustomerOrderApi {
  static async getAllCustomerOrders() {
    const res = await fetch(`${BACKEND_API}/customerOrder`);
    const CustomerOrders: CustomerOrders[] = await res.json();
    return CustomerOrders;
  }

  static async findCustomerOrder(id: number) {
    const res = await fetch(`${BACKEND_API}/getCustomerOrder/${id}`);
    const CustomerOrders: CustomerOrders = await res.json();
    return CustomerOrders;
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
