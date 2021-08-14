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
  Button,
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
      subscribe: false,
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
          value={myState.userName}
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
          value={myState.email}
          autoComplete="current-password"
          onChange={(e) => {
            const { id, value } = e.target;
            store.dispatch({
              type: "UPDATE",
              payload: { [id]: value },
            });
          }}
          error={!myState.email}
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
              id="subscribe"
              checked={myState.subscribe}
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
        <Button type="submit" color="secondary" variant="contained">
          Sign Up
        </Button>
      </form>
    </Container>
  );
};
export default Form;
