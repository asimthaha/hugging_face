import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";

const TextClassifier = () => {
  const [beforeSubmit, afterSubmit] = useState(true);

  const [inputField, changeInputField] = useState({
    inputs: "",
  });

  const [label, changeLabel] = useState([]);
  const [score, changeScore] = useState([]);

  const inputHandler = (newEvent) => {
    changeInputField({
      ...inputField,
      [newEvent.target.name]: newEvent.target.value,
    });
  };

  const readVal = () => {
    console.log(inputField);
    axios
      .post(
        "https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english",
        inputField
      )
      .then((response) => {
        const sortedOutput = response.data[0].sort((a, b) => b.score - a.score);

        const labelPrediction = sortedOutput[0].label;
        const scorePrediction = sortedOutput[0].score;

        changeLabel(labelPrediction);
        changeScore(scorePrediction);
        afterSubmit(false);
        console.log(labelPrediction);
        console.log(scorePrediction);
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
                <h3 className="text-center">TEXT CLASSIFIER</h3>
              </div>
            </div>
            <div className="row g-3">
              <div className="col">
                <div class="card border border-primary shadow">
                  <div class="card-body">
                    <div className="col col-12 c0l-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <label htmlFor="" className="form-label">
                        Enter Text
                      </label>
                      <input
                        type="text"
                        name="inputs"
                        value={inputField.inputs}
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
            {beforeSubmit ? (
              <div className="row g-3 mt-5">
                <div className="col">
                  <p className="text-muted">
                    Hello..This is a Text Classifier made by directly calling
                    the inference api from Hugging Face. When you click the
                    submit button the api will return a result whether the input
                    is poistive or negative and this text will disappear. Try
                    it.
                  </p>
                </div>
              </div>
            ) : (
              <div className="row g-3 mt-5">
                <div className="col">
                  <div class="card border border-primary shadow">
                    <div class="card-body">
                      <div className="col col-12 c0l-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">
                          RESULT
                        </label>
                        <input
                          type="text"
                          value={label}
                          className="form-control"
                        />
                      </div>
                      <div className="col col-12 col-sm-12 col-md-12">
                        <input
                          type="range"
                          min="0"
                          max="1"
                          value={score}
                          className="form-range"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextClassifier;
