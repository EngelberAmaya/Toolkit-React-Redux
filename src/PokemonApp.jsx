import { useDispatch } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";
import { useEffect } from "react";

export const PokemonApp = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, []);

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />

            <ul>
                <li>Hola</li>
                <li>Hola</li>
                <li>Hola</li>
            </ul>
        </>
    )
}