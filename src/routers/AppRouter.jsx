import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../models/login'

export default function AppRouter() {
    return( 
   
       <Router>
      
              <Route exact path="/login" component={Login}/>
           
       </Router>
    )
}