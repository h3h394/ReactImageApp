/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Search from "./Search";
import Container from "./Container";
import Card from "./Card";

const Hero = ({ images, isLoading, setSearch, newImages }) => (
  <section css={styles} className="hero">
    <Search searchText={(inputVal) => setSearch(inputVal)} />
    <Container>
      {!isLoading && images.length === 0 && <h1>No images found</h1>}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        images.map((image) => <Card key={image.id} image={image} />)
      )}
      <div className="btnContainer">
        <button onClick={() => newImages("previous")}>Previous</button>
        <button onClick={() => newImages("next")}>Next</button>
      </div>
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
    .btnContainer {
      width: 100%;
      padding: 10px 0 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        width: 120px;
        text-align: center;
        border: none;
        outline: none;
        background: #fc5185;
        color: #fff;
        border-radius: 4px;
        padding: 10px 30px;
        margin: 0 10px;
        cursor: pointer;
        transition: background 400ms ease-in-out;
        &:hover {
          background: #ce426d;
        }
      }
    }
  }
`;

export default Hero;
