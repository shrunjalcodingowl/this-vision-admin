import * as React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { alpha } from "@mui/material/styles";
import Swal from "sweetalert2";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Paper,
  IconButton,
  Tooltip,
  FormControlLabel,
  Card,
  CardContent,
  Typography,
  Chip,
  Avatar,
  Divider,
  Button,
  Grid,
  RadioGroup,
  FormControl,
  MenuItem,
} from "@mui/material";
import {
    MobileDateTimePicker,
    LocalizationProvider,
    DateTimePicker,
    DatePicker,
    TimePicker,
  } from '@mui/lab';
  
  import AdapterDateFns from '@mui/lab/AdapterDateFns';

// import CustomFormLabel from '../../../src/components/forms/custom-elements/CustomFormLabel';
import CustomTextField from '../../../../src/components/forms/custom-elements/CustomTextField';
import NextLink from "next/link";
import { visuallyHidden } from "@mui/utils";
import FeatherIcon from "feather-icons-react";
import Bookings from "../../../../data/bookings/data";
// import CustomCheckbox from "../../../src/components/forms/custom-elements/CustomCheckbox";
// import CustomSwitch from "../../../src/components/forms/custom-elements/CustomSwitch";

const rows = Bookings;

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const handleBlock = (row) => {
  Swal.fire({
    title: "Are you sure?",
    text: `Are you sure to cancel order ${row.order_id}?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Cancelled!", `${row.order_id} has been cancelled.`, "success");
    }
  });
};

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Customer",
  },
  {
    id: "order_id",
    numeric: false,
    disablePadding: false,
    label: "Order ID",
  },
  {
    id: "addresses",
    numeric: false,
    disablePadding: false,
    label: "Addresses",
  },
  {
    id: "credits",
    numeric: false,
    disablePadding: false,
    label: "Credits",
  },
  {
    id: "duration",
    numeric: false,
    disablePadding: false,
    label: "Duration",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "action",
    numeric: false,
    disablePadding: false,
    label: "Actions",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;
    const [value, setValue] = React.useState(new Date());
    const [value2, setValue2] = React.useState(() => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow;
    });
    
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: " Customer List",
  },
];

const BookingsLists = () => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box>
      <Card>
        <CardContent>
        <Typography variant="h3" gutterBottom>
          Recent Bookings
        </Typography>
          <Box>
            <Paper sx={{ width: "100%", mb: 2 }}>
              <EnhancedTableToolbar numSelected={selected.length} />
              <TableContainer>
                <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={dense ? "small" : "medium"}
                >
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                  />
                  <TableBody>
                    {stableSort(rows, getComparator(order, orderBy))
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        const isItemSelected = isSelected(row.name);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow
                            hover
                            tabIndex={-1}
                            key={row.name}
                          >
                            {/* <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                          >
                            {row.name}
                          </TableCell> */}
                            <TableCell>
                              <Box display="flex" alignItems="center">
                                <Box>
                                  <Typography variant="h6" fontWeight="600">
                                    {row.name}
                                  </Typography>
                                  <Typography
                                    color="textSecondary"
                                    variant="subtitle2"
                                  >
                                    {row.pname}
                                  </Typography>
                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Typography
                                color="textSecondary"
                                sx={{
                                  fontSize: "h6.fontSize",
                                }}
                              >
                                {row.order_id}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                color="textSecondary"
                                sx={{
                                  fontSize: "h6.fontSize",
                                }}
                              >
                                {row.addresses}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                color="textSecondary"
                                sx={{
                                  fontSize: "h6.fontSize",
                                }}
                              >
                                {row.credits}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                color="textSecondary"
                                sx={{
                                  fontSize: "h6.fontSize",
                                }}
                              >
                                {row.duration}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Chip
                                sx={{
                                  pl: "4px",
                                  pr: "4px",
                                  backgroundColor: "green",
                                  color: "#fff",
                                }}
                                size="small"
                                label="Completed"
                              ></Chip>
                            </TableCell>
                            <TableCell>
                              <Tooltip title="View">
                                <IconButton>
                                  <NextLink href="/apps/customers/edit">
                                    <FeatherIcon icon="eye" width="18" color="#1BA8E2" />
                                  </NextLink>
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Cancel Order">
                                <IconButton onClick={() => handleBlock(row)}>
                                  <FeatherIcon icon="slash" width="18" color="red" />
                                </IconButton>
                              </Tooltip>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: (dense ? 33 : 53) * emptyRows,
                        }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BookingsLists;
