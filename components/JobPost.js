import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import marked from "marked";

const MyCard = styled(Card)`
  margin-top: 25px;
  margin-bottom: 25px;
`;

function JobPost({ job }) {
  const jobsActions = () => {
    return job.cities.map((city) => <div>{city.name}</div>);
  };

  return (
    <MyCard key={job.id} title={job.title} actions={jobsActions()}>
      <div dangerouslySetInnerHTML={{ __html: marked(job.description) }}></div>
    </MyCard>
  );
}

export default JobPost;
