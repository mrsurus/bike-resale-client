import { useEffect, useState } from "react"

const useToken = email => {
    const [token, setToken] = useState('');

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accestoken) {
                        localStorage.setItem('accesToken', data.accestoken)
                        setToken(data.accestoken)
                    }
                });
        }
    }, [email])
    return [token]
}
export default useToken