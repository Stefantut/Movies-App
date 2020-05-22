import { useState, useEffect } from "react";

const fetchApi = {
  useFetch: function (url) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await fetch(url);
          await res
            .json()
            .then((res) => setMovies([...res.results]))
            .then((res) => setCurrentPage(res.page));
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }, [url]);
    return { movies, error, loading, currentPage };
  },
};
export default fetchApi;
