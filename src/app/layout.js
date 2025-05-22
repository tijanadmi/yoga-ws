import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: {
    template: "%s / Joga Life",
    default: "Dobrodošli / Joga Life",
  },
  description:
    "Stranica joga instruktorke sa blogom, informacijama i objavama.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
