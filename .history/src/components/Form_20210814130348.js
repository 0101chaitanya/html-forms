import { TextField, makeStyles } from "@material-ui/core";
import { createStore, InputAdornment } from "redux";

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
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
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
          <TextField
            id="standard-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
      </form>
    </div>
  );
};
export default Form;
