interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default async function getTestUsers() {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return users;
}
