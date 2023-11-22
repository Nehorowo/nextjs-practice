"use client";
import Link from "next/link";
import { ProductCard } from "./components";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";

export default function Home() {
  // const session = await getServerSession(authOptions);

  return (
    <main>
      {/* <h1>Hello! {session && <span>{session?.user?.name}</span>}</h1> */}
      <Link href="/users">link to users</Link>
      <ProductCard />
      <button
        className="btn"
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];

          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        BUTTON
      </button>
    </main>
  );
}

// // Overwriting Metadata for specific page

// export const metadata: Metadata = {
//   title: "...",
// };

// // Generating Metadata from backend data

// export const generateMetadata = async (): Promise<Metadata> => {
//   const product = await fetch('...')

//   return {
//     title: product.title,
//     description: product.description
//   }
// };
