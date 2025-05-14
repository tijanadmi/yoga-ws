"use client";

import Link from "next/link";
import { useState } from "react";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
//         <Link href="/" className="text-xl font-bold text-pink-600">
//           YogaLife
//         </Link>
//         <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
//           ☰
//         </button>
//         <nav
//           className={`md:flex gap-6 ${
//             menuOpen ? "block mt-4" : "hidden"
//           } md:mt-0`}
//         >
//           <Link href="/" className="text-gray-700 hover:text-pink-600">
//             Početna
//           </Link>
//           <Link href="/about" className="text-gray-700 hover:text-pink-600">
//             O meni
//           </Link>
//           <Link href="/blog" className="text-gray-700 hover:text-pink-600">
//             Blog
//           </Link>
//           <Link href="/contact" className="text-gray-700 hover:text-pink-600">
//             Kontakt
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">YogaLife</h1>
        <nav className="hidden md:flex gap-6 text-lg">
          <Link href="/">Početna</Link>
          <Link href="/about">O meni</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        {/* Mobilni meni dugme */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Padajući mobilni meni */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 flex flex-col items-start">
          <Link href="/" className="py-2" onClick={() => setIsOpen(false)}>
            Početna
          </Link>
          <Link href="/about" className="py-2" onClick={() => setIsOpen(false)}>
            O meni
          </Link>
          <Link href="/blog" className="py-2" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
        </div>
      )}
    </header>
  );
}
