"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-800 text-white p-1 space-x-3">
      <Link href="/">NextJS</Link>
      <Link href="/admin">admin</Link>
      <Link href="/users">users</Link>
      {status === "loading" && <p>Loading...</p>}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Sign In</Link>
      )}
      {status === "authenticated" && (
        <div>
          {session.user?.name}
          <Link href="/api/auth/signout" className="ml-3">
            Sign out
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
