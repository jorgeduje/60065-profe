import { useFetch } from "./hooks/useFetch";

export const Comments = () => {
  const {
    data: comments,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.org/comments");

  console.log(comments);
  return <div>hola</div>;
};
