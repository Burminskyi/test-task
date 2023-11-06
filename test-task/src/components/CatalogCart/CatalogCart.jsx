import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  FavoriteBtn,
  StyledCarInfoWrap,
  StyledCarTagsWrap,
  StyledCartBtn,
  StyledCartImage,
  StyledCatalogCart,
} from "./CatalogCart.styled";
import { ModalPage } from "../ModalPage/ModalPage";
import {
  removeFromFavoriteCars,
  setFavoriteCars,
} from "../../redux/Cars/slice";
import { selectFavoriteCars } from "../../redux/Cars/selectors";

export const CatalogCart = ({ data }) => {
  console.log("data: ", data);
  const favoriteCars = useSelector(selectFavoriteCars);
  const [showModal, setShowModal] = useState(false);

  const isInFavorites =
    favoriteCars &&
    favoriteCars.some((favoriteCar) => favoriteCar.id === data.id);

  const dispatch = useDispatch();

  const onModal = () => {
    setShowModal((prev) => !prev);
  };

  const addToLibrary = (data) => {
    dispatch(setFavoriteCars(data));
  };

  const removeFromLibrary = (id) => {
    dispatch(removeFromFavoriteCars(id));
  };

  const handleClick = (e) => {
    e.preventDefault();
    addToLibrary(data);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    removeFromLibrary(data.id);
  };

  return (
    <>
      <StyledCatalogCart>
        <StyledCartImage src={data.img} alt="car" />
        <StyledCarInfoWrap>
          <p>{`${data.make} ${data.model}, ${data.year}`}</p>
          <p>{data.rentalPrice}</p>
        </StyledCarInfoWrap>
        <StyledCarTagsWrap>
          <p>{data.address}</p>
          <p>{data.rentalCompany}</p>
          <p>{data.type}</p>
          <p>{data.make}</p>
          <p>{data.mileage}</p>
        </StyledCarTagsWrap>
        <StyledCartBtn type="button" onClick={onModal}>
          Learn More
        </StyledCartBtn>
        {isInFavorites ? (
          <FavoriteBtn type="button" onClick={handleDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z"
                fill="#3470FF"
                stroke="#3470FF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </FavoriteBtn>
        ) : (
          <FavoriteBtn type="button" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z"
                stroke="white"
                stroke-opacity="0.8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </FavoriteBtn>
        )}
      </StyledCatalogCart>
      {showModal && <ModalPage data={data} onClose={onModal} />}
    </>
  );
};
