import React from "react";
import BaseSkeleton from "./BaseSkeleton";

const SkeletonArticle = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-article">
        <BaseSkeleton type="title" />
        <BaseSkeleton type="text" />
        <BaseSkeleton type="text" />
        <BaseSkeleton type="text" />
        <BaseSkeleton type="text" />
        <BaseSkeleton type="text" />
      </div>
    </div>
  );
};

export default SkeletonArticle;
