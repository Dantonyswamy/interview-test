import { UserDataResponse, User } from '../types/users';

export const getAdultUsersFromApi = async () => {
  const adultUsersDataResponse = await fetch('http://localhost:8099/users/adults')
  const adultUsersData = await adultUsersDataResponse.json()  
  const requiredAdultsInformation: User[] = filterData(adultUsersData.data)
  return requiredAdultsInformation
}

export const filterData = (data: Array<UserDataResponse>) => {
  return data
    .map((adult) => ({
      name: adult.name.firstName + ' ' + adult.name.lastName,
      age: adult.age ,
    }))
    .filter((adult) => adult.name != null && adult.age != null)
}