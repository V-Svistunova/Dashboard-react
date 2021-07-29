import s from './Channel.module.css';

function Channel(props) {
  return (
    <div className={s.channel}>
      <div className={s.wrapper}>        
        <img className={s.logo} src={props.logo} alt="logo" />
        <h2 className={s.title}> {props.title} </h2>
      </div>
    </div>
  );
}

export default Channel;