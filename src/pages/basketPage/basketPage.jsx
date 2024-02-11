import { useSelector } from 'react-redux'

import classes from './basketPage.module.sass'
import { BasketCard } from '../../components/basketCard/basketCard.jsx'



export const BasketPage = () => {
    const { basketProducts } = useSelector(state => state.basket)

    return (
        <div className={classes.BasketPage}>
            <div className={'container'}>
                <div className={classes.BasketPage__inner}>
                
                    <div className={classes.productsList}>
                        {basketProducts.length > 0
                            ? basketProducts.map(item => <BasketCard item={item}/>)
                            : <p>Пусто</p>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}