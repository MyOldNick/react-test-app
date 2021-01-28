//React
import React from "react";
//types
import { UserCardProps } from "../types/types";
//styles
import useStyles from "../styles/UserCard";

const UserCard: React.FC<UserCardProps> = ({
  firstName,
  lastName,
  position,
  number,
}): JSX.Element => {
  
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <h4 className={styles.text}>
        Имя: {firstName} {lastName}
      </h4>
      <p className={styles.text}>Должность: {position}</p>
      <p className={styles.text}>Номер: {number}</p>
    </div>
  );
};

export default UserCard;
