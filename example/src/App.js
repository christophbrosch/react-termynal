import {Termynal, Plain, Input} from 'react-termynal';

function App() {
  return (
        <Termynal id="container">
          <Plain>Do you want to install the package? (Y,n)</Plain>
          <Input>Y</Input>
          <Plain>Installing:</Plain>
        </Termynal>
  );
}

export default App;
