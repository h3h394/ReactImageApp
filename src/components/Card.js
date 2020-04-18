/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Card = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div css={styles} className="card">
      <a href={image.largeImageURL} target="_blank" rel="noopener noreferrer">
        <img src={image.webformatURL} alt='photograph' className="cardImage" />
        <div className="cardInfo">
          <p className="user">Photo by {image.user}</p>
          <p>
            <i className="fas fa-eye"></i>
            <span>Views:</span>
            {image.views}
          </p>
          <p>
            <i className="fas fa-download"></i>
            <span>Downloads:</span>
            {image.downloads}
          </p>
          <p>
            <i className="fas fa-heart"></i>
            <span>Likes:</span>
            {image.likes}
          </p>
          <p>
            <i className="fas fa-comment"></i>
            <span>Comments:</span>
            {image.comments}
          </p>
          <div className="tags">
            {tags.map((tag, index) =>
              tag.length >= 11 ? "" : <span key={index}>#{tag}</span>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 360px;
  background: #f5f5f5;
  margin: 12px 0;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  a {
    text-decoration: none;
  }
  .cardImage {
    width: 100%;
    height: 240px;
    display: block;
  }
  .cardInfo {
    padding: 14px 20px 20px 20px;
    p {
      font-size: 17px;
      font-weight: 500;
      color: #364f6b;
      margin: 8px 10px;
      i,
      span {
        color: #fc5185;
      }
      span {
        margin: 0 4px 0 12px;
      }
      &.user {
        color: #fc5185;
        font-size: 22px;
        font-weight: 700;
      }
    }
    .tags {
      display: flex;
      align-items: center;
      span {
        margin: 8px 10px 0 0;
        background: #fc5185;
        color: #f5f5f5;
        border-radius: 50px;
        padding: 6px;
        font-size: 14px;
        width: 100px;
        text-align: center;
      }
    }
  }
  @media (max-width: 839px) {
    max-width: 100%;
  }
  @media (min-width: 840px) and (max-width: 1180px) {
    max-width: 48%;
  }
`;

export default Card;
