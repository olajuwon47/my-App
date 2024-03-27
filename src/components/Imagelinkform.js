import React, {} from 'react';
import './Imagelinkform.css';
    const Imagelinkform =() =>{
        return(
          <div>
            <p className='f3'>
                {'This Magic will detect Faces in your picture. Give it a Try'}
                </p>
                <div className='center'>
                    <div className='form center pa3 br2 shadow-5'>
                    <input className='f5 pa2 w-70 center' type='tex' />
                    <button className='w-30 grow f6 link ph3 pv2 dib white bg-green'>detect</button>
                    </div>
                </div>
          </div>  
        );
    }

export default Imagelinkform;