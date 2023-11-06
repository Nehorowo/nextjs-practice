import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortBy: string };
}

const UsersPage = async ({ searchParams: { sortBy } }: Props) => {
  return (
    <>
      <h1>Users List</h1>
      <Link href="/users/new" className="btn btn-primary">
        New User
      </Link>
      <UserTable sortBy={sortBy} />
    </>
  );
};

export default UsersPage;
