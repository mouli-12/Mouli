// import React, { FormEvent } from 'react';
// import Form from './Form';

// function App(): JSX.Element {
//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // Add your form submission logic here
//   };

//   return (
//     <div>
//       <Form onSubmit={handleSubmit} />
//     </div>
//   );
// }

// export default App;

// App.tsx
import React from "react";
import RoutesContainer from "./Routes";

const App: React.FC = () => {
  return (
    <div>
      <RoutesContainer />
    </div>
  );
}

export default App;

