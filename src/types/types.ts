import {BaseSyntheticEvent} from 'react'

export type UserType = {
    firstName: string,
    lastName: string,
    givenName: string,
    position: string,
    number: string,
    login: string,
    password: string,
    confirmPassword: string
}

export type LoginDataType = {
    login: string,
    password: string
}

export type UserCardProps = {
    firstName: string,
    lastName: string,
    position: string,
    number: string
}

export type FormsProps = {
    onChange: (event: BaseSyntheticEvent) => void,
    formsData: UserType
}