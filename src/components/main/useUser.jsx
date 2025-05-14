import { useReducer, useEffect } from "react";

// Бастапқы стейт мәні
const initialState = {
  reviews: [],
  text: "",
  error: "",
  editingId: null,
  editingText: "",
};

// Редюсер функциясы
function reducer(state, action) {
  switch (action.type) {
    case "SET_REVIEWS":
      return { ...state, reviews: action.payload };
    case "SET_TEXT":
      return { ...state, text: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_EDITING_ID":
      return { ...state, editingId: action.payload };
    case "SET_EDITING_TEXT":
      return { ...state, editingText: action.payload };
    case "ADD_REVIEW":
      return { ...state, reviews: [...state.reviews, action.payload] };
    case "UPDATE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.map((review) =>
          review.id === action.payload.id ? { ...review, text: action.payload.text } : review
        ),
      };
    case "DELETE_REVIEW":
      return { ...state, reviews: state.reviews.filter((review) => review.id !== action.payload) };
    default:
      return state;
  }
}

export function useUser(doramaId) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const storageKey = `reviews-${doramaId}`;

  // Пікірлерді localStorage-тен алу
  useEffect(() => {
    const storedReviews = localStorage.getItem(storageKey);
    if (storedReviews) {
      dispatch({ type: "SET_REVIEWS", payload: JSON.parse(storedReviews) });
    }
  }, [doramaId]);

  // Пікірлерді localStorage-ке сақтау
  useEffect(() => {
    if (state.reviews.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(state.reviews));
    }
  }, [state.reviews, storageKey]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.text.trim()) {
      dispatch({ type: "SET_ERROR", payload: "Пікір жазыңыз" });
      return;
    }
    dispatch({ type: "SET_ERROR", payload: "" });
    const newReview = { id: Date.now(), text: state.text };
    dispatch({ type: "ADD_REVIEW", payload: newReview });
    dispatch({ type: "SET_TEXT", payload: "" });
  };

  const handleSaveEdit = (id) => {
    if (state.editingText.trim()) {
      dispatch({ type: "UPDATE_REVIEW", payload: { id, text: state.editingText } });
      dispatch({ type: "SET_EDITING_ID", payload: null });
      dispatch({ type: "SET_EDITING_TEXT", payload: "" });
    }
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_REVIEW", payload: id });
  };

  return {
    reviews: state.reviews,
    text: state.text,
    setText: (text) => dispatch({ type: "SET_TEXT", payload: text }),
    error: state.error,
    setError: (error) => dispatch({ type: "SET_ERROR", payload: error }),
    editingId: state.editingId,
    setEditingId: (id) => dispatch({ type: "SET_EDITING_ID", payload: id }),
    editingText: state.editingText,
    setEditingText: (text) => dispatch({ type: "SET_EDITING_TEXT", payload: text }),
    handleSubmit,
    handleSaveEdit,
    handleDelete,
  };
}
