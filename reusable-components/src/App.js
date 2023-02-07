import ProfileCard from './ProfileCard';

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard title='Alexa' twitterHandle='@alexa99' />
      <ProfileCard title='Cortana' twitterHandle='@cortana32' />
      <ProfileCard title='Siri' twitterHandle='@siri01' />
    </div>
  );
}

export default App;
