import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import { Search } from './Search';

describe('`Search` component', () => {
  const changeMock = jest.fn();

  beforeEach(() => {
    render(
      <Search
        id="ipsum"
        label="Lorem"
        onChange={changeMock}
        value=""
      />
    );
  });

  afterEach(cleanup);

  it('has correct label text', () => {
    screen.getByLabelText(/Lorem/i);
  });

  it('calls onChange input', () => {
    const value = 'Lorem ipsum';
    const input = screen.getByRole('search');
    if (input) {
      fireEvent.change(input, { target: { value } });
      expect(changeMock).toHaveBeenCalledWith(value);
    }
  });
});
