import React from "react";
import styled from "styled-components";
import "./Skeleton.css";

const Skeleton = styled.div``;

const BaseSkeleton = ({ type }) => {
  const skeletonKlasses = `skeleton ${type}`;

  return <Skeleton className={skeletonKlasses}></Skeleton>;
};

export default BaseSkeleton;
