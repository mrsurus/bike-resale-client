import { useEffect, useState } from "react"

const useToken = email => {
    const [token, setToken] = useState('');

    useEffect(() => {
        if (email) {
            fetch(`https://bike-resale-server-three.vercel.app/jwt?email=${email}`)
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