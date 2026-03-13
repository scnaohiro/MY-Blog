import PostCard from "./components/PostCard";
import { getPosts } from "./lib/posts";

export default async function Home() {
  const posts = await getPosts()

  return (
    <main>
      {posts.map((post) => (
        <PostCard key={post.id} id={post.id} text={post.text} title={post.title}/>
      ))}
    </main>
  );
}
