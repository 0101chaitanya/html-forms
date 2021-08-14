import Produce from "immer";
import {
  TextField,
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
  IconButton,
  makeStyles,
  Container,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { MailOutlineIcon, Visibility, VisibilityOff } from "@material-ui/icons";
import { createStore } from "redux";
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const counterReducer = Produce(
  (
    state = {
      UserName: "",
      email: "",
      password: "",
    },
    action
  ) => {
    switch (action.type) {
      case "SUBMIT":
        console.log(state);
        break;
      case "UPDATE":
        [action.payload.id] = action.payload.value;
        break;
      default:
        break;
    }
  }
);

let store = createStore(counterReducer);
const myState = store.getState();
const Form = (props) => {
  const classes = useStyles();
  store.subscribe(() => console.log(store.getState()));

  return (
    <Container size="sm">
      <form
        noValidate
        autoComplete="off"
        onSubmit={() => {
          store.dispatch({ type: "SUBMIT" });
        }}
      >
        <TextField
          id="UserName"
          label="Username"
          required
          variant="outlined"
          onChange={(e) => {
            const { id, value } = e.target;
            store.dispatch({
              type: "UPDATE",
              payload: { [id]: value },
            });
          }}
          error={!myState.userName}
        />
        <TextField
          id="email"
          label="E-Mail"
          type="email"
          autoComplete="current-password"
          onChange={(e) => {
            const { id, value } = e.target;
            store.dispatch({
              type: "UPDATE",
              payload: { [id]: value },
            });
          }}
        />

        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => {
            const { id, value } = e.target;
            store.dispatch({
              type: "UPDATE",
              payload: { [id]: value },
            });
          }}
        />
        <FormControlLabel
          label="Password"
          control={
            <Input
              id="password"
              type={myState.showPassword ? "text" : "password"}
              value={myState.password}
              onChange={(e) => {
                const { id, value } = e.target;
                store.dispatch({
                  type: "UPDATE",
                  payload: { [id]: value },
                });
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    id="showPassword"
                    aria-label="toggle password visibility"
                    onClick={(e) => {
                      const { id, value } = e.target;
                      store.dispatch({
                        type: "UPDATE",
                        payload: { [id]: value },
                      });
                    }}
                    onMouseDown={(e) => {
                      const { id, value } = e.target;
                      store.dispatch({
                        type: "UPDATE",
                        payload: { [id]: value },
                      });
                    }}
                  >
                    {myState.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={myState.subscribe}
              id="subscribe"
              onChange={(e) => {
                const { id, value } = e.target;
                store.dispatch({
                  type: "UPDATE",
                  payload: { [id]: value },
                });
              }}
              color="primary"
            />
          }
          label="Subscribe"
        />
      </form>
    </Container>
  );
};
export default Form;
