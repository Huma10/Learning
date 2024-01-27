import { LoginContext } from '../ContextProvider/context';

import { useContext } from 'react';
import Sidebar from './Sidebar';

const Dashboard = ({ logindata1 }) => {
  console.log('child : ', logindata1);
  const logindata = useContext(LoginContext);
  return (
    
    <div className="row">
  

            {/* Main Content */}
            <div className="col">
                <div className="centered-container">
                    <h1>Welcome {logindata1.email}</h1>
                    {/* Other content goes here */}
                </div>
            </div>
        </div>
    
   
  );
}

export default Dashboard;