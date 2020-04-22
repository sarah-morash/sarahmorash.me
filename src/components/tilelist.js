import React from "react"
import styled from "styled-components"

const TileList = ({ list }) => (
  <DIV>
    {list.map(item => (
      <Tile>
        <A title={item.title} href={item.link}>
          <Image src={item.image}></Image>
        </A>

        <Name>{item.title}</Name>
        <Position>{item.position}</Position>
        <Description>{item.text}</Description>
        <TechStack>
          {item.technologies.map(tech => (
            <LOGO src={tech.image} alt={tech.name} title={tech.name} />
          ))}
        </TechStack>
      </Tile>
    ))}
  </DIV>
)

export default TileList

const Tile = styled.div`
  border: none;
  margin: 5%;
  min-width: 200px;
  max-width: 600px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 40%;
  }
`

const DIV = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`

const A = styled.a`
  text-decoration: none;
`

const Image = styled.img`
  width: 100%;
  transition: filter 0.5s;
  filter: drop-shadow(0px 0px 10px #778899);

  &:hover {
    transition: filter 0.5s;
    filter: drop-shadow(0px 0px 6px #f3df95);
  }
`

const Name = styled.span`
  font-family: "UnicaOne", sans-serif;
  -webkit-font-smoothing: auto;
  color: #000025;
  font-size: 28px;
  letter-spacing: 0px;
`

const Description = styled.p`
  font-family: "UnicaOne", sans-serif;
  -webkit-font-smoothing: auto;
  color: #000;
  font-size: 18px;
  letter-spacing: 0px;
  margin: 0;
`

const Position = styled.p`
  font-family: "UnicaOne", sans-serif;
  -webkit-font-smoothing: auto;
  color: #000;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0px;
  margin: 0;
`

const LOGO = styled.img`
  width: 32px;
  margin: 6px;
  height: auto;
  padding: 2px;
`

const TechStack = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
