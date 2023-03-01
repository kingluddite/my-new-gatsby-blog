import { graphql, HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import {getImage} from 'gatsby-plugin-image';
import { PageLayout } from '../components/page-layout';

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const image = data.headerImage
    ? getImage(data.headerImage.childImageSharp)
    : null;

  return (
    <PageLayout image={image} title="My Gatsby Blog">
      <div className="container mx-auto px-4 lg:px-0">
        <span className="text-lg">This is my Gatsby Blog home page!</span>
      </div>
    </PageLayout>
  );
};

export default IndexPage;

// This query will be run during the GatsbyJS build process when creating our
// pages. The data will be passed to our page component as a `data` property.
export const pageQuery = graphql`
  query IndexPage {
    headerImage: file(relativePath: { eq: "soccer.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;