//React
import React from "react";
import { useHistory } from "react-router-dom";
//MaterialUI
import Button from "@material-ui/core/Button";
//styles
import useStyles from "../styles/Header";

const Header: React.FC = (): JSX.Element => {

  const history = useHistory()
  const styles = useStyles();

  const toHome = (): void => {
    history.push('/main')
  }

  const toUsers = (): void => {
    history.push('/users')
  }

  const toText = (): void => {
    history.push('/text')
  }


  return (
    <div className={styles.container}>
        <Button onClick={toHome} className={styles.button}>Параметры</Button>
        <Button onClick={toUsers} className={styles.button}>Пользователи</Button>
        <Button onClick={toText} className={styles.button}>Ввод текста</Button>
    </div>
  );
};

export default Header;
