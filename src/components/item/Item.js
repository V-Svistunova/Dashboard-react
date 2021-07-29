import Icons from '../icons/Icons';
import s from './Item.module.css';



function Item(props) {
  return (
    <div style={props.style} className={s.item}>
      <div className={s.icon}> 
      <Icons name={props.name} color={props.color} sizeW={props.sizeW} sizeH={props.sizeH} classname={props.className}  />  
      </div> 
      <h2 className={s.title}> {props.title} </h2>
    </div>
  );
}

export default Item;