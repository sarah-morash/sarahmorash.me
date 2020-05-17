import React from "react";
import styled from "styled-components";

import "../css/all.min.css";
import "../css/main.css";

const LogoList = ({ list }) => {
  return (
    <DIV>
      {list.map((item, index) => (
        <A title={item.title} href={item.link} key={index}>
          <Image src={item.image}></Image>
        </A>
      ))}
    </DIV>
  );
};

export default LogoList;

const DIV = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
  width: 100%;
`;

const A = styled.a`
  text-decoration: none;
  overflow: hidden;
  border: none;
  margin: 10px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 100px;
  transition: filter 0.2s ease-in-out;

  &:hover {
    transition: filter 0.2s ease-in-out;
    filter: grayscale(100%);
  }
}
`;
