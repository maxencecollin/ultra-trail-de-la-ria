export default function VideoSection() {
  return (
    <section className="py-20 px-[5%] bg-white">
      <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 uppercase tracking-wider mb-12">
        La Ria vue du ciel
      </h2>
      <div className="max-w-4xl mx-auto">
        <video
          controls
          poster="/images/hero-bg.jpg"
          className="w-full rounded-lg shadow-xl"
        >
          <source src="/images/drone/drone-4.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture video.
        </video>
      </div>
    </section>
  );
}
