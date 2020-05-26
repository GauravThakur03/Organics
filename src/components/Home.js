import React from 'react';
import Categories from './Categories';
import ProductList from './ProductList';
const Home = () => {
    return (  
        <main className="container-fluid" role="main">
            <div className="row">
                <div className="col-md-3 px-0 border-right d-flex flex-column">
                    <Categories/>
                </div>
                <div className="col-md-9 py-2 pl-3">
                    <ProductList/>
                </div>
            </div>
        </main>
    );
}
 
export default Home;