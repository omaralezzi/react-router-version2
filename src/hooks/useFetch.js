import {useState, useEffect} from 'react'


const useFetch = (url, initialState) => {
    const [data, setData] = useState(initialState)

    const abortFetch = new AbortController()
    
    useEffect(() => {
        fetch(url, {signal: abortFetch.signal})
        .then((response) => response.json())
        .then((results) => setData({results, loading: false, error: null}) )
        .catch((error) => {
            abortFetch.signal.aborted
            ? console.log('fetch aborted')
            : setData({results: null, loading: false, error})
        })

        return () => abortFetch.abort()
    },[url])

    return data
}

export default useFetch
