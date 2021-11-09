
import {Button, Textarea, Input } from './components/Form'
import Card from './components/Card/Card';
import Menu from './components/Menu/Menu';
import Employee from './components/Employee/Employee';



function App() {
  return (
    <div>
      <div>
        <Button bgColor="alizarin" color="carrot">Co tam</Button>
      </div>
      <div>
      <Input bgColor="clouds" color="carrot" borderSize={3} borderRadius={10} borderColor="midnightBlue"/>
      </div>
      <div>
        <Textarea bgColor="clouds" color="carrot" borderSize={3} borderRadius={10} borderColor="peterRiver"/>
      </div>
      <p>Zadanie z Card</p>

      <Card/>

      <p>Zadanie z Menu</p><br/>

      <Menu/>

      <p>Zadanie z Employees</p><br/>

      <Employee/>
    </div>
  );
}

export default App;
