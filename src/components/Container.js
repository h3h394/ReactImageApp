/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Container = ({ children }) => (
  <div css={styles} className="container">
    {children}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 1130px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 839px) {
    width: 90%;
    max-width: 430px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 840px) and (max-width: 1180px) {
    width: 90%;
    max-width: 815px;
  }
`;

export default Container;
