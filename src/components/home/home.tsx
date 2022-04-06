import styled from "styled-components";

type propsType = {
  name: string;
  email: string;
  theme: string;
  buttonHandler: (src: string) => void;
};
const StyledButton = styled.button`
  width: 20vw;
`;
const StyledArticle = styled.article`
  margin: 15vh 0 0 7vw;
  p {
    margin-bottom: 5vh;
  }
`;
export const Home = (props: propsType) => (
  <StyledArticle>
    <h1>form data:</h1>
    {!props.name ? (
      <>
        <p>Форма еще не заполнена</p>
        <StyledButton
          onClick={() => {
            props.buttonHandler("form");
          }}
        >
          Заполнить форму
        </StyledButton>
      </>
    ) : (
      <>
        <h2>Фио: {props.name}</h2>
        <h2>Email:{props.email}</h2>
        <h2>Тема:{props.theme}</h2>
        <StyledButton
          onClick={() => {
            props.buttonHandler("form/edit");
          }}
        >
          Изменить
        </StyledButton>
      </>
    )}
  </StyledArticle>
);
