import s from './Title.module.css';
import Icons from '../icons/Icons';

function Title(props) {
  return (
    <div className={s.wrapper}>      
    <h1 className={s.title}>{props.title}</h1>
    <div className={s.block}>
    <a className={s.link} href={props.link}>{props.linkName}</a>
    <Icons name={props.name} color={props.color} sizeW={props.sizeW} sizeH={props.sizeH}/>
    </div>
    </div>
  );
}

export default Title;