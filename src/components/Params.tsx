//React
import React, {  useState, BaseSyntheticEvent } from "react";
//store
import Store from '../store/Store'
//components
import Forms from "./Forms";
//MaterialUI
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
//styles
import useStyles from '../styles/RegisterAndLogin' //было лень делать отдельно факйл ради кнопки)))00

const Params: React.FC = (): JSX.Element => {
  const [formsData, setFormsData] = useState<any>({});

  const styles = useStyles()

  const onChange = (event: BaseSyntheticEvent): void => {
    const { name, value } = event.target;

    const obj = formsData;
    obj[name] = value;

    setFormsData(obj);
  };

  const updateUser = () => {
    
    if(formsData.password === formsData.confirmPassword) {
      Store.updateUser(formsData)
      alert('Данные обновлены')
    } else alert('Проверьте пароли')

  }

  return (
    <Container maxWidth="sm">
      <Forms formsData={formsData} onChange={onChange} />
      <Button onClick={updateUser} variant="contained" color="primary" className={styles.button}>
        Обновить
      </Button>
    </Container>
  );
};

export default Params;
