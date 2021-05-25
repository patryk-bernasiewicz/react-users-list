import { FC, Suspense } from 'react';
import styled from 'styled-components';

import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';
import { UsersList } from 'components/UsersList/UsersList';
import { Heading } from 'components/Heading/Heading';
import { useRecoilState } from 'recoil';
import { searchState } from 'store';
import { Search } from 'components/Search/Search';


const Container = styled.div`
  min-height: 280px;
  width: 100%;
  max-width: 400px;
`;

const ListWrapper = styled.div`
  min-height: 280px;
`;

const App: FC = () => {
  const [search, setSearch] = useRecoilState(searchState);

  return (
    <ErrorBoundary>
      <Container data-cy="container">
        <Search
          id="search"
          label="Search by user name..."
          onChange={setSearch}
          value={search}
          data-cy="search"
        />
        <Heading data-cy="main-heading">Users List</Heading>
        <ListWrapper>
          <Suspense fallback={<div data-cy="loading">Loading...</div>}>
            <UsersList />
          </Suspense>
        </ListWrapper>
      </Container>
    </ErrorBoundary>
  );
};

export default App;
