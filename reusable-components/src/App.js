/* eslint-disable no-unused-vars */
import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-3'>
              <ProfileCard
                title='Alexa'
                twitterHandle='@alexa99'
                imageURL={AlexaImage}
              />
            </div>
            <div className='column is-3'>
              <ProfileCard
                title='Cortana'
                twitterHandle='@cortana32'
                imageURL={CortanaImage}
              />
            </div>
            <div className='column is-3'>
              <ProfileCard
                title='Siri'
                twitterHandle='@siri01'
                imageURL={SiriImage}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
