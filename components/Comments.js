import useSWR from "swr";
// import Login from "../components/login.js";

export default function Comments() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  function postComment() {}

  const { data, error } = useSWR("/api/comments", fetcher);
  if (error) return <div>Unable to fetch comments.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {/* <Login /> */}
      <form action="">
        <input placeholder="Leave a comment..."></input>
        <button onClick={postComment}>Submit</button>
      </form>
      {error}
      <ul>
        {data.comments?.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
}
