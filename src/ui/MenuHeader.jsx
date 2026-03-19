import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import UserAvatar from "../features/authentication/UserAvatar";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const StyledMenuHeader = styled.ul`
  display: flex;
  gap: 1.6rem;
`;

function MenuHeader() {
  const navigate = useNavigate();
  return (
    <StyledMenuHeader>
      <li>
        <UserAvatar />
      </li>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
    </StyledMenuHeader>
  );
}

export default MenuHeader;
