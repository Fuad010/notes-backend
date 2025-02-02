import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './carCard.module.css';

const baseUrl = import.meta.env.VITE_API_BASE_URL.replace('/api','')

interface CarCardProps{
    id:string
    brandName: string
    name:string
    price:number
    mileage:number
    year:number
    engine:string
    image:string
    actions?:JSX.Element[]
}

export const CarCard: FC<CarCardProps> = ({
    id,
    brandName,
    name,
    price,
    mileage,
    year,
    engine,
    image,
    actions
}) => {
    
    return(
        <Link to={`/auto/${id}`} className={styles.card_container}>
            <div className={styles.title_container}>
                <img src={`${baseUrl}${image}`} alt="car" />
                {actions}
                <div className={styles.price_container}>
                    <div className={styles.price}>{`${price.toLocaleString("en-US")} $`}</div>
                </div>
            </div>
            <div className={styles.bottom}>
                <h1>{brandName} {name}</h1>
                <p>{year}, {engine}, {mileage} km</p>
            </div>
        </Link>
    )
}