import React from "react";
import Home from './Home';

class ImagesForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: "",
      correct: 0,
      uncorrect: 0,
      isHomeVisible: false
    };
  }

  componentDidMount() {
    this.setState({
      data: [
        {image: '../images/1.png', "id": 1, visible: true},
        {image: '../images/2.png', "id": 2, visible: true},
        {image: '../images/3.png', "id": 3, visible: true},
        {image: '../images/4.png', "id": 4, visible: true},
        {image: '../images/5.png', "id": 5, visible: true},
        {image: '../images/6.png', "id": 6, visible: true},
        {image: '../images/7.png', "id": 7, visible: true},
        {image: '../images/8.png', "id": 8, visible: true},
        {image: '../images/9.png', "id": 9, visible: true},
        {image: '../images/10.png', "id": 10, visible: true},
        {image: '../images/11.png', "id": 11, visible: true},
        {image: '../images/12.png', "id": 12, visible: true}
      ].sort(() => Math.random() - 0.5)
    })  
  }

  hideUnhidePhoto(id) {
    const newData = this.state.data.map(item => {
      if(item.id === id) {
        if (item.id === 3 || item.id === 9 || item.id === 12) {
          this.setState({ correct: +this.state.correct + 1 })
        } else {
          this.setState({ uncorrect: +this.state.uncorrect + 1 })
        }
        return { ...item, visible: false};
      }
      return item;
    })
    this.setState({
      data: newData
    });
  }

  unselectAll() {
    const newData = this.state.data.map(item => {
        return { ...item, visible: true};
    })
    this.setState({
      data: newData,
      error: "",
      correct: 0,
      uncorrect: 0
    }); 
  }

  render() {
    return (
      <div>
        {
          (this.state.isHomeVisible) ? 
          (<Home />) : 
          (<div>
            <h1>Saugi internetinė svetainė</h1>
            <div className = "images-login">
              <h3>Pasirinkite vaizdus, kurie yra Jūsų prisijungimo portfelyje:</h3>
              <div className="container">
                {this.state.data.map((img) => (
                  <img src={img.image} key={img.id} alt= "" className="image-card" width="90" height="90" style={{ visibility: img.visible ? "" : "hidden"}} onClick={ () => this.hideUnhidePhoto(img.id) }></img>
                ))}
              </div>
              <button className="clean-all" onClick={() => this.unselectAll()}>Išvalyti pasirinkimus</button>
              <div className="error-inner">{this.state.error}</div>
              <div> 
                {(this.state.correct === 3 && this.state.uncorrect === 0) ? 
                (<button onClick={() => this.setState({isHomeVisible: true})}>Prisijungti</button>) : 
                (<button onClick={() => this.setState({error: "Pasirinkti vaizdai neteisingi"})}>Prisijungti</button>)} 
              </div> 
            </div>
          </div>)
        } 
      </div>
    );
  }
}
export default ImagesForm;