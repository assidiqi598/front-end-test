import React, { useState } from 'react';

import './description.styles.scss';

const Description = ({ divArray, divId }) => {

    // initialize a temporary empty array
    const textArray = [];

    // give value to the textArray
    divArray.forEach((div, index) => {
        textArray.push(
            {
                title: 'Überschrift_' + (index + 1).toString(),
                description: 'Beschreibung_' + (index + 1).toString() + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        );
    });

    // assign the textValue to the initial state array
    const [text, setText] = useState(textArray);

    // convert divId to number
    const id = parseInt(divId);

    // handle event when description is edited
    const handleChange = event => {
        const { name, value } = event.target;
        setText(prevValue => {
            const tempArray = prevValue.map((text, index) => {
                if (index === id) {
                    return ({
                        ...text,
                        [name]: value // change the property that has the same name (title or description) as the string value of name
                    });
                } else {
                    return text;
                }
            });
            return tempArray;
        });
    }

    return (
        // if divId is an empty string this div will not be displayed
        <div className='description' style={{ display: divId === '' ? 'none' : 'flex' }} >
            <input
                className='title'
                type='text'
                name='title'
                value={divId && text[id].title} // if divId has value assign the title to value
                onChange={handleChange}
            />
            <textarea
                className='desc-area'
                name='description'
                value={divId && text[id].description} // if divId has value assign the description to value
                onChange={handleChange}
                rows='3'
            />
        </div>
    )

};

export default Description;