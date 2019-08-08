import React from 'react';
import PlaylistItem from './PlaylistItem';

const Playlist = ({ songs }) => <ul className="collection">
  {songs.map((song, idx) => <PlaylistItem key={idx} song={song} />)}
</ul>

export default Playlist