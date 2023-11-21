# Getting Started with Text Classifier App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Introduction
A simple **Text Classification App** created by integrating the inference api from **__Hugging Face__**.
The **Frontend is made using reactjs, HTML5, Bootstrap**.
The **inference api** is called to make the classification.

### Aim of the Project
The Aim of this project is to classify text based on its emotion, to see if a text is positive or negative.

### Limitations
The limitations of the project are:-
   - The app cannot include multiple sentences like from a book and classify the emotion.

### Future Enhancements
The Future enhancements include overcoming the limitations of this project.

### Structure
After running the project the user will be redirected to the home page where the text classification is done. Basically the program classifies the texts emotion.
The page takes input from the user to classfiy text to say whether its positive or negative. There is also a slider showing the score of postivity or negativity.
The classification is done through directly calling the inference api provided in the Hugging Face website.
The api is referenced in the html page as a variable and then returned its result into the input form

### Development Platform
The Project uses the inference api from the **Hugging Face** platform.
It is the integrateed to HTML page using the JS library- **React JS**.
The page is made Responsive using **Bootstrap 5**.
The API was tested using **Postman**.

### References
  - YouTube(https://youtu.be/XMYlqm2Dq1w?si=Z_sO-p7L8FuHwLm1)
  - Hugging Face Documentation(https://huggingface.co/docs/api-inference/index)


