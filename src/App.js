
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
   <>
<Navbar title ="Fixing" aboutText="Aboutrn"     />
<div className=" container my-3">

<TextForm heading="Enter the text here " />

</div>

   </>
  );
}

export default App;
