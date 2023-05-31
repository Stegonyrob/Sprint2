import { PostCard } from "./PostCard";

function PostFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(url + "posts/feed");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        alert("Error de servidor");
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

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
