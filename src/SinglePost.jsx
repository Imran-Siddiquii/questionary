import React from "react";
import {
  Avatar,
  Container,
  Grid,
  Icon,
  Paper,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { Sidebar } from "./Sidebar";
import { styled as book } from "styled-components";
import { useSelector } from "react-redux";
import { UserPost } from "./UserPostContainer";
import { useParams } from "react-router-dom";
import { Comment, FavoriteBorder, Share } from "@mui/icons-material";

const CardContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "16px",
  marginBottom: "16px",
});

const HeaderContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "8px",
});

const UserInfoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const PostByTypography = styled(Typography)({
  fontSize: "0.8rem",
});

const BadgesContainer = styled("div")({
  marginBottom: "8px",
});

const Badge = styled("span")({
  marginRight: "8px",
  background: "#5CACFC",
  padding: "3px 10px",
  borderRadius: "4%",
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
  boxShadow: "none !important",
}));
export const SinglePost = () => {
  const { posts } = useSelector((state) => state.posts);
  const { id } = useParams();

  return (
    <StyledContainer maxWidth="xl">
      <Grid container>
        {/* First column */}
        <Grid
          item
          xs={12}
          sm={3}
          style={{ paddingLeft: "0rem" }}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Sidebar />
        </Grid>
        {/* Second column */}

        <Grid item xs={12} sm={6} style={{ padding: "0rem 2rem" }}>
          {posts.posts.map((item, index) =>
            item.postId == id ? <UserPost key={index} item={item} /> : null
          )}
          {posts?.posts?.map((item) =>
            item.postId == id
              ? item?.comments?.length > 0 &&
                item.comments.map((items) => (
                  <>
                    <Grid item xs={10}>
                      <Item>
                        <CardContainer>
                          <HeaderContainer>
                            <UserInfoContainer>
                              <Avatar src={items.picUrl} />
                              <PostByTypography variant="body2">
                                Replyed to @{items?.username} • 1m
                              </PostByTypography>
                            </UserInfoContainer>
                          </HeaderContainer>
                          <Typography variant="h6" gutterBottom>
                            {items.comment}
                          </Typography>
                          <BadgesContainer></BadgesContainer>
                        </CardContainer>
                      </Item>
                    </Grid>
                    <Grid container spacing={0}>
                      <Grid item xs={4}>
                        <Item>
                          <Icon>
                            <Tooltip
                              title="Add To Bookmark"
                              style={{ cursor: "pointer" }}
                            >
                              <FavoriteBorder />
                            </Tooltip>
                          </Icon>
                        </Item>
                      </Grid>
                      <Grid item xs={4}>
                        <Item>
                          <Icon>
                            <Comment style={{ cursor: "pointer" }} />
                          </Icon>
                        </Item>
                      </Grid>
                      <Grid item xs={4}>
                        <Item>
                          <Icon>
                            <Share />
                          </Icon>
                        </Item>
                      </Grid>
                    </Grid>
                  </>
                ))
              : null
          )}
        </Grid>
        {/* Third column */}
        <Grid item xs={12} sm={3} sx={{ display: { xs: "none", sm: "block" } }}>
          {/* <RightSidebar /> */}
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export const StyledContainer = styled(Container)`
  height: 100vh;
  margin-top: 4.5rem;
  padding: 0 !important;
`;
