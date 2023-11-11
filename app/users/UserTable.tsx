import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

interface IUser {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortBy: string;
}

const UserTable = async ({ sortBy }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const users: IUser[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortBy === "email" ? (user) => user?.email : (user) => user?.name
  );

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortBy=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortBy=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user, index: number) => (
            <tr key={`${index}_${user.id}`}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default UserTable;
