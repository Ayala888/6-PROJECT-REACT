import { useUser } from './useUser';

export default function ReviewSection({ doramaId }) {
  const {
    reviews,
    text,
    setText,
    error,
    setError,
    editingId,
    setEditingId,
    editingText,
    setEditingText,
    handleSubmit,
    handleSaveEdit,
    handleDelete,
  } = useUser(doramaId); 

  return (
    <section className="space-y-4 max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold text-pink-500 text-center">Пікірлер</h3>

      {/* Пікір жазу формасы */}
      <form onSubmit={handleSubmit} className="space-y-2 flex flex-col items-center">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded resize-none min-h-[80px] text-sm md:text-base 
          focus:outline-none focus:ring-2 focus:ring-pink-400
          placeholder-gray-400 dark:placeholder-gray-300
          bg-white dark:bg-gray-900 text-black dark:text-white"
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
              {/* Өңдеу режимі */}
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
                  {/* Пікірдің мәтіні және әрекеттер */}
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






