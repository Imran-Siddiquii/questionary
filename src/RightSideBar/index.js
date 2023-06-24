import React from "react";
import {
  RightSidebarContainer,
  RightSidebarItem,
  StickyColumn,
} from "../style";
import { Box, Grid, MenuItem, TextField } from "@mui/material";
import { styled } from "styled-components";
import { sort } from "../UserPostSlice";
import { useDispatch } from "react-redux";

export const RightSidebar = () => {
  const dispatch = useDispatch();
  const currencies = [
    {
      value: "latest",
      label: "Latest",
    },
    {
      value: "vote",
      label: "Most Vote",
    },
  ];
  const handleFollow = (e, id) => {
    e.preventDefault();
    console.log("🚀 ~ file: index.js:29 ~ handleFollow ~ e:", id);
  };
  return (
    <>
      <StickyColumn style={{ boxShadow: "-2px -2px 8px 1px #7fbaf5" }}>
        <RightSidebarContainer>
          <RightSidebarItem>
            <Grid container alignItems="center" mb={3} spacing={2}>
              <Grid item>
                <div>Sort By</div>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    onChange={(e) => dispatch(sort(e.target.value))}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </Grid>
            </Grid>
          </RightSidebarItem>
        </RightSidebarContainer>
      </StickyColumn>
    </>
  );
};
