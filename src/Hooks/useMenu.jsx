import { useEffect, useState } from "react"

const useMenu = () => {
    const [menu, setMenu] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/menus')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
            })
            .catch(error => console.error(error))
    }, [])

    return [menu]

}

export default useMenu;