import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/create" className="btn btn-primary fixed top-10 right-10">📦 Add a Product</Link>
      <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-5xl font-bold">Products</h1>

      </div>
    </>
  );
}
