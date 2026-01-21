const keyInfoItems = [
  { number: "3", label: "Epreuves" },
  { number: "80", suffix: "km", label: "Ultra" },
  { number: "7", label: "Communes traversees" },
  { number: "1", label: "Traversee en bateau" },
];

export default function KeyInfoBar() {
  return (
    <section id="infos" className="bg-gray-900 py-8 px-[5%]">
      <div className="flex justify-center gap-8 md:gap-16 flex-wrap max-w-4xl mx-auto">
        {keyInfoItems.map((item, index) => (
          <div key={index} className="text-center text-white">
            <span className="block text-4xl md:text-5xl font-black leading-none">
              {item.number}
              {item.suffix && (
                <small className="text-2xl">{item.suffix}</small>
              )}
            </span>
            <span className="text-xs uppercase tracking-wider opacity-90">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
