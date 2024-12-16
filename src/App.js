import "./App.css";
import FifthComponent from "./Components/FifthComponent";
import FirstComponent from "./Components/FirstComponent";
import FourthComponent from "./Components/FourthComponent";
import SecondComponent from "./Components/SecondComponent";
import SixthComponent from "./Components/SixthComponent";
import ThirdComponent from "./Components/ThirdComponent";

function App() {
  const fruits = ["Apple", "Orange", "Gouva", "Pear", "Banana", "Grapes"];
  const userDetails = [
    { username: "sunitha", age: 39, profission: "Frontend Developer" },
    { username: "sujatha", age: 32, profission: "Teacher" },
    { username: "Rajani", age: 37, profission: "Fullstack Developer" },
    { username: "Lakshmi", age: 42, profission: "Backend Developer" },
  ];
  const userData = {
    name: 'John Doe',
    location: 'Canada',
    age: 30
  };
  const employeesData = [
    {
      name: 'Saka manje',
      address: '14, cassava-garri-ewa street',
      attributes: {
        height: '6ft',
        hairColor: 'Brown',
        eye: 'Black',
      },
      gender: 'Male',
    },
    {
      name: 'Adrian Toromagbe',
      address: '14, kogbagidi street',
      attributes: {
        height: '5ft',
        hairColor: 'Black',
        eye: 'Red',
      },
      gender: 'Male',
    },
  ]
  const employeeDetails = [
    { username: "Sankar", age: 45, profission: "UI and UX designer", address:"Miyapur", gender: 'Male' },
    { username: "Madhulika", age: 22, profission: "Teacher", address:"Uppal", gender: 'Female' },
    { username: "Jayadeep", age: 17, profission: "Fullstack Developer", address:"Koti", gender: 'Male' },
    { username: "Lakshman", age: 32, profission: "Backend Developer", address:"Malakpet", gender: 'Male' },
  ];
  return (
    <>
      <h1>Destructuring Props in React</h1>
      <div className="row">
        <div className="col-md-1">
        {fruits.map((fruit, index) => (
          <FirstComponent key={index} fruit={fruit} />
        ))}
        </div>
        <div className="col-md-3">
        {userDetails.map((user,index)=>(
          <SecondComponent key={index} {...user} />
        ))}
        </div>
        <div className="col-md-2">
        <ThirdComponent user={userData}/>
        </div>
        <div className="col-md-2">
        <FourthComponent user={userData}/>
        </div>
       
        {employeesData.map((employee, index) => (
        <div className="col-md-2" key={index}>
          <FifthComponent {...employee} />       
        </div>     
        ))}

        {employeeDetails.map((user,index)=>(
          <SixthComponent {...user}/>
        ))}
        </div>
    </>
  );
}

export default App;
