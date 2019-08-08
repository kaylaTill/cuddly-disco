import React, { Component } from 'react';
import Header from './Header';
import Playlist from './Playlist'
import AddSongForm from './AddSongForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
    }
    this.addSong = this.addSong.bind(this);
  }

  componentDidMount() {
    const { songs } = this.props;
    this.setState({
      songs
    })
  }

  addSong(song) {
    const { songs } = this.state;
    const newSongs = songs.slice();

    newSongs.push(song);
    this.setState({
      songs: newSongs,
    })
  }

  render() {
    const { songs } = this.state;
    return(
      <div className="container">
        <Header />
        <Playlist songs={songs} />
        <AddSongForm addSong={this.addSong}/>
      </div>
    );
  }
}

export default App;