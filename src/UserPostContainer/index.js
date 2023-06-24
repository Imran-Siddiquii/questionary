import React from "react";
import {
  ArrowDownward,
  ArrowUpward,
  Bookmark,
  BookmarkAddOutlined,
  Comment,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Grid,
  Paper,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { addToBookmarkPost, dislikePost, likePost } from "../UserPostSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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

const IconContainer = styled("div")({
  display: "block",
  textAlign: "center",
  margin: "20px auto",
});

const UserInfoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const AvatarImage = styled(Avatar)({
  marginRight: "8px",
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

const Icon = styled("div")({
  textAlign: "center",
  flex: "1",
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // backgroundColor: "green",
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
  boxShadow: "none !important",
}));
export const UserPost = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <Item>
                <IconContainer>
                  <ArrowUpward
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(likePost(item.postId))}
                    color={item.upvotes - item.downvotes > 0 ? "primary" : ""}
                  />
                  <Typography variant="body2">
                    {item.upvotes - item.downvotes}
                  </Typography>
                  <ArrowDownward
                    style={{ cursor: "pointer" }}
                    color={item.upvotes - item.downvotes < 0 ? "primary" : ""}
                    onClick={() => dispatch(dislikePost(item.postId))}
                  />
                </IconContainer>
              </Item>
            </Grid>
            <Grid item xs={10}>
              <Item>
                <CardContainer>
                  <HeaderContainer>
                    <UserInfoContainer>
                      <Avatar src={item.picUrl} />
                      <PostByTypography variant="body2">
                        Posted by @{item?.username} • 1m
                      </PostByTypography>
                    </UserInfoContainer>
                  </HeaderContainer>
                  <Typography variant="h6" gutterBottom>
                    {item.post}
                  </Typography>
                  <BadgesContainer>
                    {item.tags.map((tag, index) => (
                      <Badge key={index}>{tag}</Badge>
                    ))}
                  </BadgesContainer>
                  <Typography variant="body1">
                    {item.postDescription}
                  </Typography>
                </CardContainer>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Item>
                <Icon>
                  <Comment
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/post/" + item.postId);
                    }}
                  />
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
            <Grid item xs={4}>
              <Item>
                <Icon>
                  {" "}
                  <span
                    style={
                      {
                        // width: "16px",
                        // height: "16px",
                        // marginRight: "4px",
                      }
                    }
                  >
                    {item?.isBookmarked ? (
                      <Tooltip title="BookMarked">
                        <Bookmark color="primary" />
                      </Tooltip>
                    ) : (
                      <Tooltip
                        title="Add To Bookmark"
                        style={{ cursor: "pointer" }}
                      >
                        <BookmarkAddOutlined
                          color="primary"
                          onClick={() =>
                            dispatch(addToBookmarkPost(item.postId))
                          }
                        />
                      </Tooltip>
                    )}
                  </span>
                </Icon>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};
