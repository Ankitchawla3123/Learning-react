import React, { useState } from 'react';
// import PropTypes from 'prop-types';

function App() {
  const [color, setColor] = useState("pink");
  const [borderrcolor, setBorderColor]=useState("black")
  // let bordercolor2='black'
  const setColor2= (x)=>{
    setColor(x);
    setBorderColor(x === 'Black' ? 'white' : 'black');

  }
  return (
    <div className="w-full duration-200 h-screen"
      style={{
        backgroundColor: color, // Use the color state variable here
      }}
    >
      <div className="flex flex-wrap justify-center fixed bottom-11 px-3 gap-16 p-10 inset-x-0 mx-32 border-2 border-black bg-new-100"
      style={{
        borderColor:borderrcolor
      }}
      >
        <Buttons color="Pink" setColor={setColor2}
        />
        <Buttons color="Green" setColor={setColor2}/>
        <Buttons color="Blue" setColor={setColor2}/>
        <Buttons color="Red" setColor={setColor2}/>
        <Buttons color="Yellow" setColor={setColor2}/>
        <Buttons color="Black" setColor={setColor2}/>
        <Buttons color="White" setColor={setColor2}/>
        <Buttons color="Purple" setColor={setColor2}/>
      </div>
    </div>
  );
}

function Buttons(props){
  const textcolor=()=>{
    if (props.color=='Black') {
      return 'white';
    }
    else{
      return 'black'
    }
  }
  
  return(
    <button onClick={()=> props.setColor(props.color)}   className=' p-2 border-2 border-black text-xl hover:scale-110 duration-200'
    style={{
      backgroundColor:props.color,
      color:textcolor(),
      borderColor:textcolor(),
    }}
    >{props.color}</button>
  )
}

export default App;
