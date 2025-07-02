"use client";

export const AboutBlock = () => {
  return (
    <div className="bg-white shadow-xl rounded-2xl px-6 py-8 flex flex-col md:flex-row gap-6 items-center justify-between max-w-5xl mx-auto">
      {/* Левая часть: логотип и иконка */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
        <div className="flex items-center gap-2">
          <span className="text-3xl md:text-5xl font-extrabold text-indigo-800 uppercase">
            Razryad
          </span>
        </div>
        <p className="text-indigo-500 font-semibold text-sm md:text-base">
          Надёжные кабели — современная электроника
        </p>
      </div>

      {/* Правая часть: описание */}
      <div className="text-gray-700 text-base leading-relaxed md:text-lg max-w-2xl">
        Бренд <strong>Razryad</strong> предлагает ассортимент кабелей для
        периферийных устройств, обеспечивая надежное подключение и высокую
        производительность. Мы следим за последними трендами в сфере
        электроники, чтобы предложить вам{" "}
        <strong>современные и качественные</strong> решения. Каждый кабель
        проходит строгий контроль перед отправкой клиенту — потому что качество
        для нас на первом месте.
      </div>
    </div>
  );
};
