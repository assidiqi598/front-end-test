import React from 'react';

import './upload-input.styles.scss';

const UploadInput = ({ handleImgInput }) => (
    <div className='upload-input'>
        <h1>Please choose an image file</h1>
        <input
            type='file'
            onChange={handleImgInput}
        />
    </div>

)

export default UploadInput;