import "./App.css";

//Pictures
import button from "./Pictures/icon-arrow-down.svg";
import left from "./Pictures/secondone.png"

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <div className="blocks">
            <div className="left">
              <img src={left} alt="" />
            </div>
            <div className="right">
              <h1>FAQ</h1>
              <div className="block">
                <p>How many team members can I invite?</p>
                <img src={button} alt="" />
              </div>
              <div className="block">
                <div className="con">
                  <p>What is the maximum file upload size?</p>
                <img src={button} alt="" />
                </div>
                <p> No more than 2GB. All files in your account must fit
                        your allotted storage space.</p>
              </div>
              <div className="block">
                <p>How do I reset my password?</p>
                <img src={button} alt="" />
              </div>
              <div className="block">
                <p>Can I cancel my subscription?</p>
                <img src={button} alt="" />
              </div>
              <div className="block">
                <p>Do you provide additional upport?</p>
                <img src={button} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
