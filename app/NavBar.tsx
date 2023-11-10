import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex bg-slate-800 text-white p-1 space-x-3">
      <Link href="/">NextJS</Link>
      <Link href="/admin">admin</Link>
      <Link href="/users">users</Link>
      <Link href="/api/auth/signin">Sign In</Link>
    </div>
  );
};

export default NavBar;
