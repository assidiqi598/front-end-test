import React from 'react';

import './uploaded-img.styles.scss';

// destructure props
const UploadedImg = ({ imgValue, divArray, mouseOver, mouseOut }) => {
    return (
        <div
            className='uploaded-img'
            style={{ backgroundImage: `url(${imgValue})` }} // use string interpolation to get value and assign to backgroundImage
        >
            {
                // make 6 divs to cover the image
                divArray.map((div, index) => {
                    return (
                        <div
                            key={index}
                            className={div ? 'div-area selected' : 'div-area'}
                            onMouseOver={mouseOver}
                            onMouseOut={mouseOut}
                            id={index}
                        />
                    )
                })
            }
        </div>
    )
};

export default UploadedImg;