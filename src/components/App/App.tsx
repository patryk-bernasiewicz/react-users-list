import { FC, Suspense } from 'react';

import { UsersList } from 'components/UsersList/UsersList';
import { Heading } from 'components/Heading/Heading';

const App: FC = () => (
  <div>
    <Heading>Users List</Heading>
    <Suspense fallback={<div>Loading...</div>}>
      <UsersList />
    </Suspense>
  </div>
);

export default App;
