import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import SocialBar from '../components/SocialBar'

import './index.css'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div className="landing">
    <div className="social-bar-fixed"><SocialBar/></div>
    <div className="hero">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="image-0 d-block w-100" style={{ backgroundImage: 'url(https://i.picsum.photos/id/1076/1920/1080.jpg)' }}></div>
                <div className="carousel-caption d-md-block carousel-caption-main animated fadeInUp">
                  <img src="https://res.cloudinary.com/dog2bkgwo/image/upload/v1588403925/Logo/strategica-logo_sqscev.jpg" alt="" className="logo-hero" />
                  <h1 className="text-center"><u>WELCOME TO STRATEGICA</u></h1>
                  <h4>Finance | Economics &amp; Consulting | Research | Analytics</h4>
                  <h5 className="mt-2">JORHAT ENGINEERING COLLEGE</h5>
                </div>
              </div>
              <div className="carousel-item">
                <div className="image-0 d-block w-100" style={{ backgroundImage: 'url(https://i.picsum.photos/id/600/1920/1080.jpg)' }}></div>
                <div className="carousel-caption d-md-block carousel-caption-margin animated fadeInUp">
                  <h2><u>INTERESTING FACTS</u></h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at eaque obcaecati autem, eveniet amet maiores necessitatibus rem cum incidunt.</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="image-0 d-block w-100" style={{ backgroundImage: 'url(https://i.picsum.photos/id/1058/1920/1080.jpg)' }}></div>
                <div className="carousel-caption d-md-block carousel-caption-margin animated fadeInUp">
                  <h2><u>ANYTHING</u></h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at eaque obcaecati autem, eveniet amet maiores necessitatibus rem cum incidunt.</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn btn-danger" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
