import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country.code}&category=${this.props.category}&apiKey=fbea7282a1f74f629ce21a029a370625&pageSize=6`
    );
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handleNext = async () => {
    if (!(Math.ceil(this.state.totalResults / 6) < this.state.page + 1)) {
      this.setState({ loading: true });
      const data = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${
          this.props.country.code
        }&category=${
          this.props.category
        }&apiKey=fbea7282a1f74f629ce21a029a370625&page=${
          this.state.page + 1
        }&pageSize=6`
      );
      const parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };

  handlePrev = async () => {
    this.setState({ loading: true });
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${
        this.props.country.code
      }&category=${
        this.props.category
      }&apiKey=fbea7282a1f74f629ce21a029a370625&page=${
        this.state.page - 1
      }&pageSize=6`
    );
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  capitalize = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  };

  render() {
    return (
      <div>
        <h1 className="text-center mt-5">
          DailyBuzz - {this.capitalize(this.props.category)} HeadLines
        </h1>
        <p className="text-dark fs-5 text-end" id="newspara">
          {this.capitalize(this.props.country.name)} - Page {this.state.page} /{" "}
          {Math.ceil(this.state.totalResults / 6)}
        </p>

        <div className="container d-flex flex-wrap justify-content-center">
          <hr className="w-100 mb-3" />
          {this.state.loading && <Loader />}
          {!this.state.loading &&
            this.state.articles.map((ele) => {
              return (
                <NewsItem
                  key={ele.url}
                  title={ele.title}
                  description={ele.description}
                  urlToImage={ele.urlToImage}
                  url={ele.url}
                  date={ele.publishedAt}
                  source={ele.source.name}
                />
              );
            })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-sm btn-dark"
            onClick={this.handlePrev}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              Math.ceil(this.state.totalResults / 6) < this.state.page + 1
            }
            className="btn btn-sm btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
