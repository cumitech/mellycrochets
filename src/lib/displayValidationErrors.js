import moment from "moment";
import { ValidationError } from "class-validator";

export const displayValidationErrors = (validationErrors) => {
  if (validationErrors && validationErrors.length > 0) {
    const errors = validationErrors.map((v) => {
      return {
        // property: v.property,
        messages: [...iterateConstrains(v.constraints)],
      };
    });
    return errors;
  }
};

function iterateConstrains(constrains) {
  const arr = [];
  if (constrains !== null) {
    for (let key in constrains) {
      arr.push(constrains[key]);
    }
  }
  return arr;
}
