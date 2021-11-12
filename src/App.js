import './App.css';
import Button from './Button';
import VideoPlayer from './VideoPlayer';

function App() {
    return (
        <div>
            <Button
                buttonStyle='primary'
                buttonText='Primary Button'
                buttonTextColor='white'
                buttonType='submit'
            />
            <br/>
            <Button
                buttonStyle='outline'
                buttonText='Outline Button'
                buttonTextColor='white'
                buttonType='button'
            />
            <br/>
            <Button
                buttonStyle='unstyled'
                buttonText='Unstyled Button'
                buttonTextColor='white'
                buttonType='button'
                onButtonClick={() => alert('hi')}
            />
            <VideoPlayer
                videoSrc='https://cdn.cloudflare.steamstatic.com/steam/apps/256844882/movie480_vp9.webm?t=1627683959'
            />
        </div>
    );
}

export default App;
