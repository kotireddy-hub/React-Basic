import './App.css';
import HelloWorld from './HelloWorld';
import UserDeatils from './pages/UserDeatils';

const listOfData = ["HTML","React","CSS","Javascript"];

const UserData = [
  {
    "name":"Seshi",
    "age":30
  },
  {
    "name":"Anil",
    "age":26
  },
  {
    "name":"Nari",
    "age":26
  }
]


function App() {
  return (
    <div className="App">
      <HelloWorld data={listOfData} />
      <UserDeatils users={UserData}/>
    </div>
  );
}

export default App;
