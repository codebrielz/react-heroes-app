import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ])

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero=>(
                    <HeroCard key={hero.id} //La key de mi herocard es el hero.id
                        {... hero} //Extraigo todas las propiedades de mi hero, y las envio al componente
                        >
                    </HeroCard>
                ))
            }
        </div>
    )
}
