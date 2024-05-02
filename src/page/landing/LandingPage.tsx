import { useNavigate } from "react-router-dom";
import LandingPresenter from "./LandingPresenter";
import { LandingPagePresenterElement } from "../../config/Interfaces";

export default function LandingPage() {
  // STATE
  const navigate = useNavigate();

  // FUNCTION
  function handleSignIn() {
    navigate("/login");
  }

  // PROP
  const prop: LandingPagePresenterElement = {
    handleSignIn: handleSignIn,
  };

  return <LandingPresenter prop={prop} />;
}
