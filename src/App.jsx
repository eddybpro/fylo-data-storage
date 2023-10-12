import { Logo, DocumentIcon, FolderIcon, UploadIcon } from "./assets";
import "./App.css";

function App() {
  return (
    <main>
      <div className="Header">
        <a href="#" className="Header-Logo" aria-label="fylo">
          <img src={Logo} alt="" />
        </a>
        <div className="Header-ImgBox">
          <div>
            <img src={DocumentIcon} alt="" />
          </div>
          <div>
            <img src={FolderIcon} alt="" />
          </div>
          <div>
            <img src={UploadIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="Footer">
        <h1 className="Footer-Title">
          You&apos;ve used <span>815 GB</span> of your storage
        </h1>
        <div className="Footer-RangeBox">
          <input
            type="range"
            name="storage"
            id="storage"
            className="range"
            min="0"
            max="1000"
            defaultValue="800"
            disabled
            aria-label="storage"
          />
          <progress
            min="0"
            max="1000"
            value="830"
            className="RangeProgress"
          ></progress>
        </div>
        <div className="Footer-ValuesBox">
          <p>0 GB</p>
          <p>1000 GB</p>
        </div>
        <div className="Footer-LeftBox">
          <strong>185</strong>
          <span>GB Left</span>
        </div>
      </div>
    </main>
  );
}

export default App;
