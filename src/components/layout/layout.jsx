import { Outlet } from 'react-router-dom'
import { Header } from '../header/header.jsx'
import { Footer } from '../footer/footer.jsx'


export const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>

        </div>
    )
}