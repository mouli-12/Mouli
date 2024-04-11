import { FormEvent } from 'react';
import Form from './Form';
import Header from './Header';
import Side from './Side';

function Mainpage(): JSX.Element {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <Side />
        <Form onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default Mainpage;