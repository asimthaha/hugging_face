import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";

const TextGenarator = () => {
  const [inputField, changeInputField] = useState({
    generated_text: "",
  });

  const [result, changeResult] = useState([]);

  const inputHandler = (newEvent) => {
    changeInputField({
      ...inputField,
      [newEvent.target.name]: newEvent.target.value,
    });
  };

  const readVal = () => {
    console.log(inputField);
    axios
      .post("https://api-inference.huggingface.co/models/gpt2", inputField)
      .then((response) => {
        console.log(response.data.get("genarated_text"));
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="row">
              <div className="col">
                <h3 className="text-center">TEXT GENARATOR</h3>
              </div>
            </div>
            <div className="row g-3">
              <div className="col">
                <div class="card">
                  <div class="card-body">
                    <div className="col col-12 c0l-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <label htmlFor="" className="form-label">
                        Enter Text
                      </label>
                      <input
                        type="text"
                        name="generated_text"
                        value={inputField.generated_text}
                        onChange={inputHandler}
                        className="form-control"
                      />
                    </div>
                    <div className="col col-12 c0l-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-2">
                      <button onClick={readVal} className="btn btn-success">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-3 mt-5">
              <div className="col">
                <div class="card">
                  <div class="card-body">
                    <div className="col col-12 c0l-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <label htmlFor="" className="form-label">
                        RESULT
                      </label>
                      <input
                        type="text"
                        value={result}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextGenarator;
