export const pokeTypes = {
    POKE_UPDATE: 'POKE_UPDATE',
    PROCESSING_POKE: 'PROCESSING_POKE'
};

export const getPok = (id : number) => async (dispatch) => {

    dispatch({
        type: pokeTypes.PROCESSING_POKE
    })
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
    const body = await resp.json();
    dispatch({
        payload: {
            pokName: body.name,
            pokId: id
        },
        type: pokeTypes.POKE_UPDATE
    })
}