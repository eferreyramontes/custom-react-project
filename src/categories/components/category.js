import React from 'react';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import Volume from '../../icons/components/volume';
import FullScreen from '../../icons/components/full-screen';
import Playlist from '../../playlist/components/playlist'

function Category(props){
	const styles = {
		color: '#44546b',
		cursor:'pointer',
		width:120,
	}
	const {title, description, playlist} = props
	return (
				<div>
					<h5>{title}</h5>
					<h6>{description}</h6>
					<table className='table' style={styles}>
						<tbody>
							<tr>
								<td><Play/></td>
								<td><Pause/></td>
								<td><Volume/></td>
								<td><FullScreen/></td>
							</tr>
						</tbody>
					</table>
					<Playlist handleOpenModal={props.handleOpenModal}
						playlist={playlist}
					/>
				</div>
			);
}

export default Category;