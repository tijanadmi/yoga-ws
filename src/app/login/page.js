"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const userData = await login({ email, password });
      if (!userData) {
        setErrorMsg("Neispravni podaci za prijavu");
        return;
      }
      // Uspesno logovan - mozes proveriti userData ako treba
      router.push("/my_posts");
    } catch (error) {
      setErrorMsg(error.message || "Došlo je do greške");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Prijava</h2>
        {errorMsg && <p className="text-red-500 text-sm mb-4">{errorMsg}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-pink-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Lozinka</label>
            <input
              type="password"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-pink-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition"
          >
            Prijavi se
          </button>
        </form>
      </div>
    </div>
  );
}
