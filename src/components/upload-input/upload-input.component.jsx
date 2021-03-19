import React from 'react';

import './upload-input.styles.scss';

const UploadInput = ({ handleImgInput }) => (
    <div className='upload-input'>
        <input
            type='file'
            onChange={handleImgInput}
        />
    </div>

)

export default UploadInput;