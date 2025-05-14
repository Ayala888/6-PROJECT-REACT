import { useParams } from "react-router-dom";
import { doramas } from "../components/main/Doramas";
import Header from "../components/header/Header";
import ReviewSection from "../components/main/ReviewSection";

export default function DoramaDetailPage() {
  const { id } = useParams();
  const dorama = doramas.find((item) => item.id === parseInt(id));

  if (!dorama) {
    return <p className="text-center text-red-500 pt-20">Dorama табылмады</p>;
  }

  return (
    <div className="px-4 sm:px-6 py-6 pt-24 space-y-10 max-w-screen-lg mx-auto">
      <Header/>
      <div className="space-y-10">
        <section className="md:flex md:gap-8 items-start">
          {/* Сурет и аты*/}
          <div className="md:w-1/2 space-y-4 ">
            <div className="text-center md:text-left space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold ">{dorama.title}</h2>
              <p className="text-sm">{dorama.year} жыл</p>
              <p className="text-sm">Серия саны: {dorama.episodes}</p>
            </div>

            <img
              src={dorama.img}
              alt={dorama.title}
              className="w-full max-w-[240px] sm:max-w-xs mx-auto md:mx-0 rounded-lg object-cover aspect-[3/4] shadow-md"
            />


          </div>

          {/* Мәлімет */}
          <div className="md:w-1/2 md:mt-45 space-y-3 mt-6 text-sm sm:text-base">
            <p><span className="font-semibold">Елі:</span> {dorama.country}</p>
            <p><span className="font-semibold">Жылы:</span> {dorama.year}</p>
            <p><span className="font-semibold">Режиссер:</span> {dorama.director}</p>
            <p><span className="font-semibold">Актерлер:</span> {dorama.actors}</p>
            <p><span className="font-semibold">Жанр:</span> {dorama.genre}</p>
            <div className="mt-4">
              <span className="font-semibold">Рейтинг:</span>{" "}
              <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-bold">
                {dorama.rating}
              </span>
            </div>
          </div>
        </section>

        {/* Галерея */}
        {dorama.gallery?.length > 0 && (
          <section>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center text-pink-500">Галерея</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {dorama.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="gallery-image w-full h-40 sm:h-48 object-cover rounded-lg"
                  style={{ animationDelay: `${index * 0.3}s` }}
                />
              ))}
            </div>
          </section>
        )}

        {/* Сюжет */}
        {dorama.summary && (
          <section>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center text-pink-500">Сюжеті</h3>
            <p className="text-sm sm:text-base">{dorama.summary}</p>
          </section>
        )}

        {/* Пікір */}
        <ReviewSection doramaId={dorama.id} />
      </div>
    </div>
  );
}



