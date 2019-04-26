import { IPokemonState } from ".";
import { pokeTypes } from "../actions/poke.action";
import { types } from "@babel/core";


const initState : IPokemonState = {
    pokName: 'Bulbasaur',
    pokId: 1
    
}

export const pokemonReducer = (state = initState, action) => {
    switch(action.type) {

        case pokeTypes.POKE_UPDATE:
      return {
        ...state,
        pokName: action.payload.pokName,
        pokId:action.payload.pokId
      }  
    case pokeTypes.PROCESSING_POKE: 
      return {
        ...state
      }
    default:
      break;
    }

    return state;
}