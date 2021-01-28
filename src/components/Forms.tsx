//React
import React from "react";
//store
import { observer } from "mobx-react-lite";
import Store from '../store/Store'
//MaterialUI
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
//styles
import useStyles from "../styles/Forms";
//types
import {FormsProps} from '../types/types'

const Forms: React.FC<FormsProps> = observer(({ onChange, formsData }): JSX.Element => {

  const styles = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      <TextField
        name="firstName"
        onChange={onChange}
        label="Имя"
        placeholder="Введите имя"
        variant="outlined"
        value={formsData.firstName}
        defaultValue={Store.user?.firstName}
        className={styles.inputSm}
      />
      <TextField
        name="lastName"
        onChange={onChange}
        label="Фамилия"
        placeholder="Введите фамилию"
        variant="outlined"
        value={formsData.lastName}
        defaultValue={Store.user?.lastName}
        className={styles.inputSm}
      />
      <TextField
        name="givenName"
        onChange={onChange}
        label="Отчество"
        placeholder="Введите отчество"
        variant="outlined"
        value={formsData.givenName}
        defaultValue={Store.user?.givenName}
        className={styles.input}
      />
      <TextField
        name="position"
        onChange={onChange}
        label="Должность"
        placeholder="Введите должность"
        variant="outlined"
        value={formsData.position}
        defaultValue={Store.user?.position}
        className={styles.input}
      />
      <TextField
        name="number"
        onChange={onChange}
        label="Номер телефона"
        placeholder="Введите номер"
        variant="outlined"
        value={formsData.number}
        defaultValue={Store.user?.number}
        className={styles.input}
      />
      <TextField
        name="login"
        onChange={onChange}
        label="Логин"
        placeholder="Введите логин"
        variant="outlined"
        value={formsData.login}
        defaultValue={Store.user?.login}
        className={styles.input}
      />
      <TextField
        name="password"
        type="password"
        onChange={onChange}
        label="Пароль"
        placeholder="Введите пароль"
        variant="outlined"
        value={formsData.password}
        defaultValue={''}
        className={styles.inputSm}
      />
      <TextField
        name="confirmPassword"
        type="password"
        onChange={onChange}
        label="Подтверждение"
        placeholder="Подтвердите пароль"
        variant="outlined"
        value={formsData.confirmPassword}
        defaultValue={''}
        className={styles.inputSm}
      />
    </Grid>
  );
});

export default Forms;
