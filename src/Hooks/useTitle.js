import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Unique Recipe`;
    }, [])
}

export default useTitle;