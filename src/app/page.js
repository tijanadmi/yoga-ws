import Header from "../components/Header";
import Footer from "../components/Footer";

// export default function HomePage() {
//   return (
//     <>
//       <Header />
//       <main className="pt-20">
//         <section className="bg-[url('/images/yoga-hero.jpg')] bg-cover bg-center h-[80vh] flex items-center justify-center text-white text-center px-4">
//           <div className="bg-black bg-opacity-50 p-6 rounded-lg">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">
//               Dobrodošli u svet joge
//             </h1>
//             <p className="text-lg md:text-xl">
//               Uravnoteži telo i um kroz vežbu i disanje
//             </p>
//           </div>
//         </section>

//         <section className="max-w-5xl mx-auto py-12 px-4 text-center">
//           <h2 className="text-3xl font-bold text-pink-600 mb-4">Zašto joga?</h2>
//           <p className="text-gray-700 mb-6">
//             Joga ti pomaže da pronađeš mir, poboljšaš fleksibilnost i ojačaš
//             telo. Pridruži se časovima uživo ili pročitaj naš blog.
//           </p>
//           <a
//             href="/blog"
//             className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full transition"
//           >
//             Pogledaj blog
//           </a>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }

export const metadata = {
  title: "Početna",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero sekcija sa full-screen pozadinom */}
        <section
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/images/yoga-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
                Dobrodošli u svet joge
              </h1>
              <p className="text-lg md:text-xl text-white drop-shadow-md">
                Uravnoteži telo i um kroz vežbu i disanje
              </p>
            </div>
          </div>
        </section>

        {/* Sekcija sa kratkim uvodom */}
        <section className="max-w-5xl mx-auto py-12 px-4 text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">Zašto joga?</h2>
          <p className="text-gray-700 mb-6">
            Joga ti pomaže da pronađeš mir, poboljšaš fleksibilnost i ojačaš
            telo. Pridruži se časovima uživo ili pročitaj naš blog.
          </p>
          <a
            href="/blog"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full transition"
          >
            Pogledaj blog
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
