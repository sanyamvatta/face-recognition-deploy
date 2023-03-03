import './App.css';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import React, { Component } from 'react'
import Clarifai from 'clarifai'
import ParticlesBg from 'particles-bg';



const app = new Clarifai.App({
  apiKey : 'd5f13c4abbc94f0c8d0ab54e3257ddb2'
})


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
  }
}

  OnInputChange = (e)=>{
    this.setState({ input: e.target.value})
  }

  calculateFaceLocation = (data)=>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage')
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height)
    return {
      leftCol : clarifaiFace.left_col * width,
      topRow : clarifaiFace.top_row * height,
      rightCol : width - (clarifaiFace.right_col *width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) =>{
    console.log(box)
    this.setState({box : box})
  }

  onSubmit = (e)=>{
    this.setState({imageUrl : this.state.input})
    app.models
      .predict(
        {
          id: 'face-detection',
          name: 'face-detection',
          version: '6dc7e46bc9124c5c8824be4822abe105',
          type: 'visual-detector',
        }, this.state.input)
      .then(response => {
        this.displayFaceBox(this.calculateFaceLocation(response))
      }).catch(err => {
        console.log(err)
      })
    }


  render() {
    return (
      <div className="App">

        <div>
          <ParticlesBg  color="#ffffff" type="cobweb" bg={true} />
          <Logo />
          <ImageLinkForm OnInputChange={this.OnInputChange} onSubmit = {this.onSubmit}/>
          <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
        </div>

      </div>
    )
  }
}

