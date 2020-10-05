import React from 'react';
import './Interface.css';
import Button from '@material-ui/core/Button';
import { useSpring, animated } from 'react-spring';
import { changeAction, changeClick } from '../redux/Actions';
import { useSelector, useDispatch } from 'react-redux';

function Interface(props) {
  const dispatch = useDispatch();
  const action = useSelector(state => state.action);
  const click = useSelector(state => state.click);

  const fade = useSpring({
    opacity: click ? 0 : 1,
  });

  const handleClick = (t) => {
    dispatch(changeClick(t));
    dispatch(changeAction(t));
    console.log(action);
    console.log(click);
  }

  return (
    <animated.div
      className="interface-container"
      style={Object.assign(fade, {zIndex: click ? -1 : 0})}
    >
      <div className="buttons-container">
        <div className="button-container">
          <Button
            className="button"
            style={{
              fontSize: '20px',
            }}
            onClick={() => handleClick(1)}
          >
            New Rhythm
          </Button>
        </div>
        <div className="button-container">
          <Button
            className="button"
            style={{
              fontSize: '20px',
            }}
            onClick={() => handleClick(2)}
          >
            Use Rhythm
          </Button>
        </div>
      </div>
    </animated.div>
  );
}

export default Interface;
