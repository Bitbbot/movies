import React, { useState } from "react";
import { tables } from "../../utils/consts";
import classes from "./AddData.module.css";
import Field from "./Field/Field";
import { addRecord } from "../../http/dbAPI";

const AddData = () => {
  const [selectValue, setSelectValue] = useState(tables[0]);
  let values = {};
  return (
    <div>
      <form className={classes.form}>
        <div className={classes.table_wrrapper}>
          <div className={classes.title}>Add record to database</div>
          <select
            className={classes.select}
            onChange={(e) => {
              setSelectValue(tables.find((el) => el.name === e.target.value));
              values = {};
            }}
          >
            {tables.map((table) => (
              <option key={table.name}>{table.name}</option>
            ))}
          </select>
        </div>
        <div className={classes.fields}>
          {selectValue.fields.map((field) => (
            <Field values={values} field={field} key={field} />
          ))}
        </div>
        <button
          type="button"
          className={classes.submit}
          onClick={() => {
            console.log(values);
            addRecord(selectValue.url, values);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddData;
