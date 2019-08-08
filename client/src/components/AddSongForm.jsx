import React, { Component } from 'react';

class AddSongForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artistName: '',
      songName: ''
    };
    
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  inputChangeHandler({target}) {
    const {name, value} = target;

    this.setState({
      [name]: value
    });
  }

  clearForm() {
    this.setState({
      artist: '',
      songName: ''
    });
  }

  submitHandler(e) {
    const { addSong } = this.props;
    const { artistName, songName } = this.state;
    const newSong = {
      artistName,
      songName
    }
    e.preventDefault();
    addSong(newSong);
    this.clearForm();
  }  

  render() {
    const { artistName, songName } = this.state;
    return(
      <div>
        <h4>Add Song</h4>
        <form className="input-field" onSubmit={this.submitHandler}>
          <input
            type="text"
            name="artistName"
            placeholder="Enter Artist here"
            value={artistName}
            onChange={this.inputChangeHandler}
          ></input>
          <input
            type="text"
            name="songName"
            placeholder="Enter Song Here"
            value={songName}
            onChange={this.inputChangeHandler}
          ></input>
          <input className="btn waves-effect waves-light" type="submit" />
        </form>
      </div>
    )
  }
}

export default AddSongForm;