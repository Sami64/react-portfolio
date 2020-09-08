import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      // React Projects
      var reactProjects = this.props.data.reactProjects.map(function (
        reactProjects
      ) {
        var projectImage = "images/portfolio/" + reactProjects.image;
        return (
          <div key={reactProjects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={reactProjects.url} title={reactProjects.title}>
                <img alt={reactProjects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{reactProjects.title}</h5>
                    <p>{reactProjects.category}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
            </div>
          </div>
        );
      });

      // Unity Projects
      var unityProjects = this.props.data.unityProjects.map(function (
        unityProjects
      ) {
        var projectImage = "images/portfolio/" + unityProjects.image;
        return (
          <div key={unityProjects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={unityProjects.url} title={unityProjects.title}>
                <img alt={unityProjects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{unityProjects.title}</h5>
                    <p>{unityProjects.category}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
            </div>
          </div>
        );
      });

      // Flutter Projects
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <h1>Unity Cortex</h1>
            <div>{unityProjects}</div>
            <h1>ReactJS</h1>
            <div>{reactProjects}</div>
            <h1>Flutter</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
