import React, { useEffect } from 'react';
import styled from 'styled-components'
import colors from 'src/ui/globalStyled/variables';

const StyledFormGroup = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
`;

function FormGroup({ children }: { children: React.ReactNode }) {
  return (
    <StyledFormGroup>
        { children }
    </StyledFormGroup>
  );
}

export default FormGroup;
