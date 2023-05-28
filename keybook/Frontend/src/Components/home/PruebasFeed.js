// import React from "react";
// import PostCard from "./PostCard";
// import { useState, useEffect } from "react";

// export default function PostFeed(props) { 
//   const [sampleData, setSampleData] = useState([]);

//   useEffect(() => {
//     setSampleData(props.sampleData)
//   }, []);

//   function handleSort(){
//     const sortedData = [...sampleData].sort((a,b) =>{
//       return a.first > b.first? 1 : -1;
//     })
//     setSampleData(sortedData)
//   }

//   const postList =

//   return (
//     <div>
//       {/* {posts.slice(0, 5).map((post) => ( */}
//         <PostCard />
//       {/* ))} */}
//     </div>
//   );
// }


// const sortPosts = () => {
   
//   posts.post_name.sort((a,b) => {
//       return b - a;
//   });
//   setPosts(posts);
// }

// const [categories, setCategories] = useState("")


// class PostFeed extends Component() {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: [
//         <PostCard />
//       ]
//     }
//   }

//   render() {
//     const posts = this.state.posts.map((post, index) =>
//       <PostCard key={index} value={post} />
//     );
//     return (
//       <div className="feed">
//         {posts}
//       </div>
//     )
//   }
// }

// export default PostFeed;