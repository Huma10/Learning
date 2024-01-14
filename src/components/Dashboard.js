import { LoginContext } from '../ContextProvider/context';

import { useContext } from 'react';

const Dashboard = ({logindata1}) => { 
  console.log('child : ',logindata1);
  const logindata = useContext(LoginContext);
    return (
    <div>
      <h1>Dashboard {logindata1.email} </h1>
    </div>
  );
}

export default Dashboard;