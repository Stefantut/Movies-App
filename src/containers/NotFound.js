import React from "react";
import styled from "styled-components";

import TopBar from "../containers/TopBar";
import AppFooter from "./AppFooter";
import ReturnHome from "../components/buttons/ReturnHome";

const StyledNotFound = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.darkgrey};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentSection = styled.section`
  max-width: ${(props) => props.theme.content.medium};
  margin: ${(props) => props.theme.spacers.xxlarge} auto;
`;
const StyledMessage = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.xxlarge};
  user-select: none;
  margin-bottom: ${(props) => props.theme.spacers.xxxlarge};
`;

const NotFound = () => (
  <StyledNotFound>
    <TopBar />
    <ContentSection>
      <StyledMessage>Sorry! Page Not Found!</StyledMessage>
      <ReturnHome />
    </ContentSection>
    <AppFooter />
  </StyledNotFound>
);
export default NotFound;
