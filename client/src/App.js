import './App.css';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

function App() {
  return (
      <div>
        proyecto grupal
        <Button variant="contained" color="secondary" startIcon={<SaveIcon />}/>
      </div>
  );
}

export default App;
