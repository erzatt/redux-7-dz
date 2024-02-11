import { useDispatch, useSelector } from 'react-redux'
import { useEffect} from 'react'

import classes from './mainPage.module.sass'
import { asyncGetProducts } from '../../redux/slices/mainSlice.jsx'
import { ProductCard } from '../../components/productCard/productCard.jsx'
import { Loading } from '../../components/loading/loading.jsx'



export const MainPage = () => {
    const { products, loading } = useSelector(state => state.main)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetProducts())
    }, [dispatch])

    return loading ? <Loading/> : (
        <div className={classes.MainPage}>
            <div className={'container'}>
                <div className={classes.MainPage__inner}>

                    <div className={classes.productsList}>
                        {products.map(item =>
                            <ProductCard item={item} key={item.id}/>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}