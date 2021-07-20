import React from "react";
import BaseSkeleton from "./BaseSkeleton";

const SkeletonThumbnail = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-thumbnail">
        <BaseSkeleton type="thumbnail" />
      </div>
    </div>
  );
};

export default SkeletonThumbnail;
