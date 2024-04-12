import { Button, CardContent, CardHeader, FormHelperText } from "@mui/material";
import styled from "styled-components";

export const Form = styled.form`
  background: var(--white);
  border-radius: unset;
  box-shadow: var(--shadow);
`

export const Header = styled(CardHeader)`
  && {
    width: 100%;
    background-color: var(--green);
    color: var(--white);

    .MuiCardHeader-title {
      font-size: 1.25rem;
      font-weight: 500;
    }
  }
`

export const Content = styled(CardContent)`
  && {
    padding: 1rem;
  }

  && .MuiInput-root:hover::before {
    border-color: var(--green);
  }
`

export const ActionButton = styled(Button)`
  && {
    color: var(--white);
    border-radius: unset;
    padding: .375rem 1rem;
    margin-right: .5rem;
  }
`

export const InputHelperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InputHelper = styled(FormHelperText)`
  && {
    margin: 0;
    margin-top: .125rem;
    display: flex;
    align-items: center;
    gap: .25rem;
  }
`