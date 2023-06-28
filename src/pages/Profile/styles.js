import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 144px;
    padding: 64px 144px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    a {
      color: ${({ theme }) => theme.COLORS.ROSE};
    }
  }
`
export const UserImg = styled.div`
  position: relative;
  margin: -100px auto;
  width: 200px;
  height: 200px;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: 0;
    right: 5px;

    width: 60px;
    height: 60px;
    background-color: red;
    border-radius: 50%;

    > input {
    display: none;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin: 133px auto;
  max-width: 340px;

  > div:nth-child(2) {
    margin-bottom: 16px;
  }

  > button {
    margin-top: 16px;
  }
`
