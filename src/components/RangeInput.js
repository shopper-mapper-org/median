import React from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 1;
const MIN = 1;
const MAX = 20;

class RangeInput extends React.Component {
  render() {
    const { rangeValues, setRangeValues } = this.props;
    return (
      <div className="range-input">
        <div className="range-track">
          <Range
            values={rangeValues}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => setRangeValues(values)}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  padding: "0",
                  margin: "0",
                }}
              >
                <div
                  className="track-bg"
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values: rangeValues,
                      colors: ["#C4E39C", "#ccc"],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                className="range-thumb"
                {...props}
              >
                <div
                  className="range-notch"
                  style={{
                    backgroundColor: isDragged ? "#C4E39C" : "#CCC",
                  }}
                />
              </div>
            )}
          />
          <output
            style={{ marginTop: "30px" }}
            id="output"
          >
            {`${rangeValues[0].toFixed(1)} km`}
          </output>
        </div>
      </div>
    );
  }
}

export default RangeInput;
