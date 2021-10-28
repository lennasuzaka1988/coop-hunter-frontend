import './App.css';
import Button from './Button';

function App() {
  return (
    <div>
      <Button
          buttonStyle="primary"
          buttonText='Primary Button'
          buttonTextColor="white"
          buttonType='submit'
      />
      <br/>
      <Button
          buttonStyle="outline"
          buttonText='Outline Button'
          buttonTextColor="white"
          buttonType='button'
      />
      <br/>
      <Button
          buttonStyle="unstyled"
          buttonText='Unstyled Button'
          buttonTextColor="white"
          buttonType='button'
          onButtonClick={() => alert('hi')}
      />
    </div>
  );
}

export default App;
