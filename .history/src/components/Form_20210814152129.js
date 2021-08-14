
import  Produce fron "immer";
import {
  TextField,
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
  IconButton,
  makeStyles,
  Container,
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

function counterReducer(state = {}, action) {
  switch (action.type) {
    case "counter/incremented":
      return {
        value: state.value + 1,
      };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

let store = createStore(counterReducer);
store.subscribe(() => console.log(store.getState()));
const myState = store.getState();
const Form = (props) => {
  const classes = useStyles();

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
        <FormControl className="PasswordControl">
          <InputLabel htmlFor="password">Password</InputLabel>
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
        </FormControl>
      </form>
    </Container>
  );
};
export default Form;
