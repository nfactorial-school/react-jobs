import Head from "next/head";
import withMainLayout from "../components/withMainMenu";
import styles from "../styles/Home.module.css";
import { useQuery, gql } from "@apollo/client";
import JobPost from "../components/JobPost";

const GET_JOBS = gql`
  query jobs {
    jobs {
      id
      title
      description
      cities {
        id
        name
      }
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_JOBS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log("data", data.jobs);

  return (
    <>
      {data.jobs.map((job) => (
        <JobPost job={job} />
      ))}
    </>
  );
}

export default withMainLayout(Home);
