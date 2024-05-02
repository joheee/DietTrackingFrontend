import { useState } from "react";
import BmiPresenter from "./BmiPresenter";
import { BmiPagePresenterElement } from "../../config/Interfaces";

export default function BmiPage() {
  // STATE
  const [bmiModal, setBmiModal] = useState<Boolean>(false);

  // FUNCTION
  function handleBmiModal() {
    setBmiModal(!bmiModal);
  }

  // PROP
  const prop: BmiPagePresenterElement = {
    handleBmiModal: handleBmiModal,
    bmiModal
  };

  return <BmiPresenter prop={prop}/>;
}
