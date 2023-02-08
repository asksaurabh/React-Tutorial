/* eslint-disable no-unused-vars */
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard
        title='Alexa'
        twitterHandle='@alexa99'
        imageURL={AlexaImage}
      />
      <ProfileCard
        title='Cortana'
        twitterHandle='@cortana32'
        imageURL={CortanaImage}
      />
      <ProfileCard title='Siri' twitterHandle='@siri01' imageURL={SiriImage} />
    </div>
  );
}

export default App;
