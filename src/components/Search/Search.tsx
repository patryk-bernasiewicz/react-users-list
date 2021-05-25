import { ChangeEvent, FC, useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Label = styled.label`
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  opacity: .5;
  pointer-events: none;
`;

const Input = styled.input<{ isEmpty?: boolean }>`
  width: 100%;
  height: 32px;
  background: ${({ theme }) => theme.color.grayLight};
  border: 0;
  border-radius: 16px;
  padding: 0 16px;

  &:focus + ${Label} {
    visibility: hidden;
  }
  
  ${({ isEmpty }) => !isEmpty && css`
    & + ${Label} {
      visibility: hidden;
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
  const [isEmpty, setEmpty] = useState(!value.length);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmpty(!event.target.value.length);
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