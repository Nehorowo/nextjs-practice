"use client";
import Link from "next/link";
import { ProductCard } from "./components";
import { useState } from "react";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";
import dynamic from "next/dynamic";

// Lazy Loading
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const [visible, setVisible] = useState(false);
  // const session = await getServerSession(authOptions);

  return (
    <main>
      {/* <h1>Hello! {session && <span>{session?.user?.name}</span>}</h1> */}
      <Link href="/users">link to users</Link>
      <ProductCard />
      <button className="btn" onClick={() => setVisible((prev) => !prev)}>
        BUTTON
      </button>
      {visible && <HeavyComponent />}
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
