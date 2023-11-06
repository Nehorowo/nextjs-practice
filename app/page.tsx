import Link from "next/link";
import ProductCard from "./components";

export default function Home() {
  return (
    <main>
      <h1>Hello!</h1>
      <Link href="/users">link to users</Link>
      <ProductCard />
      <button className="btn">BUTTON</button>
    </main>
  );
}
