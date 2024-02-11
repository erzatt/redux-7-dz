import { useDispatch } from 'react-redux'

import classes from './productCard.module.sass'
import { basketAction } from '../../redux/slices/basketSlice.jsx'



export const ProductCard = ({ item }) => {
    const dispatch = useDispatch()

    const handleBuy = item => dispatch(basketAction.addProduct(item))

    return (
        <div className={classes.ProductCard}>
            <img src={item.images && item.images[0]} alt=""/>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p>{item.price}</p>
            
            <button onClick={() => handleBuy(item)}>Купить</button>
        </div>
    )
}