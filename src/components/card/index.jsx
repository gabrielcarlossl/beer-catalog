import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBeersRequest } from '../../redux/actions/beerActions'

const Card = () => {
    const dispatch = useDispatch();
    const beers = useSelector((state) => state.beers.beers)
    useEffect(() => {
        dispatch(fetchBeersRequest())
    }, [dispatch])
    console.log(beers)

    return (
        <div>
            {beers.map((beer) => (
                <div key={beer.id}>
                    <h3>{beer.name}</h3>
                    <img src={beer.image_url} alt={beer.name} />
                    <p>{beer.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Card
