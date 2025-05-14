import { useEffect, useState } from "react";

export default function ReviewSection({ doramaId }) {
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const storageKey = `reviews-${doramaId}`;

  useEffect(() => {
    const storedReviews = localStorage.getItem(storageKey);
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, [doramaId]);

  useEffect(() => {
    if (reviews.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(reviews));
    }
  }, [reviews, storageKey]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError("Пікір жазыңыз");
      return;
    }
    setError("");
    const newReview = { id: Date.now(), text };
    setReviews((prevReviews) => [...prevReviews, newReview]);
    setText("");
  };

  const handleSaveEdit = (id) => {
    if (editingText.trim()) {
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review.id === id ? { ...review, text: editingText } : review
        )
      );
      setEditingId(null);
      setEditingText("");
    }
  };

  const handleDelete = (id) => {
    setReviews((prevReviews) => prevReviews.filter((review) => review.id !== id));
  };

  return (
    <section className="space-y-4 max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold text-pink-500 text-center">Пікірлер</h3>

      <form onSubmit={handleSubmit} className="space-y-2 flex flex-col items-center">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-170 border border-gray-300 p-2 rounded"
          placeholder="Пікіріңіз..."
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Қосу
        </button>
      </form>

      {/* Пікірлер тізімі */}
      <ul className="space-y-2">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500">Пікір жоқ...</p>
        ) : (
          reviews.map((r) => (
            <li
              key={r.id}
              className="border p-2 rounded flex flex-col gap-2 sm:flex-row sm:justify-between"
            >
              {editingId === r.id ? (
                <div className="w-full space-y-2 max-w-md">
                  <input
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    className="w-full border border-blue-300 p-1 rounded"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSaveEdit(r.id)}
                      className="text-green-600 hover:underline"
                    >
                      Сақтау
                    </button>
                    <button
                      onClick={() => {
                        setEditingId(null);
                        setEditingText("");
                      }}
                      className="text-gray-500 hover:underline"
                    >
                      Бас тарту
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="max-w-md">{r.text}</p>
                  <div className="flex gap-2 text-sm">
                    <button
                      onClick={() => {
                        setEditingId(r.id);
                        setEditingText(r.text);
                      }}
                      className="text-blue-500 hover:underline"
                    >
                      Өңдеу
                    </button>
                    <button
                      onClick={() => handleDelete(r.id)}
                      className="text-red-500 hover:underline"
                    >
                      Өшіру
                    </button>
                  </div>
                </>
              )}
            </li>
          ))
        )}
      </ul>
    </section>
  );
}





