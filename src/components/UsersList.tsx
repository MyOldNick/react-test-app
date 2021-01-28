//React
import React from "react";
//store
import Store from "../store/Store";
//components
import UserCard from "./UserCard";
//Material UI
import Container from "@material-ui/core/Container";
//types
import { UserType } from "../types/types";

const UsersList: React.FC = (): JSX.Element => {
  return (
    <Container maxWidth="sm">
      {Store.users.map(
        (
          { firstName, lastName, position, number }: UserType,
          index: number
        ) => (
          <UserCard
            key={index}
            firstName={firstName}
            lastName={lastName}
            position={position}
            number={number}
          />
        )
      )}
    </Container>
  );
};

export default UsersList;
