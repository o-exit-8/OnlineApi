
import React from 'react';
import { IPokemonState, IState } from '../../reducers';
import { connect } from 'react-redux';
import { getPok } from '../../actions/poke.action';

interface IPokemonProps {
  pokemon: IPokemonState,
  getPok: (id: number) => void
}

interface IPokeParamsState {
  pokInputId: number
}

export class PokemonComponent extends React.Component<IPokemonProps, IPokeParamsState> {
  constructor(props) {
    super(props);
    this.state = {
      pokInputId: 1
    }
  }
  
  updatePokeId = (event) => {
    this.setState({
      pokInputId: event.target.value
    })
  }

  render() {
    const { pokName } = this.props.pokemon;
    const { pokInputId } = this.state;
    return (
      <div>
        <h1> {pokName} </h1>
        <input type="number" id="pokeId"
          className="form-control" placeholder="Pokemon ID"
          required value={pokInputId} onChange={this.updatePokeId} />
        <button onClick={() => this.props.getPok(pokInputId)}
          className="btn btn-success"
        >New Pok</button>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    pokemon: state.pokemon
  }
}

const mapDispatchToProps = {
  getPok: getPok
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonComponent);
