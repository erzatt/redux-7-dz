import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import classes from './header.module.sass'



export const Header = () => {
    const { basketProducts } = useSelector(state => state.basket)

    return (
        <div className={classes.Header}>
            <div className={'container'}>
                <div className={classes.Header__inner}>
                    <h3>Header</h3>
                    <NavLink to={'/'}>
                        mainPage
                    </NavLink>
                    <NavLink to={'/basket'}>
                        basketPage {basketProducts.length}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}