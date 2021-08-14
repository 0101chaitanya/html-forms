import {
  TextField,
  FormControl,
  InputAdornment,
  makeStyles,
  InputLabel,
  Input,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import { createStore } from "redux";

function counterReducer(state = { value: 0 }, action) {
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

const useStyles = makeStyles({
  root: {},
});
let store = createStore(counterReducer);
store.subscribe(() => console.log(store.getState()));
const Form = (props) => {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Required"
          required
          variant="outlined"
          defaultValue="Hello World"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <FormControl className="">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </div>
  );
};
export default Form;
