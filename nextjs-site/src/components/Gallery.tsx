import Image from "next/image";

const images = [
  { src: "/images/HODM5670-web.jpg", alt: "Vue aerienne de Saint-Cado et la maison de Nichtarguer" },
  { src: "/images/IEAP5443-web.jpg", alt: "Panorama de la Ria d'Etel" },
  { src: "/images/XBGL5940-web.jpg", alt: "Le port et la ria" },
  { src: "/images/XGXK9412-web.jpg", alt: "Vue sur Saint-Cado" },
];

export default function Gallery() {
  return (
    <section className="py-20 px-[5%] bg-white">
      <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 uppercase tracking-wider mb-12">
        Le Parcours en Images
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover gallery-image cursor-pointer"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
