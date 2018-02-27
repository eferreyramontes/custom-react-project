import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import VolumeMute from '../../icons/components/volume-mute';

import './volume.css';

function Volume(props){
    return (
        <button className="Volume" onClick={props.handleVolumeClick}>
            {
                props.nonmute?
                    <VolumeIcon
                        color="white"
                        size={25}
                    />
                :
                    <VolumeMute
                        color="white"
                        size={50}
                    />
            }
            <div className="Volume-range">
                <input 
                    type="range"
                    min={0}
                    max={1}
                    step={.05}
                    onChange={props.handleVolumeChange}
                    value={0}
                />
            </div>
        </button>
    );
}

export default Volume;