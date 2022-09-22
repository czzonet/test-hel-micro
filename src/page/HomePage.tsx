import React from "react";
import styled from "styled-components";
import { Hello } from "../components/Hello";
import { World } from "./World";

export const HomePage = () => {
  return (
    <Style>
      <Hello></Hello>
      <World></World>
    </Style>
  );
};

const Style = styled.div`
  width: 100%;
  height: 100%;
`;
