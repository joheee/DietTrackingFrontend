import { useNavigate } from "react-router-dom";
import LandingPresenter from "./LandingPresenter";
import { LandingPagePresenterElement } from "../../config/Interfaces";

export default function LandingPage() {
  // STATE
  const navigate = useNavigate();

  // FUNCTION
  function handleBmi() {
    navigate("/bmi");
  }

  const prop: LandingPagePresenterElement = {
    handleBmi: handleBmi,
  };

  return <LandingPresenter prop={prop} />;
}
