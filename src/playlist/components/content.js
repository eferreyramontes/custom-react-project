import React, {Component} from 'react';
import Media from './media.js';
import './content.css';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import Volume from '../../icons/components/volume';
import FullScreen from '../../icons/components/full-screen';

class Content extends Component {
	render() {
		//const playlist = this.props.data.playlist
		const styles = {
			color: '#44546b',
			cursor:'pointer',
			width:120,
		}
		const {title, description, playlist} = this.props
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
						<div className="Playlist row">
						{
							playlist.map((item) => {
								return <Media key={item.id} 
									{...item}
								/>
							})
						}
						</div>
					</div>
				);
	}
}

export default Content;