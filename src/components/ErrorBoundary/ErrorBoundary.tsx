import { Component, ReactNode } from 'react';
import styled from 'styled-components';

const ErrorHeading = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin: 1.5rem 0;
  text-align: center;
`;

const Wrapper = styled.div`
  color: ${({ theme }) => theme.color.ruby};
  margin: 1.5rem 0;
`;

interface Props {
  error?: string | Error;
}

class ErrorBoundary extends Component {
  state = { error: null };

  constructor(props: Props) {
    super(props);
  }

  static getDerivedStateFromError(error?: string | Error): { error?: string } {
    const message = error instanceof Error ? error.message : error;
    return { error: message };
  }

  render(): ReactNode {
    if (this.state.error) {
      return (
        <Wrapper>
          <ErrorHeading>
            Oops!
          </ErrorHeading>
          <div>
            {this.state.error}
          </div>
        </Wrapper>
      )
    }

    return this.props.children; 
  }
}

export { ErrorBoundary };
