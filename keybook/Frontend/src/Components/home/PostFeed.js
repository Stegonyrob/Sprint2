import { PostCard } from "./PostCard";

function PostFeed(props) {
  const posts = props.posts.slice(0, 4);

  return (
    <>
      {posts.map((post) => (
        <PostCard
          key={post.post_id}
          linkId={post.post_id_user}
          avatar={`${post.profile_picture}`}
          name={post.name}
          lastName={post.last_name}
          content={post.post_content}
        />
      ))}
    </>
  );
}

export default PostFeed;
