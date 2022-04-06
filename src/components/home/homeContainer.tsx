import { connect, ConnectedProps } from "react-redux";
import { Home } from "./home";
import { storeType } from "../../store/store";
import { useNavigate } from "react-router-dom";
type propsType = ConnectedProps<typeof homeConnector>;

const MSTP = (state: storeType) => {
  return {
    name: state.name,
    email: state.email,
    theme: state.theme,
  };
};
const WithHome = (props: propsType) => {
  const navigation = useNavigate();
  const buttonHandler = (src: string) => {
    navigation(`/${src}`);
  };
  return (
    <Home
      buttonHandler={buttonHandler}
      name={props.name}
      email={props.email}
      theme={props.theme}
    />
  );
};
const homeConnector = connect(MSTP);
export const HomeContainer = homeConnector(WithHome);
