import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, serError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();

        setIsLoading(false);

        setData(json);
        serError(null);
      } catch (error) {
        setIsLoading(false);
        serError("could Not Fetch the Data");
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
