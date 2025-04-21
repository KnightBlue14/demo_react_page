import { useState } from 'react';
// import ListGroup from './components/ListGroup'
import Alert from './components/Alert';
import Button from './components/Button'


function App () {
  const [alertVisible, setAlertVisibility] = useState(true);

  const [count, setCount] = useState(0);
      const increment = () => {
        setCount(count + 1);
      };
      const decrement = () => {
        setCount(count - 1);
      };

    function click () {
      console.log('You clicked the button');
      increment();
    }

  return (
      <div className="center">
      <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>You just refreshed the page, please click the cross to close this alert</Alert>}
      </div>
      <div>
      <Button onClick ={() => click()}>Press this button</Button>
      </div>
      <div>
      <span>You have clicked the button {count} times</span>
      </div>
      </div>
  )
}

// function App (){
//   return (
//       <div><Alert>Hello <span>World</span></Alert></div>
//   )
// }

// function App() {
//   let items = [
//           'New York',
//           'San Francisco',
//           'Istanbul',
//           'Florence',
//           'London'
//       ];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   }
//   return <div><ListGroup items = {items} heading = 'Cities' onSelectItem={handleSelectItem}/></div>
// }

export default App;