import { ChangeEvent, FC, Suspense } from 'react';
import styled from 'styled-components';

import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';
import { UsersList } from 'components/UsersList/UsersList';
import { Heading } from 'components/Heading/Heading';
import { useRecoilState } from 'recoil';
import { searchState } from 'store';


const Container = styled.div`
  min-height: 280px;
  width: 100%;
  max-width: 400px;
`;

const App: FC = () => {
  const [search, setSearch] = useRecoilState(searchState);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <ErrorBoundary>
      <input
        onChange={handleSearchChange}
        value={search}
      />
      <Heading data-cy="main-heading">Users List</Heading>
      <Container data-cy="container">
        <Suspense fallback={<div data-cy="loading">Loading...</div>}>
          <UsersList />
        </Suspense>
      </Container>
    </ErrorBoundary>
  );
};

export default App;
