import { createPortal } from "react-dom";
import "./Rules.css";

const Rules = ({ closeRulesModal }: any) => {
  return createPortal(
    <div className="rules">
      <h1>Rules and How to Play</h1>
      <h3>
        The purpose of the Game is to identify SETs of 3 cards from the 12
        unique cards shown on the board. You have 90 seconds to find as many as
        you can!
      </h3>

      <h2>What is a Set?</h2>
      <h3>
        A set consists of three cards in which each feature (shape, color,
        number and fill) are all the same, or all different.
      </h3>

      <h2>Examples of Sets:</h2>
      <div className="images-container">
        <figure>
          <img
            src={`${process.env.PUBLIC_URL}/images/examples/example1.png`}
            alt="example1"
          ></img>
          <figcaption>
            All different fill, color, and number, all same shape
          </figcaption>
        </figure>
        <figure>
          <img
            src={`${process.env.PUBLIC_URL}/images/examples/example2.png`}
            alt="example2"
          ></img>
          <figcaption>
            All different fill and color, all same number and shape
          </figcaption>
        </figure>
        <figure>
          <img
            src={`${process.env.PUBLIC_URL}/images/examples/example3.png`}
            alt="example3"
          ></img>
          <figcaption>
            All different fill, all same color, number and shape
          </figcaption>
        </figure>
      </div>
      <h2>How to Play:</h2>
      <h3>
        Once you think you’ve found a set, click on the cards. If it is a set,
        the selected cards will turn green, a +1 will be added to your score,
        and the three cards will be replaced by new cards. If it is not a set,
        the cards will turn red and your score will decrease by 1.
      </h3>
      <button id="close-button" onClick={() => closeRulesModal()}>
        CLOSE
      </button>
    </div>,
    document.body
  );
};

export default Rules;
