import { connect, ConnectedProps } from "react-redux";
import { storeType } from "../../store/store";
import { Form } from "./form";
import { useState } from "react";
import { actions } from "../../store/mainReducer";
import { useNavigate } from "react-router-dom";
type propsType = ConnectedProps<typeof formConnector>;
const MSTP = (state: storeType) => ({
  name: state.name,
  email: state.email,
  message: state.message,
  theme: state.theme,
});

const WithForm = (props: propsType) => {
  const navigate = useNavigate();
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [message, setMessage] = useState(props.message);
  const [theme, setTheme] = useState(props.theme);
  const sendHandler = () => {
    props.changeFormAC(name, email, theme, message);
    navigate("/");
  };
  const resetHandler = () => {
    setName("");
    setEmail("");
    setMessage("");
    setTheme("Тема1");
  };
  const themes = ["Тема1", "Тема2", "Тема3", "Тема4"];
  const options = themes.map((e, i) => (
    <option key={i} value={e}>
      {e}
    </option>
  ));
  return (
    <Form
      theme={theme}
      name={name}
      email={email}
      message={message}
      setEmail={setEmail}
      setMessage={setMessage}
      setName={setName}
      setTheme={setTheme}
      sendHandler={sendHandler}
      resetHandler={resetHandler}
      options={options}
    />
  );
};
const formConnector = connect(MSTP, { changeFormAC: actions.changeFormDataAC });
const FormContainer = formConnector(WithForm);
export default FormContainer;
