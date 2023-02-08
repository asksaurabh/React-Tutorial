/* eslint-disable no-unused-vars */
import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>Personal Digital Assistants</p>
        </div>
      </section>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-3'>
              <ProfileCard
                title='Alexa'
                twitterHandle='@alexa99'
                imageURL={AlexaImage}
                description='Alexa was created by Amazon and is fully integrated in Amazon products.'
              />
            </div>
            <div className='column is-3'>
              <ProfileCard
                title='Cortana'
                twitterHandle='@cortana32'
                imageURL={CortanaImage}
                description="Cortana was created by Microsoft and it does't help you in any way."
              />
            </div>
            <div className='column is-3'>
              <ProfileCard
                title='Siri'
                twitterHandle='@siri01'
                imageURL={SiriImage}
                description='Siri was created by Apple and it helps you finding apps in Macbook Pro.'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
