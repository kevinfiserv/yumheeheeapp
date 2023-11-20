import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function getTestUsers() {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return users;
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
