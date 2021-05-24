import { ChangeEvent, FC, useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Label = styled.label`
  position: absolute;
`;

const Input = styled.input<{ isEmpty?: boolean }>`
  ${({ isEmpty }) => isEmpty && css`
    & + ${Label} {
      opacity: .5;
    }
  `}
`;

interface Props {
  id: string;
  label: string;
  onChange: (value: string) => void;
  value: string;
}

export const Search: FC<Props> = ({
  id,
  label,
  onChange,
  value,
  ...rest
}) => {
  const [isEmpty, setEmpty] = useState(true);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmpty(Boolean(event.target.value.length));
    onChange(event.target.value);
  };

  return (
    <Wrapper>
      <Input
        id={id}
        onChange={handleChange}
        role="search"
        value={value}
        isEmpty={isEmpty}
        {...rest}
      />
      <Label htmlFor={id}>
        {label}
      </Label>
    </Wrapper>
  );
};