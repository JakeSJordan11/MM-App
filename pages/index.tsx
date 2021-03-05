import * as React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_USERS = gql`
  query users {
    users {
      id
      name
      moods {
        id
        title
        mood
        intesity
      }
    }
  }
`;

function HomePage() {
  const { data, loading, error } = useQuery(QUERY_USERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 1)}</pre>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <div>Did we get data?</div>
      <pre>{JSON.stringify(data, null, 1)}</pre>
      <div>
        {data.users.map((user) => (
          <div
            key={user.id}
            style={{ padding: 4, boxShadow: "1px 1px 3px rgba(0,0,0,0.3)" }}
          >
            <div>{user.name} felt</div>
            <div>
              {user.moods.map((mood) => (
                <div key={mood.id}>
                  {mood.mood} at a level of {mood.intesity}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
