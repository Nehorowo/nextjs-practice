import Link from "next/link";
import ProductCard from "./components";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Metadata } from "next";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello! {session && <span>{session?.user?.name}</span>}</h1>
      <Link href="/users">link to users</Link>
      <ProductCard />
      <button className="btn">BUTTON</button>
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
