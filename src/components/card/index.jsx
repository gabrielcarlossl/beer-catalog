import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBeersRequest } from '../../redux/actions/beerActions'
import {cardStyle, cardContent, VerMais} from '../../assets/styles/card.style.js'

const Card = () => {
    const dispatch = useDispatch();
    const beers = useSelector((state) => state.beers.beers)
    useEffect(() => {
        dispatch(fetchBeersRequest())
    }, [dispatch])
    console.log(beers)

    return (
        <div className={cardStyle}>
            {beers.map((beer) => (
                <div className={cardContent} key={beer.id}>
                    <h3>{beer.name}</h3>
                    <img src={beer.image_url} alt={beer.name} />
                    <p> Teor alcoólico: {beer.abv}%</p>
                    <VerMais>Selecionar</VerMais>
                    
                </div>
            ))}
        </div>
    )
}

export default Card
