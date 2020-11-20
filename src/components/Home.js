import React, { Component } from "react";
import AppCarousel from "./AppCarousel";
import Carousel from "./Carousel";
import CategoryList from "./CategoryList";
import Section from "./Section";
import Product from "./ProductConnector";

class Home extends Component {
  componentDidMount() {
    this.props.loadCategories();
  }

  getRows(categories = []) {
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

  getFilteredProducts(categories = [], filter) {
    let filteredProducts = [];
    for (let i = 0; i < categories.length; i++) {
      let subArr = categories[i].products.filter(
        (prod) => prod[filter]
      );
      filteredProducts = [...filteredProducts, ...subArr];
    }
    return filteredProducts;
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
        <Section title="Best sellers">
          <Carousel>
            {this.getFilteredProducts(categories, "prodBestsellers").map((product, i) => (
              <Product product={product} key={i} catID={product.catID} />
            ))}
          </Carousel>
        </Section>
        <Section title="Explore by category">
          {rows.map((row, i) => (
            <div className="row" key={i}>
              {<CategoryList categories={row} />}
            </div>
          ))}
        </Section>
        <Section title="Deal of the Day">
          <Carousel>
            {this.getFilteredProducts(categories, "prodDeals").map((product, i) => (
              <Product product={product} key={i} catID={product.catID} />
            ))}
          </Carousel>
        </Section>
      </main>
    );
  }
}

export default Home;
