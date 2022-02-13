import { User } from './users';

export interface KidsState {
  kids: User[]
}

export interface KidsDataSuccessPayload {
  kidsData: User[]
}
