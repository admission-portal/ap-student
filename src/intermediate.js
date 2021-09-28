import jwt from 'jwt-decode'
import { useHistory } from 'react-router-dom';
export default function Itermediate() {
    const history = useHistory();

    try {
        /*  NOTE: need to check the condition here
        *   try-catch is temp here
        */
        let temp = window.location.href.split('#')[1];
        let paramString = temp.split('&')[0];
        let queryString = new URLSearchParams(paramString);
        let id_token;
        for (let pair of queryString.entries()) {
            if (pair[0] === 'id_token') {
                id_token = pair[1];
            }
        }
        if (id_token != null) {
            sessionStorage.setItem('id_token', id_token);
            sessionStorage.setItem('u_decoded', JSON.stringify(jwt(id_token)))
            history.push('/s')

        }
    }
    catch (e) {
        console.log(e)
    }
    
    return (
        <div>
            Redirecting...
        </div>
    )
}
