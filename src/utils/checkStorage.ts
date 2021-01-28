//types
import {UserType} from '../types/types'

const getStorageData = (): Array<UserType> | undefined => {
    const json: any = localStorage.getItem("users");

    const users = JSON.parse(json);

    return users
}

export default getStorageData