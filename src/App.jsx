import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/mainPage/mainPage.jsx'
import { BasketPage } from './pages/basketPage/basketPage.jsx'
import { Layout } from './components/layout/layout.jsx'


export const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/basket'} element={<BasketPage/>}/>
            </Route>
        </Routes>
    )
}