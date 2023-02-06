import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setFetchData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            }).then((data) => {
                setFetchData(data);
            })
    }, [url]);
    return data;
}


export default useFetch;