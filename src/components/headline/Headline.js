import s from './Headline.module.css';
import likeIcon from './../../assets/images/like.svg';
import dislikeIcon from './../../assets/images/dislike.svg';
import ArticleTitle from './../articleTitle/ArticleTitle';
import Label from './../label/Label';
import Time from './../time/Time';


function Headline(props) {
  return (
    <div className={s.headline}>
      <img className={s.thumbnail} src={props.thumbnail} alt="thumbnail" />
      <div className={s.info}>
        <ArticleTitle title={props.title} />
        <div className={s.rating}>
          <div className={s.like}>
            <img className={s.likeIcon} src={likeIcon} alt="likeIcon" />
            <span className={s.text}>{props.likes}</span>
          </div>
          <div className={s.dislike}>
            <img className={dislikeIcon} src={dislikeIcon} alt="islikeIcon" />
            <span className={s.text}>{props.dislikes}</span>
          </div>
        </div>
        <div className={s.wrapper}>
          <Label labelText={props.labelText} />
          <Time time={props.time} />
        </div>
      </div>
    </div>
  );
}

export default Headline;