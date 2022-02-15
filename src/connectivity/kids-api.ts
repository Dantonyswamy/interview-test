import { UserDataResponse, User } from '../types/users';

export const getKidUsersFromApi = async () => {
  const kidUsersDataResponse = await fetch('http://localhost:8099/users/kids')
  const kidUsersData = await kidUsersDataResponse.json()  
  const requiredKidsInformation: User[] = filterData(kidUsersData.data)
  return requiredKidsInformation
}

export const filterData = (data: Array<UserDataResponse>) => {
  return data
    .map((kid) => ({
      name: kid.name.firstName + ' ' + kid.name.lastName,
      age: kid.age ,
    }))
    .filter((kid) => kid.name != null && kid.age != null)
}