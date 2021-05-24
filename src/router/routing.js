import {Link,Route} from "react-router-dom";

import Emps from "../components/Emps.js";
import CreateAccount from "../components/CreateAccount";
import ShowAccounts from "../components/ShowAccounts";


export const routing = (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
 <div className="container-fluid">
   
   <div className="collapse navbar-collapse" id="navbarNav">
     <ul className="navbar-nav">
       <li className="nav-item">
         <Link className="nav-link active" aria-current="page" to="/emps">Emps</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/create">Create Account</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/show">Show Accounts</Link>
       </li>
       
     </ul>
   </div>
 </div>
</nav>
  
   <Route path="/emps" component={Emps} />
   <Route path="/create" component={CreateAccount} />
   <Route path="/show" component={ShowAccounts} />
   </>
);


   