import { useState,useEffect,useContext ,createContext} from "react";
// import "../../styles/AuthStyles.css";
import axios from "axios";
const AuthContext = createContext();


//for logout and hide register page context Api
const AuthProvider = ({children}) =>{
    const [auth,setAuth] = useState({
        user:null,
        token:""
    })

    //default axios
    axios.defaults.headers.common['Authorization'] = auth?.token
    useEffect(()=>{
        const data = localStorage.getItem('auth');
        if(data){
            const parseSData = JSON.parse(data);
            setAuth({
                ...auth,
                user:parseSData.user,
                token:parseSData.token
            })
        }

        //eslink disable next line
    },[]);
    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

//custom hook
const useAuth = () => useContext(AuthContext)

export {useAuth,AuthProvider}