import TagItem from "../../components/tags/tag-item";
const Card = (props) => {
  const {
    image,
    name,
    level,
    title,
    content,
    tags,
    reactiontTotal,
    commentTotal,
    timeReader,
  } = props.post;

  return (
    <article className="list__post-item">
      <div className="post-item__top">
        <div className="author__avatar">
          <img src={image} width="90px" height="90px"/>
        </div>
        <div className="author__info">
          <h3>{name}</h3>
          <span className="info-level">{level}</span>
        </div>
      </div>
      <div className="post-item__body">
        <h2 className="post-item__title">{title}</h2>
        <div className="post-item__content">
          {content}
        </div>
        <div className="post-item__tags">
          {tags.map((tag, index) => {
            return <TagItem tagName={tag} key={index} />;
          })}
        </div>
        <div className="post-item__bottom">
          <div className="bottom__detail">
            <div className="bottom-reaction">
              <a href="#">
                <svg
                  className="crayons-icon"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                </svg>
                <span>{reactiontTotal} reaction</span>
              </a>
            </div>
            <div className="bottom-comment">
              <a href="#">
                <svg
                  className="crayons-icon"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                </svg>
                <span>{commentTotal} Comment</span>
              </a>
            </div>
          </div>
          <div className="bottom__save">
            <small className="time-read">{timeReader} min read</small>
            <button className="btn-save">Save</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
