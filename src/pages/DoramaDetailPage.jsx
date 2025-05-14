
import { useParams } from "react-router-dom";
import { doramas } from "../components/main/Doramas";
import Header from "../components/header/Header";
import ReviewSection from "../components/main/ReviewSection";

export default function DoramaDetailPage() {
  const { id } = useParams();
  const dorama = doramas.find((item) => item.id === parseInt(id));

  if (!dorama) {
    return <p className="text-center text-red-500">Dorama not found</p>;
  }

  return (
    <div className="px-6 py-8 space-y-10 pt-20">
      <Header />

      <div className="mt-10 space-y-10 max-w-screen-lg mx-auto px-4">
        <section className="md:flex md:gap-8 items-start">
          <div className="md:w-1/2 space-y-4">
            <div className="text-center md:text-left space-y-1">
              <h2 className="text-2xl font-bold">{dorama.title}</h2>
              <p>{dorama.year} жыл</p>
              <p>Серия саны: {dorama.episodes}</p>
            </div>
            <img
              src={dorama.img}
              alt={dorama.title}
              className="w-80 h-80 rounded-lg object-cover"
            />
          </div>

          <div className="md:w-1/2 md:mt-0 space-y-3 pt-35">
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

        {dorama.gallery?.length > 0 && (
          <section>
            <h3 className="text-xl font-semibold mb-4 text-center text-pink-500">Галерея</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {dorama.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg gallery-image"
                  style={{ animationDelay: `${index * 0.3}s` }}
                />
              ))}
            </div>
          </section>
        )}

        {dorama.summary && (
          <section>
            <h3 className="text-xl font-semibold mb-2 text-center text-pink-500">Сюжеті</h3>
            <p>{dorama.summary}</p>
          </section>
        )}
        <ReviewSection doramaId={dorama.id} />
      </div>
    </div>
  );
}


