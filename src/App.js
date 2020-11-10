import React, { useState } from "react";
import "./App.scss";
import Badge from "./components/Badge";
import { Scrollbars } from "react-custom-scrollbars";

function App() {
  const [Brightness, setBrightness] = useState("1");
  const [Gamma, setGamma] = useState("1");
  const [HueRotation, setHueRotation] = useState("0");
  const [Saturation, setSaturation] = useState("1");
  const [Sharpen, setSharpen] = useState("1");
  const [Contrast, setContrast] = useState("1");
  const [Blur, setBlur] = useState("1");
  const [Quality, setQuality] = useState("100");
  const [ImageFormat, setImageFormat] = useState("");
  const [ImageEdited, setImageEdited] = useState("");
  const [AddImage, setAddImage] = useState("");

  const defaultImage =
    "https://assets3.thrillist.com/v1/image/2834894/1584x1054/crop;jpeg_quality=60.jpg";

  const baseImage = `https://images.weserv.nl/?url=${
    AddImage ? AddImage : defaultImage
  }&q=${Quality}&blur=${Blur}&con=${Contrast}&gam=${Gamma}&mod=${Brightness}&sat=${Saturation}&hue=${HueRotation}&sharp=${Sharpen}&output=${ImageFormat}`;

  const AddImageChange = (event) => {
    setAddImage(event.target.value);
  };

  const ImageEditedChange = () => {
    setImageEdited(baseImage);
  };

  const ImageFormatChange = (event) => {
    setImageFormat(event.target.attributes[0].nodeValue);
  };

  const OptionChange = (event) => {
    if (event.target.attributes[3].nodeValue === "brightness") {
      setBrightness(event.target.value);
    } else if (event.target.attributes[3].nodeValue === "gamma") {
      setGamma(event.target.value);
    } else if (event.target.attributes[3].nodeValue === "saturation") {
      setSaturation(event.target.value);
    } else if (event.target.attributes[3].nodeValue === "huerotation") {
      setHueRotation(event.target.value);
    } else if (event.target.attributes[3].nodeValue === "sharpen") {
      setSharpen(event.target.value);
    } else if (event.target.attributes[3].nodeValue === "blur") {
      setBlur(event.target.value);
    } else if (event.target.attributes[3].nodeValue === "quality") {
      setQuality(event.target.value);
    } else if (event.target.attributes[3].nodeValue === "contrast") {
      setContrast(event.target.value);
    }
    ImageEditedChange();
  };

  return (
    <div className="app">
      <Badge />

      <div className="container">
        <div className="row">
          <div className="column-left">
            <div className="center-image">
              <img src={baseImage} alt="editing-canvas" />
            </div>
            <div class="input-wrapper">
              <input
                placeholder="Enter an image url"
                onChange={AddImageChange}
                value={AddImage}
              />
            </div>
          </div>
          <div className="column-right">
            <Scrollbars>
              <div className="option-container">
                <div className="filter-section">
                  <h3 className="sub-heading">Filters</h3>
                  <h4 className="sub-heading small">Brightness</h4>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    tool="brightness"
                    value={Brightness}
                    onChange={OptionChange}
                    step="1"
                  />
                  <h4 className="sub-heading small">Contrast</h4>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    tool="contrast"
                    value={Contrast}
                    onChange={OptionChange}
                    step="1"
                  />

                  <h4 className="sub-heading small">Gamma</h4>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    tool="gamma"
                    value={Gamma}
                    onChange={OptionChange}
                    step="1"
                  />
                  <h4 className="sub-heading small">Saturation</h4>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    tool="saturation"
                    value={Saturation}
                    onChange={OptionChange}
                    step="1"
                  />
                  <h4 className="sub-heading small">Hue rotation</h4>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    tool="huerotation"
                    value={HueRotation}
                    onChange={OptionChange}
                    step="1"
                  />
                  <h4 className="sub-heading small">Sharpen</h4>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    tool="sharpen"
                    value={Sharpen}
                    onChange={OptionChange}
                    step="1"
                  />
                  <h4 className="sub-heading small">Blur</h4>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    tool="blur"
                    value={Blur}
                    onChange={OptionChange}
                    step="1"
                  />
                  <h4 className="sub-heading small">Quality</h4>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    tool="quality"
                    value={Quality}
                    onChange={OptionChange}
                    step="1"
                  />
                </div>
                <h3 className="sub-heading">Choose format</h3>
                <ul className="options">
                  <li className={ImageFormat === "jpg" ? "active" : null}>
                    <button format="jpg" onClick={ImageFormatChange} download>
                      jpg
                    </button>
                  </li>
                  <li className={ImageFormat === "png" ? "active" : null}>
                    <button format="png" onClick={ImageFormatChange} download>
                      png
                    </button>
                  </li>
                  <li className={ImageFormat === "webp" ? "active" : null}>
                    <button format="webp" onClick={ImageFormatChange} download>
                      webp
                    </button>
                  </li>
                </ul>

                <div className="download-button">
                  <a
                    href={ImageEdited}
                    target="_blank"
                    rel="noreferrer"
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            </Scrollbars>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
