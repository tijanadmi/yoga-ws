import Layout from "@/components/Layout";

export const metadata = {
  title: "O Mariji",
};

export default function AboutPage() {
  return (
    <Layout>
      <section className="py-16 bg-white text-gray-800">
        {/* <section className="pt-24 pb-16 bg-white text-gray-800"> */}
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-6 text-center text-teal-700">
            O Mariji
          </h1>
          <img
            src="/images/marija-profile.png"
            alt="Marija - joga instruktorka"
            className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
          />
          <p className="text-lg leading-relaxed mb-4">
            Marija je strastvena instruktorka joge sa više od 10 godina iskustva
            u praksi i podučavanju. Svoj prvi kontakt sa jogom imala je još u
            ranoj mladosti, a ljubav prema ovom načinu života podstakla ju je da
            završi brojne sertifikovane kurseve u zemlji i inostranstvu,
            uključujući Hatha, Vinyasa i Yin jogu.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Nakon višegodišnje obuke i rada sa mentorima, Marija je stekla
            zvanje profesionalnog učitelja joge. Član je{" "}
            <strong>Udruženja joga instruktora Srbije</strong> i aktivno
            učestvuje na seminarima, radionicama i humanitarnim događajima
            posvećenim zdravlju tela i uma.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Marijine časove karakteriše nežan pristup, posvećenost svakom
            vežbaču i balans između fizičke vežbe, disanja i meditacije. Njena
            misija je da svakome približi blagodeti joge i pomogne u
            pronalaženju unutrašnjeg mira kroz svesno kretanje i disanje.
          </p>
        </div>
      </section>
    </Layout>
  );
}
