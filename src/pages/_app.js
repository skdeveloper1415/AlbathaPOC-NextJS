import '@/styles/globals.css';
import '@/styles/leftmenu.css';
import '@/styles/filtercomponent.css';
import '@/styles/skstyle.css'
import '@/styles/astyle.css'
import '@/styles/vkstyle.css'
import '@/styles/vsstyle.css'
import '@/styles/atstyle.css'
import '@/styles/nstyle.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "react-toastify/dist/ReactToastify.css";


export default function App({ Component, pageProps }) {

  return <>
    <main>
          <Component {...pageProps} />
    </main>
  </>
}