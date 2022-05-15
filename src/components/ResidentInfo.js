import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../assests/styles/ResidentInfo.css';
import GetColor from './GetColor';

const ResidentInfo = ({resident}) => {

    

    const [info,SetInfo]=useState({});
    
    useEffect(()=>{
        axios.get(resident)
        .then(res=>SetInfo(res.data))
    },[resident])
    
    

    return (
        <div className='card'>
            <ul>
                
                <div className='card-image-container'>
                    <img src={info.image} alt="" className='card-image' />
                </div>
                <li className='card-name'>
                  <b>Name:</b>  {info.name}
                </li>
                <li className='card-status'> <span className='status-icon' style={{background : GetColor(info.status)}} ></span><b>Status:</b>  {info.status}</li>
                <li className='card-origin'><b>Origin:</b>  {info.origin?.name}</li>
                <li className='card-episode'><b>Episodes where appear:</b>  {info.episode?.length}</li>
            </ul>
            
        </div>
    );
};

export default ResidentInfo;