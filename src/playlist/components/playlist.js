import React from 'react';
import Media from './media.js';
import './playlist.css';

function Playlist(props) {
  return (
    <div className="Playlist row">
      {
        props.playlist.map((item) => {
          return <Media 
          	{...item}
          	key={item.id}
          	handleOpenModal={props.handleOpenModal}
          	/>
        })
      }
    </div>
  )
}

export default Playlist;