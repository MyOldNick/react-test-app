//MobX
import { makeAutoObservable, autorun  } from "mobx";
//types
import { UserType, LoginDataType } from "../types/types";
//utils
import getStorageData from "../utils/checkStorage";

class Store {
  users: Array<UserType> = [];
  user: UserType | undefined = undefined;

  constructor() {
    makeAutoObservable(this);

    autorun(() => {
      this.getUsers()
    })
  }

  getUsers(): any {
    const users = getStorageData();

    if (users?.length) {
      this.users = users;
    }

    return users
  }

  createUser(data: UserType): void {
    const users = getStorageData();

    if (users) {
      users.push(data);

      localStorage.setItem("users", JSON.stringify(users));
    } else {
      const users = [];

      users.push(data);

      localStorage.setItem("users", JSON.stringify(users));
    }

    this.getUsers()
  }

  authUser(data: LoginDataType): number {
    const { login, password } = data;

    const user = this.users?.find((el) => el.login === login);

    if (user?.password === password) {
      this.user = user;

      return 200;
    } else return 400;
  }

  updateUser(data: any) {
    const users  = getStorageData();

    users?.forEach((el: UserType) => {
      
      if(el.login === this.user?.login) {

        Object.assign(el, data)
      }

    })

    localStorage.setItem("users", JSON.stringify(users));

    this.getUsers()
  }
}


export default new Store();
