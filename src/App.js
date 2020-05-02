import React from 'react';
//import './App.css';
import Movies from './component/movies';
import Navbar from './component/navbar';
import Customer from './component/customer';
import Rental from './component/rental';
import LoginForm from './component/loginform';
import NotFound from './component/notfound';
import MovieDetails from './component/movieform';
import { Route, Switch, Redirect} from 'react-router-dom';

function App(){
    return(
        <React.Fragment>
        <div>
            <Navbar/>
            <main className='container'>
                <div>
                    <Switch>
                        <Route path='/movies/:id' component={MovieDetails}/>
                        <Route path='/movies' render={()=><Movies sortBy=''/>}/>
                        {/* <Route path='/movies' component={Movies}/> */}
                        <Route path='/customers' component={Customer}/>
                        <Route path='/rental' component={Rental}/>
                        <Route path='/loginform' component={LoginForm}/>
                        <Route path='/' component= {Movies}/>
                        <Route path='not-found' component={NotFound}/>
                        <Redirect to='/not-found'/>
                     </Switch>
                 </div> 
                 </main>   
         </div>
         </React.Fragment>
    );
}

export default App;