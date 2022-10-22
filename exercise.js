// Get the value of the form-input text input field and print it in the console.

// HELPER FUNCTIONS
const qsa = (selector) => document.querySelectorAll(selector);
const getLabel = (i) => form_labels[i].previousElementSibling.innerHTML;
const getValue = (element) => element.value;

// DOM
const form_inputs = Array.from(qsa(".form-input")); // in order to be able to use map()
const form_labels = qsa(".form-input"); // in order to be able to get the siblings

// GET VALUE
const getModel = (dom) =>
  dom.map((element, i) => {
    return { [getLabel(i)]: getValue(element) };
  });

// APP
const run = () => {
  const model = getModel(form_inputs);
  console.log(model);
};

// RUN APP
run();
