// App.tsx
import React from 'react';
import styled from 'styled-components';

type Props = {}

export default function App () {
  return (
    <div>
      <TestButton>Test</TestButton>
    </div>
  )
}

const TestButton = styled.button`
  background-color: skyblue;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
`;
