import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable';
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
import AddProduct from './components/products/AddProduct'
import AllProducts from './components/products/AllProducts'
import EditProduct from './components/products/EditProducts'
import AddVat from './components/settings/vat/AddVat'
import AllVat from './components/settings/vat/AllVat'
import AddTaxClass from './components/settings/vat/AddTaxClass'
import AllTaxClass from './components/settings/vat/AllTaxClass'
import AddCustomer from './components/customers/AddCustomer'
import EditCustomer from './components/customers/EditCustomer'
import AllCustomers from './components/customers/AllCustomers'
import AddOptions from './components/products/options/Index'

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
                    <Route exact path='/edit/:id' component={ props => <EditUser id={props.match.params.id}/> } /> 
                    <Route exact path='/product/allproduct' component={ AllProducts } /> 
                    <Route exact path='/product/addnew' component={ AddProduct } /> 
                    <Route exact path='/product/edit/:id' component={ props => <EditProduct id={props.match.params.id}/> } /> 
                    <Route exact path='/vat/addnew' component={ AddVat } /> 
                    <Route exact path='/vat/allvat' component={ AllVat } /> 
                    <Route exact path='/vat/add-class-tax/:id/:title' component={ props => <AddTaxClass data={props.match.params}/> } /> 
                    <Route exact path='/vat/all-tax-class/:id/:title' component={ props => <AllTaxClass data={props.match.params}/> } /> 
                    <Route exact path='/customer/add-customer' component={ AddCustomer } /> 
                    <Route exact path='/customer/edit-customer/:id' component={ props =>  <EditCustomer data={props.match.params} /> } /> 
                    <Route exact path='/customer/all-customeres' component={AllCustomers} /> 
                    <Route exact path='/options/add-options' component={AddOptions} /> 
                    {/* <Route exact path='/customer/all-customer' component={ AllCustomer } />  */}

                    
                        
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
