import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const monaLisa = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '400',
      brightness: '1',
      saturation: '100',
      contrast: '100'
    };
    this.change = this.change.bind(this);
    this.reset = this.reset.bind(this);
  }
  
  change(img) {
    this.setState({[img.target.name]: img.target.value}, () => console.log(this.state.range))
  }
  
  reset() {
    this.setState({width: '400', brightness: '1', saturation: '100', contrast: '100'});
  }

  render() {
    const {width, brightness, saturation, contrast} = this.state;
    const imgStyle = {
      width: width + 'px',
      filter: `brightness(${brightness}) saturate(${saturation}%) contrast(${contrast}%)`
    };
    return (
        <div className="MainView">
          <div className="inputs">
            <form>
              <h3>Brightness</h3>
              <input type="range" name="brightness" value={this.state.brightness} min="0" max="4" step="0.1" onChange={this.change} />          
              <input type="number" name="brightness" value={this.state.brightness} step="0.01" onChange={this.change} />
            </form>
            <form>
              <h3>Saturation</h3>
              <input type="range" name="saturation" value={this.state.saturation} min="0" max="200" onChange={this.change} />          
              <input type="number" name="saturation" value={this.state.saturation} onChange={this.change} />
            </form>
            <form>
              <h3>Contrast</h3>
              <input type="range" name="contrast" value={this.state.contrast} min="50" max="150" onChange={this.change} />          
              <input type="number" name="contrast" value={this.state.contrast} onChange={this.change} />
            </form>
            <button onClick={this.reset} style={{marginLeft: '28%', marginTop: '18%'}}> Reset to Default</button>
          </div>
          <img style={imgStyle} src={monaLisa} />
        </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
