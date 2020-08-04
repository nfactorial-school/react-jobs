import styled from "styled-components";
import { Layout } from "antd";
import Header from "./Header";

const MainContainer = styled(Layout)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow-y: auto;
`;

const InnerLayout = styled(Layout)`
  width: 800px;
`;

const withMainLayout = (Page) => {
  return () => (
    <MainContainer>
      <InnerLayout>
        <Header />
        <Page />
      </InnerLayout>
    </MainContainer>
  );
};

export default withMainLayout;
