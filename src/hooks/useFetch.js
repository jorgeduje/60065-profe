// no es un componte
// no es funcion
// custom hook

import { useEffect, useState } from "react";

export const useFetch = (endpoint) => {
  // puedo usar cosas de react
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    setLoading(true);

    const getData = fetch(endpoint);
    getData
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, loading, error };
};

// useFetch() --> datos usuarios --> {}.data {}.error
// useFetch() --> datos posts
// useFetch() --> datos comments
// useFetch() --> datos
// useFetch() --> datos
// useFetch() --> datos
// useFetch() --> datos
