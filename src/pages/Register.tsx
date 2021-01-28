//React
import React, { useState, BaseSyntheticEvent } from "react";
import { useHistory } from "react-router-dom";
//store
import Store from "../store/Store";
import { observer } from "mobx-react-lite";
//components
import Forms from '../components/Forms'
//Material UI
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
//styles
import useStyles from "../styles/RegisterAndLogin";
//types

const Register: React.FC = observer((): JSX.Element => {
  const [formsData, setFormsData] = useState<any>({});

  const history = useHistory()
  const styles = useStyles();

  const onChange = (event: BaseSyntheticEvent): void => {
    const { name, value } = event.target;

    const obj = formsData;
    obj[name] = value;

    setFormsData(obj);
  };

  const createUser = (): void => {

    if(formsData.password === formsData.confirmPassword) {

        Store.createUser(formsData);

        alert('Пользователь создан')
    
        history.push('/login')

    } else {
        alert("Не совпадают пароли")
    }
    
  };

  return (
    <Container maxWidth="sm" className={styles.container}>
      <h2>Регистрация</h2>
      <Forms onChange={onChange} formsData={formsData}/>
      <Button onClick={createUser} variant="contained" color="primary" className={styles.button}>
        регистрация
      </Button>
    </Container>
  );
});

export default Register;
