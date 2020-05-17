import { useState, useEffect } from "react";
const fetchApi = {
  useFetch: function (url) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await fetch(url);
          await res.json().then((res) => setMovies([...res.results]));
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }, [url]);
    return { movies, error, loading };
  },
};
export default fetchApi;
