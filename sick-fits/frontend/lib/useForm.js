import { useState } from 'react';

// custom hook to use for all form inputs
export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  // replaces having to do this on every input.
  function handleChange(e) {
    // pulling value, name, and type from event target see line 15-20 on CreateProduct
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      // descructuring syntax. takes the first value of the e.target.files array and assigns it to value
      [value] = e.target.files;
      console.log(value);
    }

    // handles an object of multiple pieces of state
    setInputs({
      // copy the existing state:
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
