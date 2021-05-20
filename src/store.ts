import { selector } from 'recoil';

import { User } from 'interfaces/user';
import { USERS_STATE } from 'constants/stores';
import { USERS_ENDPOINT } from 'constants/api-routes';

export const usersListSelector = selector<User[]>({
  key: USERS_STATE,
  get: async () => {
    try {
      const response = await fetch(USERS_ENDPOINT);
      return response.json();
    } catch (err) {
      throw new Error(err);
    }
  },
});
