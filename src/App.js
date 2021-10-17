import './App.css';
import Button from './Button';

function App() {
  return (
    <div>
      <Button buttonStyle="primary" buttonText='Primary Button' buttonType='submit'/>
      <br/>
      <Button buttonStyle="outline" buttonText='Outline Button' buttonType='button'/>
      <br/>
      <Button onButtonClick={() => alert('hi')} buttonStyle="unstyled" buttonText='Unstyled Button' buttonType='button'/>
    </div>
  );
}

export default App;
