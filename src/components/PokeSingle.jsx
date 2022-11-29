import React, { Component } from "react";

class PokeSingle extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    // Class components all have props in constructor, that's where props come from
    // params is coming from RouteWrapper
    // pokesingle is defined in the body of App.js
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
      .then((res) => res.json())
      .then((data) => this.setState({ data: data, isLoading: false }));
  }
  render() {
    // console.log(this.props.params.pokesingle);
    return (
      <div>
        <h2>{this.state.data.name}</h2>
        {
          <img
            src={this.state.data.sprites?.other.dream_world.front_default}
            alt={this.state.data.name}
          />
        }
      </div>
    );
  }
}

export default PokeSingle;
