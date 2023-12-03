import React, { useState } from "react";

import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import "./SalaryForm.css";

const validationSchema = Yup.object().shape({
  salary: Yup.number()
    .min(10000, "Too Short!")
    .max(1000000, "Too Long!")
    .required("Required"),
});

const SalaryForm = (props) => {
  const [salary, setSalary] = useState(70000);
  const handleSalary = (e) => {
    setSalary(e.target.value);
  };

  const handleSubmit = () => {
    props.getSalary(salary);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Formik
        initialValues={{ salary: salary }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          // const { salary } = props.salary;
          return (
            <Form>
              <TextField
                label="Your brutto salary ($/year):"
                name="salary"
                fullWidth
                variant="outlined"
                margin="dense"
                value={salary}
                type="number"
                InputProps={{ inputProps: { min: 10000, max: 1000000 } }}
                onChange={handleSalary}
                required
              />
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  textTransform: "none",
                  fontSize: "inherit",
                  color: "button.text",
                  backgroundColor: "button.background",
                  "&:hover": { backgroundColor: "button.hoverBackground" },
                }}
                fullWidth
              >
                Find out!
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default SalaryForm;
