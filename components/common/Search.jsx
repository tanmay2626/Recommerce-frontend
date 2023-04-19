import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  // eslint-disable-next-line no-empty-pattern

  return (
    <Paper
      elevation={0}
      component="form"
      sx={{
        bgcolor: "#F5F5F5",
        display: { xs: "none", md: "flex", lg: "flex" },
        alignItems: "center",
        width: { xs: 120, md: 200 },
        borderRadius: 2,
        mr: 4,
        p: "5px 10px",
      }}
    >
      <InputBase
        sx={{
          flex: 1,
          fontSize: { xs: 0.8 + "rem", md: 1 + "rem" },
          p: "5px",
        }}
        placeholder="Search"
        inputProps={{ "aria-label": "search items" }}
      />
      <IconButton type="button" sx={{ p: "2px" }} aria-label="search">
        <SearchIcon fontSize="small" />
      </IconButton>
    </Paper>
  );
};

export default Search;
