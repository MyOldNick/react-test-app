//React
import React, {  useState, BaseSyntheticEvent } from "react";
import { useHistory } from "react-router-dom";
//store
import Store from "../store/Store";
import { observer } from "mobx-react-lite";
//MaterialUI
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
//styles
import useStyles from "../styles/RegisterAndLogin";

const Login: React.FC = observer((): JSX.Element => {
  const [formsData, setFormsData] = useState<any>({});

  const history = useHistory();
  const styles = useStyles();


  const onChange = (event: BaseSyntheticEvent): void => {
    const { name, value } = event.target;

    const obj = formsData;
    obj[name] = value;

    setFormsData(obj);
  };

  const auth = (): void => {

    if (formsData.login && formsData.password) {
      const res = Store.authUser(formsData);

      res === 400 ? alert("Не верные данные") : history.push("/main");
    } else alert("Заполните поля");
  };

  return (
    <Container maxWidth="sm" className={styles.container}>
      <h2>Войти</h2>
      <FormControl variant="outlined" className={styles.selectForm}>
        <InputLabel htmlFor="outlined-age-native-simple">Логин</InputLabel>
        <Select
          onChange={onChange}
          label="Логин"
          style={{ width: "100%", height: "100%" }}
          value={formsData.login}
          defaultValue={'...'}
          inputProps={{
            name: "login",
            id: "outlined-age-native-simple",
          }}
        >
          <MenuItem value={"..."}>...</MenuItem>
          {Store.users.map((el, index) => (
            <MenuItem key={index} value={el.login}>
              {el.login}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        name="password"
        type="password"
        onChange={onChange}
        label="Пароль"
        placeholder="Введите парол"
        variant="outlined"
        value={formsData.password}
        className={styles.input}
      />
      <Button
        onClick={auth}
        variant="contained"
        color="primary"
        className={styles.button}
      >
        войти
      </Button>
    </Container>
  );
});

export default Login;
