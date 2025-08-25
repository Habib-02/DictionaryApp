import React from "react";

import { ErrorMessage, Field, Form, Formik } from "formik";

import { Search } from "lucide-react";
import styles from "./SearchInput.module.css";

function SearchInput({ onSubmit }) {
  const inputRef = React.useRef(null);

  return (
    <>
      <Formik
        initialValues={{ search: "" }}
        validateOnBlur={false}
        validateOnChange={false}
        validate={(values) => {
          const errors = {};
          if (!values.search.trim()) {
            errors.search = "Whoops, can't be empty";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values.search.toLocaleLowerCase());
          resetForm();

          // blur the input to hide the mobile keyboard
          if (inputRef.current) {
            inputRef.current.blur();
          }
        }}
      >
        {({ errors }) => (
          <Form>
            <div className={styles.inputGroup}>
              <Field
                innerRef={inputRef}
                name="search"
                type="text"
                placeholder="Search for any word"
                className={`${errors.search ? styles.inputError : ""}`}
              />

              <button type="submit" className={styles.searchIcon}>
                <Search />
              </button>
            </div>
            <ErrorMessage
              className={styles.error}
              name="search"
              component="div"
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default SearchInput;
