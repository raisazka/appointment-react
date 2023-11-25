import axios from '../axios'

export const login = (
    email, 
    password, 
    setCookie, 
    setDisabled,
    navigate,
) => {
    axios
    .post('/login', {
        email: email,
        password: password,
    })
    .then(({ data }) => {
        // store cookie
        setCookie(
            'access_token',
            data.access_token
        )
        navigate('/')
    })
    .catch((err) => {
        console.error(err)
    })
    .finally(() => setDisabled(false))
}