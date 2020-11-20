import React, { Component } from "react";
import AppCarousel from "./AppCarousel";
import TabPanel from "./TabPanel";
import $ from "jquery";
import CategoryList from "./CategoryList";
import Section from "./Section";

class Home extends Component {
  componentDidMount() {
    this.props.loadCategories();
  }

  getRows(categories) {
    if (!categories.length) return [];
    let temparray,
      rows = [];
    const itemsPerRow = 4;
    for (let i = 0, j = categories.length; i < j; i += itemsPerRow) {
      temparray = categories.slice(i, i + itemsPerRow);
      rows.push(temparray);
    }

    return rows;
  }

  render() {
    const { categories } = this.props;
    const rows = this.getRows(categories);
    return (
      <main className="container-fluid" role="main">
        <div className="row">
          <div className="col-12 px-0">
            <AppCarousel />
          </div>
        </div>
        <Section title="Explore by category">
          {rows.map((row, i) => (
            <div className="row" key={i}>
              {<CategoryList categories={row} />}
            </div>
          ))}
        </Section>
      </main>
    );
  }
}

export default Home;
