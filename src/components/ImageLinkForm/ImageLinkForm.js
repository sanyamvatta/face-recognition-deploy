import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({OnInputChange,onSubmit}) => {
  return (
    <div>
      <p className="f3" style={{fontWeight : "bold"}}>
        {'This Magic Brain Will detect faces in your pictures. Give it a try'}
      </p>
      <div className='flex-center'>
        <div className='form flex-center pa4 br3 shadow-5'>
          <input type="text" className='f4 pa2 w-70 center' onChange={OnInputChange}/>
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer' onClick={onSubmit}>Detect</button>
        </div>
      </div>
    </div>

  );
}
 
export default ImageLinkForm;