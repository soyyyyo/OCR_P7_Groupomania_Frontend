import { useState, useEffect, useContext } from 'react'

export function useFetch(url) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect((props) => {
    const token = sessionStorage.getItem('token')

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }

    if (!url) return
    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(url, requestOptions)
        const data = await response.json()
        setData(data)
        ////
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])
  return { isLoading, data, error }
}

