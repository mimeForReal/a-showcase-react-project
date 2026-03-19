import styled from "styled-components";
import Spinner from "./Spinner";

import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectRoute({ children }) {
  const navigate = useNavigate();
  //1.Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  //3.If there is no authenticated user redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  //2.Load a spinner while loading
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4.If there is a user render the app
  if (isAuthenticated) return children;
}

export default ProtectRoute;
