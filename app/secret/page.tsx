import SignIn from "../components/signIn";

async function getUser() {
  const res = await fetch("https://api.github.com/users/cjdunteman");
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function secret() {
  const data = await getUser();
  console.log(data);
  return (
    <div>
      <SignIn />
    </div>
  );
}
