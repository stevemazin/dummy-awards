import React from "react";
import { useDispatch } from "react-redux";
import { setChoice } from "../../../store/actions";
import { showPopupMessage } from "../../../store/actions/ui";

const MobileNomination = ({
  nomineeImg,
  nomineeName,
  votingSectionInView,
  votingSectionInViewData,
  user,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <img
        className="nomimation-img"
        src={nomineeImg}
        alt="Nominee"
        onClick={() => {
          if (!user) {
            dispatch(
              showPopupMessage(true, "Login or Create an account to vote...")
            );
          } else {
            console.log("This is the mobile nom...");
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

export default MobileNomination;
