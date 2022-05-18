import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroById';

const heroesImage = require.context('../../assets/heroes', true);

export const HeroScreen = ({history}) => {

    const {heroeId} = useParams();

     //mandamos el heroeId que obtenemos de los parametros a getHeroesById y nos devuelve toda la data de ese heroe.
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);
    
 
    if(!hero){ //Si no existe el heroe con el id del heroe en el path
        return <Redirect to="/" /> //redireccionamos al path principal
    }

    const handleReturn = () =>{

        if(history.length <=2){ //history.length contabiliza el numero de veces que se ha registrado el path, si se ha registrado más de 2 veces, que me haga un redirect to path principal
            history.push('/');
        }

        history.goBack(); // de lo contrario que me lleve atras si he estado desde el principio en la pagina y si no, que me saque de la pagina.
    }


    // Extraemos toda la data del hero.
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;



    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={ heroesImage(`./${heroeId}.jpg`) }
                alt={superhero}
                className="img-thumbnail animate__animated animate__fadeInLeft"/>
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b> Alter ego:</b> {alter_ego} </li>
                    <li className="list-group-item"><b> Publisher:</b> {publisher} </li>
                    <li className="list-group-item"><b> First appearance:</b> {first_appearance} </li>
                </ul>

                <h5> Characters </h5>

                <p>{characters}</p>

                <button 
                className="btn btn-outline-info"
                onClick={handleReturn}
                >
                    Return
                </button>

            </div>
        </div>
    )
}
