import { useDispatch } from 'react-redux'

import classes from './basketCard.module.sass'
import { basketAction } from '../../redux/slices/basketSlice.jsx'



export const BasketCard = ({ item }) => {
    const dispatch = useDispatch()

    const handleRemove = id => dispatch(basketAction.removeProduct(id))

    return (
        <div className={classes.BasketCard}>
            <img src={item.images && item.images[0]} alt=""/>
            <h4>{item.title}</h4>
            
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button onClick={() => handleRemove(item.id)}>Удалить</button>
        </div>
    )
}