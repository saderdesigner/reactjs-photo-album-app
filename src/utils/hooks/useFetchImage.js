/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

const api = process.env.REACT_APP_UNSPLASH_URL;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage(page, searchTerm) {
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetch() {
    const url =
      searchTerm === "" ? "photos?" : `search/photos?query=${searchTerm}&`;
    axios
      .get(`${api}${url}client_id=${secret}&page=${page}`)
      .then((res) => {
        searchTerm === "" ? fetchRamdom(res) : fetchSearch(res);
        setIsLoading(false);
      })
      .catch((e) => {
        setErrors(["Unable to fetch images"]);
        setIsLoading(false);
      });
  }

  function fetchRamdom(res) {
    setImages([...images, ...res.data]);
  }

  function fetchSearch(res) {
    page > 1
      ? setImages([...images, ...res.data.results])
      : setImages([...res.data.results]);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch();
  }, [page, searchTerm]);

  return [images, setImages, errors, isLoading];
}
