import React from 'react';
import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  FormControlLabel,
  Button,
  Grid,
  RadioGroup,
  FormControl,
  MenuItem,
} from '@mui/material';
import CustomTextField from '../custom-elements/CustomTextField';
import CustomSelect from '../custom-elements/CustomSelect';
import CustomCheckbox from '../custom-elements/CustomCheckbox';
import CustomRadio from '../custom-elements/CustomRadio';
import CustomFormLabel from '../custom-elements/CustomFormLabel';

const numbers = [
  {
    value: 'one',
    label: 'One',
  },
  {
    value: 'two',
    label: 'Two',
  },
  {
    value: 'three',
    label: 'Three',
  },
  {
    value: 'four',
    label: 'Four',
  },
];

const FbNewNotifications = () => {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [value, setValue] = React.useState('');

  const handleChange2 = (event) => {
    setValue(event.target.value);
  };

  const [number, setNumber] = React.useState('');

  const handleChange3 = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Checkbox */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Card
        sx={{
          p: 0,
        }}
      >
        <Box
          sx={{
            padding: '15px 30px',
          }}
          display="flex"
          alignItems="center"
        >
          <Box flexGrow={1}>
            <Typography fontWeight="500" variant="h4">
              Compose Email
            </Typography>
          </Box>
        </Box>
        <Divider />
        <CardContent
          sx={{
            padding: '30px',
          }}
        >
          <form>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="default-value"
            >
              Email Subject
            </CustomFormLabel>
            <CustomTextField
              id="title"
              variant="outlined"
              fullWidth
              size="small"
            />
            <CustomFormLabel htmlFor="outlined-multiline-static">Email (mention ##name## as variable for customer name)</CustomFormLabel>

            <CustomTextField
              id="outlined-multiline-static"
              multiline
              rows={10}
              variant="outlined"
              fullWidth
              size="small"
              sx={{
                mb: 2,
              }}
            />
            <div>
              <Button color="primary" variant="contained">
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FbNewNotifications;
