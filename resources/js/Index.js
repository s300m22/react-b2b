import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import SideBar from './layouts/SideBar'
import Home from './components/Home'
import AddUser from './components/AddUser'
import AllUser from './components/AllUser'
import EditUser from './components/EditUser'

function Index() {
    return (

      <div className="main-wrapper">
		    <Header/>
        <BrowserRouter>
          <SideBar/>

            <div className="page-wrapper">
              <div className="content container-fluid">
          
                  <Switch>
                      
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/addnew' component={ AddUser } />
                    <Route exact path='/alluser' component={ AllUser } />
                    {/* <Route exact path='edit/:id' component={ () => <EditUser id={`Props through component`} /> } />  */}
                    <Route exact path='edit/:id' component={ props => <EditUser id={props.match.params.id}/> } /> 

                    
                        
                  </Switch>
            
              </div>
            </div>
          <Footer/>
        </BrowserRouter>
      </div>

    )
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
