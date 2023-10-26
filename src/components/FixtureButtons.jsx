import { Button } from "react-bootstrap";
import { useState } from "react";

export function FixtureButtons({ handleFixtureClick, handleResultsClick }) {
  const [isFixtureActive, setFixtureActive] = useState(true);
  const [isResultsActive, setResultsActive] = useState(false);

  const handleFixtureButtonClick = () => {
    setFixtureActive(true);
    setResultsActive(false);
    handleFixtureClick();
  };

  const handleResultsButtonClick = () => {
    setFixtureActive(false);
    setResultsActive(true);
    handleResultsClick();
  };

  return (
    <div className="fixture-buttons">
      <Button
        variant={isFixtureActive ? "outline-dark" : "light"}
        onClick={handleFixtureButtonClick}
      >
        Fixtures
      </Button>
      <Button
        variant={isResultsActive ? "outline-dark" : "light"}
        onClick={handleResultsButtonClick}
      >
        Results
      </Button>
    </div>
  );
}
