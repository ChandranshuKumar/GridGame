import { useState } from 'react';
import './Grid.css';

function Grid({ size: GRID }) {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = (direction = '') => {
    switch (direction) {
      case 'Up':
        setPosition({
          ...position,
          x: (position.x - 1) < 0 ? position.x - 1 + GRID : position.x - 1
        });
        break;
      case 'Down':
        setPosition({
          ...position,
          x: (position.x + 1) % GRID
        });
        break
      case 'Right':
        setPosition({
          ...position,
          y: (position.y + 1) % GRID
        });
        break;
      case 'Left':
        setPosition({
          ...position,
          y: (position.y - 1) < 0 ? position.y - 1 + GRID : position.y - 1
        });
        break;
      default:
    }
  }

  return (
    <>
      <div className='content'>
        <div className='grid-wrapper'>
          {[...Array(GRID).keys()].map((val, x) => {
            return (
              <div className='row' key={val + x}>
                {[...Array(GRID).keys()].map((val2, y) => {
                  const seleted = x === position.x && y === position.y;
                  return (
                    <div className={`cell ${seleted ? 'selected' : ''}`} key={val2 + y}>
                      {x}, {y}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
        <div className='btn-wrapper'>
          {['Up', 'Down', 'Left', 'Right'].map((val, i) => {
            return (
              <button key={val + i} onClick={() => handleClick(val)}>{val}</button>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default Grid;
