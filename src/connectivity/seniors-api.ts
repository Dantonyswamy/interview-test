import { UserDataResponse, User } from '../types/users';

export const getSeniorUsersFromApi = async () => {
  const seniorUsersDataResponse = await fetch('http://localhost:8099/users/seniors')
  const seniorUsersData = await seniorUsersDataResponse.json()
  const requiredSeniorsInformation: User[] = filterData(seniorUsersData)
  return requiredSeniorsInformation
}

export const filterData = (data: Array<UserDataResponse>) => {
  return data
    .map((senior) => ({
      name: senior.name.firstName + ' ' + senior.name.lastName,
      age: senior.age ,
    }))
    .filter((senior) => senior.name != null && senior.age != null)
}