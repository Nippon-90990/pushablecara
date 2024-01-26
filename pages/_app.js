import "@/styles/globals.css";
import Navbar from '../components/Navbar'
import {useState,useEffect} from "react";
import LoadingBar from "react-top-loading-bar";
import router,{useRouter} from "next/router";

export default function App({ Component, pageProps }) {


  const [progress, setProgress] = useState(0)
  const [user, setUser] = useState({value : null})
  const [key, setKey] = useState(0)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(100)
    })
    console.log("Hey I Am useEffect From _app.js")
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }

    } catch (error) {
      console.error(error);
      localStorage.clear()
    }

    const token = localStorage.getItem('token')
    if (token) {
      setUser({ value : token })
    }
    setKey(Math.random()) // if you get any problem plese do it up...

  }, [router.query])

  const logout = ()=> {
    localStorage.removeItem('token')
    setUser({ value: null })
    setKey(Math.random())
    router.push('/')
  }


  return <>
  <Navbar logout={logout} user={user} key={key}/>
  <Component {...pageProps} />;
  </>
}
