import React from 'react';

const PlaylistItem = ({ song }) => (
  <li className="collection-item">
    <span style={{ fontWeight: 'bold' }}>{song.artistName}</span>:  {song.songName}
  </li>
)

export default PlaylistItem;