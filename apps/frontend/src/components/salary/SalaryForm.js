import React, { Fragment, useState } from "react";

import "./SalaryForm.css";

const SalaryForm = (props) => {
  const [salary, setSalary] = useState(70000);
  const handleSalary = (e) => {
    setSalary(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getSalary(salary);
  };

  return (
    <Fragment>
      <div className="form-container" onSubmit={handleSubmit}>
        <form className="form-salary">
          <span>Your brutto salary ($/year):</span>
          <input
            type="number"
            id="salary"
            name="salary"
            value={salary}
            min="100"
            onChange={handleSalary}
          />
          <button type="submit">Find out!</button>
        </form>
      </div>
    </Fragment>
  );
};

export default SalaryForm;
