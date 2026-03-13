import PostCard from "./components/PostCard";
import { posts } from "./lib/posts";


export default function Home() {

  return (
    <main>
      {posts.map((post) => (
        <PostCard key={post.id} id={post.id} text={post.text} title={post.title}/>
      ))}
    </main>
  );
}
