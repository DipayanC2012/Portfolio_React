import React from 'react'
import "./portfolio.css"


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src='https://i.postimg.cc/0yhdFY8V/E-commerce.png' alt="E-commerce website" />
            <h3>E-Commerce Website</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/DipayanC2012/E-Commerce"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://e-commerce-aish.netlify.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src='https://i.postimg.cc/MGkVdzD4/netflix.png' alt="Netflix clone website" />
            <h3>Netflix Website Clone</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/DipayanC2012/Netflix-Clone"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
              href="https://netflix-dip.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src='https://i.postimg.cc/fTGyKvp9/wysa.png' alt="Wysa" />
            <h3>Wysa Website</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/DipayanC2012/Wysa-Proj"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
              href="https://wysaproj.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src='https://i.postimg.cc/43NF7hbh/image.png' alt="Recipe Finder" />
            <h3>Recipe Finder</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/DipayanC2012/Recipe-FInder"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://recipefinder2012.netlify.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src='https://i.postimg.cc/j5b6dRnN/expense-tracker.png' alt="Expense Tracker" />
            <h3>Expense Tracker Website</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/DipayanC2012/expense-tracker-website-ReactJS"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://expensetrackerdc.netlify.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src='https://i.postimg.cc/vHBrmqTP/Blog-Website.png' alt="Real State" />
            <h3>Blog Website</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/DipayanC2012/Blog_Websites"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              {/* <a
                href="https://recipe-finder-appliaction.netlify.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a> */}
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src='https://i.postimg.cc/Hs6RRh8d/Newsletter.png' alt="Real State" />
            <h3>Newsletter Sign-Up page</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/DipayanC2012/Newsletter-signup"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              {/* <a
                href="https://recipe-finder-appliaction.netlify.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a> */}
            </div>
          </div>
        </article>
        
      </div>
    </section>
  );
}

export default Portfolio