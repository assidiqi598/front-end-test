import { useState } from 'react';

import UploadInput from './components/upload-input/upload-input.component';
import UploadedImg from './components/uploaded-img/uploaded-img.component';
import Description from './components/description/description.component';

import './App.css';

function App() {

  // initalize state
  const [rootState, setRootState] = useState({
    imgValue: '',
    divArray: [true, false, false, false, false, false],
    divId: '0'
  });

  // handle event after choosing an image
  const handleImgInput = event => {
    setRootState(prevValue => ({
      ...prevValue,
      imgValue: URL.createObjectURL(event.target.files[0])
    }));
  }

  // handle event when mouse over a certain part of image
  const handleMouseOver = event => {
    const id = event.target.id;

    // choose only a part where the mouse is over it
    setRootState(prevValue => {
      const initialArray = [false, false, false, false, false, false];
      const newArray = initialArray.map((div, index) => {
        if (index === parseInt(id)) {
          return !div;
        } else {
          return div;
        }
      });

      return {
        ...prevValue,
        divArray: newArray,
        divId: id
      };
    });
  }

  // destructuring state
  const { imgValue, divArray, divId } = rootState;

  return (
    <div className="App">
      {
        // when an image has been choosen, render the image and its default description
        imgValue === '' ?
          <UploadInput handleImgInput={handleImgInput} />
          :
          <div>
            <UploadedImg
              imgValue={imgValue}
              divArray={divArray}
              mouseOver={handleMouseOver}
            />
            <Description divArray={divArray} divId={divId} />
          </div>
      }
    </div>
  );
}

export default App;
