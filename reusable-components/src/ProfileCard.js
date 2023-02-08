/* eslint-disable no-unused-vars */
function ProfileCard({ title, twitterHandle, imageURL }) {
  const altText = `${title} logo`;

  return (
    <div>
      <img src={imageURL} alt={altText} />
      <div>Title is {title}</div>
      <div>Handle is {twitterHandle}</div>
    </div>
  );
}

export default ProfileCard;
