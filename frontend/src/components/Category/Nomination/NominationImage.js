import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import { setChoice } from "../../../store/actions";
import { showPopupMessage } from "../../../store/actions/ui";
import "react-lazy-load-image-component/src/effects/blur.css";
import toast from "react-hot-toast";

const NominationImage = (props) => {
  const {
    nomineeImg,
    votingSectionInViewData,
    user,
    nomineeName,
    votingSectionInView,
  } = props;

  const dispatch = useDispatch();
  return (
    <>
      <LazyLoadImage
        alt="Nominee"
        src={nomineeImg} // use normal <img> attributes as props
        height={nomineeImg.height}
        width={nomineeImg.width}
        effect="blur"
        className="nomimation-img"
        onClick={() => {
          if (!user) {
            toast.error("Login or create an account to continue!");
          } else {
            let tempChoiceData = {};
            tempChoiceData["nomineeName"] = nomineeName;
            tempChoiceData["votingSectionInView"] = votingSectionInView;
            tempChoiceData["allCatData"] = votingSectionInViewData;
            tempChoiceData["voterData"] = user;
            dispatch(setChoice(tempChoiceData));
          }
        }}
      />
    </>
  );
};

export default NominationImage;
