import React, { Component } from "react";
import AppCarousel from "./AppCarousel";
import CarouselContainer from "./Carousel";
import CategoryList from "./CategoryList";
import Section from "./Section";

class Home extends Component {
  componentDidMount() {
    this.props.loadCategories();
    let user = localStorage.getItem("mamidikayaluUser");
    console.log(user);
    if (user) {
      this.props.setUser(JSON.parse(user));
    }
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
      let subArr = categories[i].products.filter((prod) => prod[filter]);
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
          <CarouselContainer
            items={this.getFilteredProducts(categories, "prodBestsellers")}
          />
        </Section>
        <Section title="Explore by category">
          {rows.map((row, i) => (
            <div className="row" key={i}>
              {<CategoryList categories={row} />}
            </div>
          ))}
        </Section>
        <Section title="Deal of the Day">
          <CarouselContainer
            items={this.getFilteredProducts(categories, "prodDeals")}
          />
        </Section>
      </main>
    );
  }
}

export default Home;
