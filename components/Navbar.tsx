"use client";

"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed flex w-full items-center justify-between p-4 px-8 bg-gray-950 z-50">
      <Image src="/textLogo.png" alt="Lootpaw Logo" width={100} height={20} />
      <Link href="#">
        <button className="text-xs font-bold px-4 py-2 rounded-sm text-black bg-yellow-500">
          Coming Soon
        </button>
      </Link>
    </nav>
  );
}
