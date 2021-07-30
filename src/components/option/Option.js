import s from './Option.module.css';

function Option(props) {
  return (
    <div className={s.option}>
      <img className={s.icon} src={props.icon} alt="icon" />
      <select className={s.list} size="1" multiple>
        <option className={s.title} >{props.title}</option>
        <option className={s.title} > Кек </option>
        <option className={s.title} > лол </option>
      </select>
    </div>
  );
}

export default Option;