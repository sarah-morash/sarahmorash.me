import React from "react";
import styled from "styled-components";

import "../css/all.min.css";
import "../css/main.css";

const TileList = ({ list }) => {
  return (
    <DIV>
      {list.map((item, index) => (
        <A title={item.title} href={item.link} target="_blank" key={index}>
          <Image src={item.image}></Image>
          <Name>{item.title}</Name>
          <Position>{item.position}</Position>
          <Description>{item.text}</Description>
          <TechStack>
            {item.technologies.map(tech => (
              <LOGO src={tech.image} alt={tech.name} title={tech.name} />
            ))}
          </TechStack>
        </A>
      ))}
    </DIV>
  );
};

export default TileList;

const DIV = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-evenly;
  margin: 0 auto;
  width: 100%;
`;

const A = styled.a`
  border: none;
  margin: 30px;
  width: 100%;
  border: 1px solid grey;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 10px 10px #000;
  text-decoration: none;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    width: 40%;
  }

  @media only screen and (min-width: 1400px) {
    width: 25%;
  }

  &:hover {
    transition: box-shadow 0.25s;
    border: 1px solid black;
    box-shadow: 10px 10px grey;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 230px;
  transition: filter 0.5s;
  filter: drop-shadow(0px 0px 10px #778899);
  object-fit: cover;
  object-position: top;

  @media only screen and (min-width: 768px) {
    height: 180px;
  }

  /* &:hover {
    transition: filter 0.5s;
    filter: drop-shadow(2px 2px 2px #f3df95) drop-shadow(2px 2px 4px #ff8cab) drop-shadow(-2px -2px 2px #00b0c8) drop-shadow(-2px -2px 4px #563bce);
  } */
}`;

const Name = styled.span`
  font-family: "Scout", sans-serif;
  text-transform: capitalize;
  text-transform: uppercase;
  -webkit-font-smoothing: auto;
  color: #000025;
  font-size: 28px;
  letter-spacing: 0px;
`;

const Description = styled.p`
  font-family: "Scout", sans-serif;
  text-transform: capitalize;
  -webkit-font-smoothing: auto;
  color: #000;
  font-size: 18px;
  letter-spacing: 0px;
  margin: 0;
`;

const Position = styled.p`
  font-family: "Scout", sans-serif;
  -webkit-font-smoothing: auto;
  color: #000;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0px;
  margin: 0;
`;

const LOGO = styled.img`
  width: 32px;
  margin: 6px;
  height: auto;
  padding: 2px;
`;

const TechStack = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
