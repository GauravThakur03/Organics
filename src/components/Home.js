import React , { Component } from 'react';
import Categories from './Categories';
import ProductList from './ProductList';

class Home extends Component {
    componentDidMount() {
        this.props.loadCategories();
    }

    render() {
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
}
 
export default Home;