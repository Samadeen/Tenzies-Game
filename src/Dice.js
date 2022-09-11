import './App.css';

const Dice = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? '#59e391' : '#fff',
  };
  return (
    <div className='die_face' style={styles} onClick={props.holdDice}>
      <h2 className='die_num'>{props.value}</h2>
    </div>
  );
};

export default Dice;
