import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from "../Loader/Loader";
import NavBar from "../NavBar/NavBar";
import { StyledMain } from "./SharedLayout.styled";


export const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <StyledMain>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledMain>
    </>
  );
};
