import { HiArrowRightOnRectangle } from "react-icons/hi2";
import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { useLogout } from "../features/authentication/useLogout";
import SpinnerMini from "./SpinnerMini";
import MenuHeader from "./MenuHeader";

const StyledHeader = styled.header`
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.2rem;
`;

function Header() {
  const { logout, isLoading } = useLogout();
  return (
    <StyledHeader>
      <MenuHeader />
      <ButtonIcon disabled={isLoading} onClick={logout}>
        {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
      </ButtonIcon>
    </StyledHeader>
  );
}

export default Header;
