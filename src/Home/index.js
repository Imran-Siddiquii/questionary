import styled from "styled-components";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Sidebar } from "../Sidebar";
import { RightSidebar } from "../RightSideBar";
import { UserPost } from "../UserPostContainer";
import { useSelector } from "react-redux";

export const Home = () => {
  const { posts } = useSelector((state) => state.posts);
  console.log("🚀 ~ file: index.js:11 ~ Home ~ posts:", posts);

  return (
    <div>
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
            {posts.posts.map((item, index) => (
              <UserPost key={index} item={item} />
            ))}
          </Grid>
          {/* Third column */}
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <RightSidebar />
          </Grid>
        </Grid>
      </StyledContainer>
    </div>
  );
};

const StyledContainer = styled(Container)`
  height: 100vh;
  margin-top: 4.5rem;
  padding: 0 !important;
`;
