import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex bg-slate-800 text-white p-1">
      <Link href="/" className="mr-5">
        NextJS
      </Link>
      <Link href="/admin" className="mr-5">
        admin
      </Link>
      <Link href="/users">users</Link>
    </div>
  );
};

export default NavBar;
