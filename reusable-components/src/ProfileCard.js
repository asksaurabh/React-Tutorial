/* eslint-disable no-unused-vars */
function ProfileCard(props) {
  // console.log(props);
  const { title, twitterHandle } = props;

  return (
    <div>
      <div>Title is {title}</div>
      <div>Handle is {twitterHandle}</div>
    </div>
  );
}

export default ProfileCard;
