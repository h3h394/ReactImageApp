/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Search from "./Search";
import Container from "./Container";
import Card from "./Card";

const Hero = ({ images, isLoading, setSearch }) => (
  <section css={styles} className="hero">
    <Search searchText={(inputVal) => setSearch(inputVal)} />
    <Container>
      {!isLoading && images.length === 0 && <h1>No images found</h1>}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        images.map((image) => <Card key={image.id} image={image} />)
      )}
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  padding: 40px 0;
  background: #364f6b;
  .container {
    h1 {
      font-size: 40px;
      line-height: 1;
      color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export default Hero;
