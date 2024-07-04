// import { useState } from "react";

// const App = () => {
//   const [a, seta] = useState("bhai");
//   const changeValue = () => {
//     seta("kunal");
//   };
//   console.log(a);
//   const name = "Kunal";

//   return (
//     <div>
//       <div>
//         <h1>Hello {a}</h1>
//         <button onClick={changeValue}>Click</button>
//       </div>
//     </div>
//   );
// };

///////////////////////////////////////////////////

// export default App;

// import { useState } from "react";

// const App = () => {
//   const [a, seta] = useState("bhai");
//   const changeValue = (x) => {
//     seta(x);
//   };
//   // const wrapperFunction = () => changeValue("Kunal");
//   console.log(a);
//   const name = "Kunal";

//   return (
//     <div>
//       <div>
//         <h1>Hello {a}</h1>
//         <button onClick={() => changeValue("Kunal")}>Click</button>
//       </div>
//     </div>
//   );
// };

// export default App;

//////////////////

// import React from "react";

// function App() {
//   const eventHandler = (e) => {
//     e.preventDefault();
//     console.log(e);
//   };
//   return (
//     <div>
//       <form onSubmit={eventHandler}>
//         <input type="text" />
//         <button>submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// useState -> us a hook that allows you to have state variables in functional components
// mouse ko sune listner
// jo sune hue ko follow kre eventHandler

////////////////////////////////////////////
// import React from "react";

// function App() {
//   const eventHandler = (e) => {
//     e.preventDefault();
//     console.log("Hulala")
//     console.log(e);
//   };
//   return (
//     <div>

//       <button onClick={eventHandler}>click</button>
//     </div>
//   );
// }

// export default App;

///////////////////////////////////

import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [names, setNames] = useState([]);
  const eventHandler = (e) => {
    e.preventDefault();
    console.log(username);
    // setUsername("");
    const copyNames = [...names];
    copyNames.push(username);
    setNames(copyNames);
    setUsername("");
  };
  return (
    <div>
      <form action="" onSubmit={eventHandler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="name"
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
