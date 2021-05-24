import { render, screen } from '@testing-library/react';
import RootProvider from 'providers/RootProvider';
import { RecoilRoot, useRecoilValue } from 'recoil';
jest.mock('recoil');

import { UsersList } from './UsersList';

const mockedUsers = [
  {
    id: 1,
    username: 'Lorem',
    name: 'Ipsum',
  },
  {
    id: 2,
    username: 'Foo',
    name: 'Bar',
  },
];

describe('`UsersList` component', () => {
  const mockUseRecoilValue = useRecoilValue as jest.MockedFunction<typeof useRecoilValue>;
  const mockRecoilRoot = RecoilRoot as jest.MockedFunction<typeof RecoilRoot>;

  beforeEach(() => {
    mockUseRecoilValue.mockImplementation(() => mockedUsers);
    mockRecoilRoot.mockImplementation(({ children }) => (
      <>
        {children}
      </>
    ));

    render(<UsersList />, { wrapper: RootProvider });
  })

  it('requests user data', () => {
    expect(mockUseRecoilValue).toHaveBeenCalled();
  });

  it('displays all users in a list', () => {
    mockedUsers.forEach(({ username, name }) => {
      screen.getByText(username);
      screen.getByText(name);
    });
  });
});
