import s from './Title.module.css';

function Title(props) {
  return (
    <h1 className={s.title}>{props.title}</h1>
  );
}

export default Title;