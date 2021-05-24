import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { filteredUsersSelector } from 'store';

const List = styled.ol`
  padding: 0;
  margin: 0;
`;

const Element = styled.li`
  color: ${({ theme }) => theme.color.gray};
  font-size: .85rem;
  margin: 0.5rem 0;
`;

const UserName = styled.span`
  color: ${({ theme }) => theme.color.grayDarker};
  font-size: 1.05rem;
  display: inline-block;
  margin: 0 .5rem 0 .25rem;
`;

const UserHandler = styled.span`
  &::before {
    content: "@";
    display: inline-block;
    margin-right: 0.0625rem;
    transform: translateY(-1px);
  }
`;

const UsersList: FC = () => {
  const users = useRecoilValue(filteredUsersSelector);

  return (
    <List data-cy="users-list">
      {users && users.map((user) => (
        <Element key={user.id}>
          <UserName>
            {user.name}
          </UserName>
          <UserHandler>
            {user.username}
          </UserHandler>
        </Element>
      ))}
    </List>
  );
};

export { UsersList };
