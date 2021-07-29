import s from './News.module.css';

import ArticleTitle from './../articleTitle/ArticleTitle';
import Label from './../label/Label';
import Time from './../time/Time';

function News(props) {
  return (
    <div className={s.news}>
      <img className={s.image} src={props.image} alt="news image" />
      <div className={s.wrapper}>        
        <ArticleTitle title={props.title} />
        <div className={s.block}>
          <Label labelText={props.labelText} />
          <Time time={props.time} />
        </div>
      </div>
    </div>
  );
}

export default News;