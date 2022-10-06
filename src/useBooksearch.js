import axios from "axios";
import { useEffect, useState } from "react";

export default function useBookSearch(pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [articles, setArticles] = useState([])
  const [hasMore, setHasMore] = useState(true)

  /*useEffect(() => {
    setBooks([])
  },[query])*/

  useEffect(()=>{
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      //url: 'http://openlibrary.org/search.json',
      url: 'https://stormy-shelf-93141.herokuapp.com/articles',
      params: {_limit: 5, _page: pageNumber},
      cancelToken: new axios.CancelToken(c => cancel =c)
    }).then(res => {
      setArticles(prevBooks => {
        return [...new Set([...prevBooks, ...res.data])]
      })
      setHasMore(res.data.lenght > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  },[pageNumber])
  return { loading, error, articles, hasMore }
}