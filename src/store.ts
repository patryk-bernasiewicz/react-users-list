import { atom, selector } from 'recoil';

import { User } from 'interfaces/user';
import { ALL_USERS_STATE, USERS_STATE, SEARCH_STATE } from 'constants/stores';
import { USERS_URL } from 'constants/api-routes';
import { normalizedIncludes } from 'utils/normalizedIncludes';

export const searchState = atom({
  key: SEARCH_STATE,
  default: '',
});

export const allUsersSelector = selector<User[]>({
  key: ALL_USERS_STATE,
  get: async () => {
    const response = await fetch(USERS_URL);
    if (!response.ok) {
      throw 'Failed fetching users data!';
    }
    return response.json();
  }
})

export const filteredUsersSelector = selector<User[]>({
  key: USERS_STATE,
  get: async ({ get }) => {
    const searchValue = get(searchState);
    const allUsers = get(allUsersSelector);
    
    if (searchValue.length) {
      return allUsers.filter(
        (user) => normalizedIncludes(searchValue, user.username, user.name),
      );
    }

    return allUsers;
  },
});
