type dataType = {
  name: string;
  email: string;
  theme: string;
  message: string;
};
const data: dataType = {
  name: "",
  email: "",
  theme: "Тема2",
  message: "",
};
type actionsType<T extends { [key: string]: (...args: Array<any>) => any }> =
  ReturnType<T extends { [key: string]: infer U } ? U : never>;
export const mainReducer = (
  state: dataType = data,
  action: actionsType<typeof actions>
) => {
  switch (action.type) {
    case "changeFormData":
      return {
        ...state,
        name: action.name,
        email: action.email,
        theme: action.theme,
        message: action.message,
      };
    default:
      return state;
  }
};
export const actions = {
  changeFormDataAC: (
    name: string,
    email: string,
    theme: string,
    message: string
  ) =>
    ({
      type: "changeFormData",
      name,
      email,
      theme,
      message,
    } as const),
};
