/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";

const Search = ({ searchText }) => {
  const [inputVal, setInputVal] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(inputVal);
  };

  return (
    <form css={styles} onSubmit={onSubmit}>
      <input
        onChange={(e) => setInputVal(e.target.value)}
        type="text"
        placeholder="Search for an image"
      />
      <button type="submit">Search</button>
    </form>
  );
};

const styles = css`
  padding-bottom: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 100%;
    max-width: 300px;
    padding: 10px;
    outline: none;
    background: transparent;
    border: 1px solid #fc5185;
    color: #fff;
    &::placeholder {
      color: #fff;
    }
  }
  button {
    border: none;
    outline: none;
    font-size: 17px;
    font-weight: 500;
    padding: 8px 18px;
    background: #fc5185;
    color: #fff;
    margin-left: -89px;
    cursor: pointer;
    transition: background 400ms ease-in-out;
    &:hover {
      background: #c15979;
    }
  }
  @media (max-width: 839px) {
    width: 90%;
    max-width: 430px;
    margin: 0 auto;
    button {
      margin-left: -88px;
    }
  }
`;

export default Search;
