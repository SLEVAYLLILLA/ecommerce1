import {useState} from 'react';

export default function App() {

const  [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };

return (
    
      <div>
        <button onClick={handleClick}>Details</button>
        {isShown && (
      <div>
    <h2>részletek részletek</h2>
    </div>
  )}
  {isShown && <Box />}
  </div>
);
}

function Box() {
    return (
        <div>
            <h2>Box</h2>
        </div>
    );
}
