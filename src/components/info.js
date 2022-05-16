import React from "react";
import styled from "styled-components";

import "../css/all.min.css";
import "../css/main.css";

const Info = () => {
  return (
    // <div class="flex flex-col lg:grid lg:gap-4 2xl:gap-5 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 p-6">
    //   <div class="flex justify-between items-center bg-pink lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl p-8">
    //     <SPAN className="fas fa-anchor w-1/4" style={{ color: "#f3df95" }} />
    //     <p class="text-white text-lg font-bold w-3/4">
    //       Born & raised in Nova Scotia, Canada. You know, that place where
    //       Ellen Page, Sidney Crosby, Sarah McLachlan & Trailer Park Boys come
    //       from{" "}
    //         <span role="img" aria-label="wink face">
    //           😉
    //         </span>{" "}
    //       #EASTCOAST
    //     </p>
    //   </div>

    //   <div class="bg-blue lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl shadow-inner p-8">
    //     <p class="text-white text-xl font-semibold">The team was very supportive and kept me motivated</p>
    //   </div>

    //   <div class="lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl p-8">
    //     <p class="primary-color-blackish-blue text-3xl font-bold">An overall wonderful and rewarding experience</p>
    //   </div>

    //   <div class="flex items-center justify-between bg-gray lg:order-4 lg:row-span-2 2xl:row-span-1 col-span-2 rounded-lg shadow-xl shadow-inner p-8">
    //     <SPAN className="fas fa-terminal w-1/4" style={{ color: "#563bce" }} />
    //     <p class="text-white text-xl font-semibold w-3/4">
    //       Over six years of software development experience. From fullstack
    //       CMS development, to front-end react development, and working on
    //       expanding my cloud knowledge with AWS & learning GO! Passion for
    //       learning new technologies and providing mentorship/teaching others.
    //     </p>
    //   </div>

    //   <div class="flex flex-col justify-between items-center bg-purple lg:order-2 lg:row-span-4 lg:col-span-1 rounded-lg shadow-xl shadow-inner p-8">
    //     <p class="primary-color-blackish-blue text-xl font-semibold w-3/4">
    //       When I'm not coding, I'm working on my fitness. I am a regular
    //       crossfitter @&nbsp;
    //       <A href="http://www.crossfitkinetics.com/" target="_blank">
    //         Crossfit Kinetics
    //       </A>
    //       &nbsp;who enjoys long WODs, heavy weights (powerlifting FTW), and
    //       double unders 💪
    //     </p>
    //     <SPAN className="fas fa-dumbbell w-1/4" style={{ color: "#ff8cab" }} />
    //   </div>
    // </div>
    <>
      <div class='flex flex-col lg:grid lg:gap-4 2xl:gap-5 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 p-6'>
        <div class='card text-center shadow-2xl m-4'>
          <figure class='px-10 pt-10'>
            <img
              src='https://picsum.photos/id/1005/400/250'
              class='rounded-xl'
            />
          </figure>
          <div class='card-body'>
            <h2 class='card-title'>shadow, center, padding</h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div class='justify-center card-actions'>
              <button class='btn btn-outline btn-accent'>More info</button>
            </div>
          </div>
        </div>
        <div class='card shadow-xl image-full m-4'>
          <figure>
            <img src='https://picsum.photos/id/1005/400/250' />
          </figure>
          <div class='justify-end card-body'>
            <h2 class='card-title'>Image overlay</h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div class='card-actions'>
              <button class='btn btn-primary'>Learn More</button>
            </div>
          </div>
        </div>
        <div class='card shadow-sm bg-accent text-accent-content m-4'>
          <figure>
            <img src='https://picsum.photos/id/1005/400/250' />
          </figure>
          <div class='card-body'>
            <h2 class='card-title'>Accent color</h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div class='card-actions'>
              <button class='btn btn-secondary'>More info</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;

const DIV = styled.div`
  margin: auto 32px;
`;

const SPAN = styled.span`
  font-size: 64px;
  color: #563bce;
  opacity: 0.5;
`;

const P = styled.p`
  font-family: "Scout", sans-serif;
  -webkit-font-smoothing: auto;
  color: #000;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0px;
  width: 100%;
  margin: 16px 0;
  text-justify: inter-word;

  @media only screen and (min-width: 768px) {
    padding: 32px;
  }
`;

const FLEX = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 0 100px;

  @media only screen and (min-width: 768px) {
    margin: 0 0 150px;
  }
`;

const BLURB = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 0;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0;
  }
`;

const A = styled.a`
  font-size: 20px;
  font-weight: bold;
  font-family: "Scout",sans-serif;
  text-decoration: none;
  color: #fff;
  transition: filter 0.3s;
  text-shadow: 0px 0px 3px rgba(86,59,206,1);

  &:hover {
    transition: filter 0.3s;
    filter: drop-shadow(0px 0px 5px rgba(0,176,200,1));
  }
}`;
