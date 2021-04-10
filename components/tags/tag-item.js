const TagItem = (props) => {
    const {tagName} = props;
  return <a className="post-tag">#{tagName}</a>;
};
export default TagItem;
