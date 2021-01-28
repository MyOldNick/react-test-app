//React
import React, { BaseSyntheticEvent, useState } from "react";
//MaterialUI
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
//styles
import useStyles from "../styles/TextInput";

const TextInput: React.FC = (): JSX.Element => {
  const [firstInput, setFirstInput] = useState<string>("");
  const [secondInput, setSecondInput] = useState<string>("");

  const styles = useStyles();

  const changeFirst = (event: BaseSyntheticEvent): void => {
    setFirstInput(event.target.value);
  };

  const changeSecond = (event: BaseSyntheticEvent): void => {
    setSecondInput(event.target.value);
  }

  const submit = (): void => {
    setSecondInput(firstInput)
  };

  return (
    <Container maxWidth="sm" className={styles.container}>
      <TextField
        name="firstInput"
        onChange={changeFirst}
        label="Инпут"
        placeholder="Плейсхолдер"
        variant="outlined"
        value={firstInput}
      />
      <TextField
        name="secondInput"
        onChange={changeSecond}
        label="Инпут2"
        placeholder="Плейсхолдер"
        variant="outlined"
        value={secondInput}
        className={styles.mt}
      />

      <Button
        onClick={submit}
        variant="contained"
        color="primary"
        className={styles.mt}
      >
        ОК
      </Button>
    </Container>
  );
};

export default TextInput;
