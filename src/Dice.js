import './App.css';

const Dice = (props) => {
  return (
    <div className='die_face'>
      <h2 className='die_num'>{props.value}</h2>
    </div>
  );
};

export default Dice;
