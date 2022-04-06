import styled from "styled-components";

type propsType = {
  name: string;
  email: string;
  theme: string;
  message: string;
  sendHandler: () => void;
  resetHandler: () => void;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setTheme: (theme: string) => void;
  setMessage: (Message: string) => void;
  options: Array<JSX.Element>;
};
const StyledButton = styled.button<{ buttPos: number }>`
  width: ${(props) => (props.buttPos === 1 ? "11vw" : "18vw")};
  background-color: ${(props) => (props.buttPos === 1 ? "#BDBDBD" : "#13C98A")};
  grid-column-start: ${(props) => props.buttPos};
  grid-column-end: ${(props) => props.buttPos + 1};
`;
const StyledSection = styled.section`
  background-color: #474747;
  height: 88vh;
  display: block;
  position: relative;
  padding: 12vh 0 0 30vw;
`;
const StyledArticle = styled.article`
  width: fit-content;
  background-color: white;
  padding: 4vmin;
`;
const StyledForm = styled.form`
  display: grid;
  grid-row-gap: 2.3vh;
`;
const StyledInput = styled.input<{ isErr: boolean }>`
  height: 7vh;
  width: 30vw;
  padding: 1vh 0 0 1vw;
  border-radius: 6px;
  border: 2px solid ${(props) => (props.isErr ? "red" : "green")};
  font-size: 2vmin;
  outline: none;
  &&:hover,
  &&:focus,
  &&:active {
    border-color: #c0bad5;
  }
`;
const StyledSelect = styled.select`
  height: 8vh;
  font-size: 2vmin;
  width: 30.5vw;
  border-radius: 6px;
  grid-column-start: 1;
  grid-column-end: 3;
  outline: none;
  &&:hover,
  &&:focus,
  &&:active {
    border-color: #c0bad5;
  }
`;
const StyledTextarea = styled.textarea`
  height: 14vh;
  width: 30vw;
  font-size: 2vmin;
  border-radius: 6px;
  grid-column-start: 1;
  grid-column-end: 3;
  outline: none;
  &&:hover,
  &&:focus,
  &&:active {
    border-color: #c0bad5;
  }
`;
const Before = styled.label<{ isFill: boolean }>`
  position: absolute;
  margin-top: 3.3vh;
  margin-left: -30vw;
  transition: 0.2s ease;
  color: grey;
  ${(props) =>
    props.isFill
      ? "font-size: 1.6vmin; margin-left: -30.3vw; margin-top: 1vh;"
      : ""}
`;
const InputBlock = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
`;
const Icon = styled.label<{ isValide: boolean }>`
  position: absolute;
  background-color: ${(props) => (props.isValide ? "#13C98A" : "#F8478D")};
  border-radius: 5vmin;
  width: 3.5vmin;
  height: 3.5vmin;
  margin: 2.4vh 0 0 -3vw;
  text-align: center;
  font-size: 3vmin;
  color: white;
`;
const H1 = styled.h1`
  font-size: 3vmin;
  grid-column-start: 1;
  grid-column-end: 3;
`;
export const Form = (props: propsType) => (
  <StyledSection>
    <StyledArticle>
      <StyledForm onSubmit={props.sendHandler}>
        <H1>Форма для тебя</H1>
        <InputBlock>
          <StyledInput
            isErr={props.name === ""}
            id={"name"}
            value={props.name}
            onChange={(e) => {
              props.setName(e.target.value);
            }}
            required
          />

          {props.name !== "" ? (
            <Icon htmlFor="before" isValide={true}>
              ✓
            </Icon>
          ) : (
            <Icon htmlFor="before" isValide={false}>
              !
            </Icon>
          )}
          <Before isFill={props.name !== ""} id="beforeName" htmlFor="name">
            Представьтесь пожалуйста
          </Before>
        </InputBlock>
        <InputBlock>
          <StyledInput
            isErr={!props.email.includes("@")}
            id={"email"}
            value={props.email}
            onChange={(e) => {
              props.setEmail(e.target.value);
            }}
            type="email"
            required
          />

          {props.email.includes("@") ? (
            <Icon htmlFor="email" isValide={true}>
              ✓
            </Icon>
          ) : (
            <Icon htmlFor="before" isValide={false}>
              !
            </Icon>
          )}
          <Before isFill={props.email !== ""} id="beforeEmail" htmlFor="email">
            Введите ваш e-mail
          </Before>
        </InputBlock>
        <StyledSelect
          onChange={(e) => {
            props.setTheme(e.target.value);
          }}
          value={props.theme}
          required
        >
          {props.options}
        </StyledSelect>
        <StyledTextarea
          value={props.message}
          onChange={(e) => {
            props.setMessage(e.target.value);
          }}
          name=""
          id=""
          placeholder="Введите сообщение"
        />
        <StyledButton buttPos={1} type={"button"} onClick={props.resetHandler}>
          Сбросить
        </StyledButton>
        <StyledButton buttPos={2} type={"submit"}>
          Отправить
        </StyledButton>
      </StyledForm>
    </StyledArticle>
  </StyledSection>
);
