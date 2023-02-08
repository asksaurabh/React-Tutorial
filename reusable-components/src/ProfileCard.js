/* eslint-disable no-unused-vars */
function ProfileCard({ title, twitterHandle, imageURL }) {
  const altText = `${title} logo`;

  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-1by1'>
          <img src={imageURL} alt={altText} />
        </figure>
      </div>

      <div className='card-content'>
        <div className='media-content'>
          <p className='title is-4'>{title}</p>
          <p className='subtitle is-6'>{twitterHandle}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
