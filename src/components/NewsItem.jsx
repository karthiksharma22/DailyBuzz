import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    return (
      <div>
        <div className="card m-3" style={{ width: "400px" }}>
          <img
            src={
              this.props.urlToImage
                ? this.props.urlToImage
                : "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"
            }
            className="card-img-top"
            alt="..."
            style={{ objectFit: "cover", height: "250px" }}
          />
          <div className="card-body">
            <span
              className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
              style={{ zIndex: "1", left: "90%" }}
            >
              {this.props.source}
            </span>
            <h5 className="card-title">
              {this.props.title &&
                (this.props.title.length < 48
                  ? this.props.title
                  : this.props.title.slice(0, 100) + "...")}
            </h5>
            <p className="card-text">
              {this.props.description &&
                (this.props.description.length < 100
                  ? this.props.description
                  : this.props.description.slice(0, 100) + "...")}
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date(this.props.date).toUTCString()}{" "}
              </small>
            </p>
            <a
              href={this.props.url}
              target="_blank"
              className="btn btn-secondary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
