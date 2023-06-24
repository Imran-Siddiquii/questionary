import { createSlice } from "@reduxjs/toolkit";

const forumData = {
  accountId: "98767-888-78767",
  username: "tanaypratap",
  name: "Tanay Pratap",
  picUrl: "http://bit.ly/42Zm7tM",
  posts: [
    {
      postId: "36635-787-65778",
      username: "tanaypratap",
      name: "Tanay Pratap",
      picUrl: "http://bit.ly/42Zm7tM",
      post: "Join InvactHQ for MBA",
      postDescription:
        "Non programmers on my timeline. Attention! After placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well. Interested in helping me build this course? Join me at Invact.",
      upvotes: 2,
      downvotes: 50,
      tags: ["mba", "business", "bootcamp"],
      createdAt: "2023-06-24T12:00:00Z",
      comments: [
        {
          commentId: "89898-856-87576",
          username: "ashwin4real",
          picUrl: "http://bit.ly/42Zm7tM",
          likes: 0,
          comment: "Interested",
          createdAt: "2023-06-24T12:01:00Z",
        },
      ],
      isBookmarked: false,
    },
    {
      postId: "36698-343-321232",
      username: "trishajain",
      name: "Trisha Jain",
      picUrl: "http://bit.ly/42Zm7tM",
      post: "Can I learn HTML, CSS, and JavaScript in 1 year?",
      postDescription:
        "I am looking to make my career in web development and want to learn these technologies. Can I learn these in 1 year and get a job?",
      upvotes: 150,
      downvotes: 0,
      tags: ["html", "javascript", "web development"],
      createdAt: "2023-06-24T12:54:00Z",
      comments: [],
      isBookmarked: false,
    },
  ],
};
const userPostSlice = createSlice({
  name: "user_post",
  initialState: {
    isLoading: false,
    posts: forumData,
    isError: false,
  },
  reducers: {
    userPost: (state, { payload }) => {
      state.posts = payload.posts;
    },
    likePost: (state, { payload }) => {
      const likePostCount = state?.posts?.posts?.map((ele) => {
        if (ele.postId == payload) {
          return { ...ele, upvotes: ele.upvotes + 1 };
        }
        return ele;
      });

      state.posts = { ...state.posts, posts: likePostCount };
    },
    dislikePost: (state, { payload }) => {
      const dislikeCount = state?.posts?.posts?.map((ele) => {
        if (ele.postId == payload) {
          return { ...ele, downvotes: ele.downvotes + 1 };
        }
        return ele;
      });

      state.posts = { ...state.posts, posts: dislikeCount };
    },
    addToBookmarkPost: (state, { payload }) => {
      const bookmarkPost = state?.posts?.posts.map((ele) => {
        if (ele.postId === payload) {
          return { ...ele, isBookmarked: true };
        }
        return ele;
      });
      state.posts = { ...state.posts, posts: bookmarkPost };
    },
    removeToBookmarkPost: (state, { payload }) => {
      const unbookmark = state?.posts?.map((ele) => {
        if (ele._id === payload) {
          return { ...ele, isBookmark: false };
        }
        return ele;
      });
      state.posts = unbookmark;
    },
    sort: (state, { payload }) => {
      if (payload === "vote") {
        const sortUpvote = state.posts?.posts?.sort((a, b) => {
          return b.upvotes - b.downvotes - (a.upvotes - a.downvotes);
        });
        state.posts = { ...state.posts, posts: sortUpvote };
      } else {
        const sortUpvote = state.posts?.posts?.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        state.posts = { ...state.posts, posts: sortUpvote };
      }
    },
  },
});

export const { userPost, likePost, dislikePost, addToBookmarkPost, sort } =
  userPostSlice.actions;
export default userPostSlice.reducer;
