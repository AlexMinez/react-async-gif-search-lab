import React,  {Component} from "react";

class GifSearch extends Component {
    state = {
        query: ""
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.renderGifs(this.state.query)
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search:
                        <input type="text" value={this.state.query} name="name" onChange={event => this.setState({ query: event.target.value})}/>
                    </label>
                    <button>Find Me!</button>
                </form>
            </div>
        )
    }
}
export default GifSearch;