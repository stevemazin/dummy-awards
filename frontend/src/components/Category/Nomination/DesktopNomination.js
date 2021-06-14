import React from "react";
import { useDispatch } from "react-redux";
import { setChoice } from "../../../store/actions";
import { showPopupMessage } from "../../../store/actions/ui";
import CircularTick from "../../Utilities/InlineSVGs/CircularTick";
import Skeleton from "react-loading-skeleton";

const DesktopNomination = ({
  nomineeImg,
  itemId,
  selectedNominee,
  currentCatName,
  votingSectionInViewData,
  user,
  nomineeName,
  votingSectionInView,
}) => {
  const dispatch = useDispatch();
  return (
    (
      <>
        <img src={nomineeImg} alt="Nominee" />
        <div className="overlay">
          {itemId === selectedNominee &&
            currentCatName === votingSectionInViewData.cat_name && (
              <CircularTick />
            )}
          <button
            className={
              itemId === selectedNominee &&
              currentCatName === votingSectionInViewData.cat_name
                ? "nominee-select hide"
                : "nominee-select"
            }
            onClick={() => {
              if (!user) {
                dispatch(
                  showPopupMessage(
                    true,
                    "Login or Create an account to vote..."
                  )
                );
              } else {
                let tempChoiceData = {};
                tempChoiceData["nomineeName"] = nomineeName;
                tempChoiceData["votingSectionInView"] = votingSectionInView;
                tempChoiceData["allCatData"] = votingSectionInViewData;
                tempChoiceData["voterData"] = user;
                dispatch(setChoice(tempChoiceData));
              }
            }}
          >
            Select
          </button>
        </div>
      </>
    ) || <Skeleton />
  );
};

export default DesktopNomination;
