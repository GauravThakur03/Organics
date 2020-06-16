import React, { Component } from "react";
import AppCarousel from "./AppCarousel";
import TabPanel from "./TabPanel";

class Home extends Component {
  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    return (
      <main className="container-fluid" role="main">
        <div className="row">
          <div className="col-12 px-0">
            <AppCarousel />
          </div>
        </div>
        <div className="row">
          <div className="col-12 px-0">
            {this.props.categories.length && <TabPanel categories={this.props.categories}/>}
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
