import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useStateValue } from "@/libs/StateProvider";
import Header from "@/components/layout/Header";

const Search = () => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  const handleChange = (e) => {
    dispatch({
      type: "SET_SEARCH",
      item: e.target.value,
    });
  };

  return (
    <Paper
      elevation={0}
      component="form"
      sx={{
        bgcolor: "#F5F5F5",
        display: "flex",
        alignItems: "center",
        width: { xs: 240, md: 200 },
        borderRadius: 2,
        mr: 4,
        p: "5px 10px",
      }}
    >
      <InputBase
        sx={{
          flex: 1,
          fontSize: 1 + "rem",
          p: "5px",
        }}
        placeholder="Search"
        onChange={handleChange}
        inputProps={{ "aria-label": "search items" }}
      />
      <IconButton type="button" sx={{ p: "2px" }} aria-label="search">
        <SearchIcon fontSize="small" />
      </IconButton>
    </Paper>
  );
};

export default Search;
