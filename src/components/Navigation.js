"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation({ onLinkClick, user = null }) {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Početna" },
    { href: "/about", label: "O meni" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      {/* Desktop meni */}
      <nav className="hidden md:flex gap-6 text-lg items-center">
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}

        {!user ? (
          <Link href="/login" className="font-semibold text-pink-600">
            Prijavi se
          </Link>
        ) : (
          <div className="relative">
            <button
              onClick={() => setIsAdminOpen(!isAdminOpen)}
              className="font-semibold text-pink-600"
            >
              Admin ▾
            </button>
            {isAdminOpen && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-md w-40 py-2 z-50">
                <Link
                  href="/my_posts"
                  className="block px-4 py-2 hover:bg-pink-100"
                  onClick={() => setIsAdminOpen(false)}
                >
                  Postovi
                </Link>
                <Link
                  href="/my_posts/new-post"
                  className="block px-4 py-2 hover:bg-pink-100"
                  onClick={() => setIsAdminOpen(false)}
                >
                  Novi Post
                </Link>
                <Link
                  href="/logout"
                  className="block px-4 py-2 hover:bg-pink-100"
                  onClick={() => setIsAdminOpen(false)}
                >
                  Odjavi se
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Mobilni meni */}
      <div className="md:hidden bg-white shadow-md px-4 py-2 flex flex-col items-start gap-2">
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} className="py-2" onClick={onLinkClick}>
            {label}
          </Link>
        ))}

        {!user ? (
          <Link href="/login" className="py-2" onClick={onLinkClick}>
            Login
          </Link>
        ) : (
          <>
            <Link href="/my_posts" className="py-2" onClick={onLinkClick}>
              Postovi
            </Link>
            <Link
              href="/my_posts/new-post"
              className="py-2"
              onClick={onLinkClick}
            >
              Novi Post
            </Link>
            <Link href="/logout" className="py-2" onClick={onLinkClick}>
              Logout
            </Link>
          </>
        )}
      </div>
    </>
  );
}
