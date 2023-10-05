import './App.css';
import HelloWorld from './HelloWorld';
import ComponentLifeCycle from './pages/components/ComponentLifeCycleMethod';
import ConditionRendering from './pages/components/ConditionRendering';
import Counter from './pages/components/Counter';
import CounterFun from './pages/components/CounterFun';
import FunctionalCounter from './pages/components/FunCtionalTimeComponent';
import Greeting from './pages/components/Greeting';
import InitialCounter from './pages/components/InitialCounter';
import TimerComponentWithLifeCycle from './pages/components/TimerComponentWithLifeCycle';
import TimeStartStopReset from './pages/components/TimeStartStopReset';
import UserDeatils from './pages/UserDeatils';



const listOfData = ["HTML", "React", "CSS", "Javascript"];

const UserData = [
  {
    "name": "Seshi",
    "age": 30
  },
  {
    "name": "Anil",
    "age": 26
  },
  {
    "name": "Nari",
    "age": 26
  },
  {
    "name": "Koti",
    "age": 30
  }
]


function App() {
  return (
    <div className="App">
      {/* <HelloWorld data={listOfData} />
      <UserDeatils users={UserData}/>
      <Counter />
      <CounterFun /> */}
      {/* <InitialCounter /> */}
      {/* <TimerComponentWithLifeCycle /> */}
      {/* <FunctionalCounter /> */}
      <TimeStartStopReset />
      <ConditionRendering logined={true} />
      <Greeting logined={true} />
    </div>
  );
}

export default App;
