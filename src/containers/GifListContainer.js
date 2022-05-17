import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component{
  
    state = {
      pics: []
    }
  

  
renderGifs = (query = 'dolphins') => {
  fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=hNDN7LCU2ASFMejodYGbLQVQEQrrDTLM&rating=g`)
    .then( res => res.json())
    .then(({data}) => {
      this.setState({ pics: data.map( gif => ({ url: gif.images.original.url }) ) })
    })
   }
componentDidMount(){
  this.renderGifs();
}




  render(){
    return (
      <div>
        
        <GifSearch renderGifs={this.renderGifs}/>
        <GifList gifs={this.state.pics}/>
      </div>
  )
 }
}
export default GifListContainer;




