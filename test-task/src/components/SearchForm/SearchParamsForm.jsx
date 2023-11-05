import {
  StyledCarSelect,
  StyledCarSelectTitle,
  StyledCarSelectWrap,
  StyledSearchBtn,
  StyledSearchForm,
  // StyledSearchFormInput,
  // StyledSearchFormInputWrap,
} from "./SearchParamsForm.styled";

export const SearchParamsForm = (
  { makes, onSelectMake }
) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSelectMake(document.getElementById('carName').value);
  };

  return (
    <StyledSearchForm onSubmit={handleFormSubmit}>
      <StyledCarSelectWrap>
        <StyledCarSelectTitle>Car brand</StyledCarSelectTitle>
        <StyledCarSelect
          className="carName"
          name="carName"
          id="carName"
        >
          <option value="all">All</option>
          {makes && makes.map((make) => <option value={make}>{make}</option>)}
        </StyledCarSelect>
      </StyledCarSelectWrap>
      {/* <StyledCarSelectWrap>
        <StyledCarSelectTitle>Price/ 1 hour</StyledCarSelectTitle>
        <StyledCarSelect className="carPrice" name="carPrice" id="carPrice">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </StyledCarSelect>
      </StyledCarSelectWrap>
      <StyledCarSelectWrap>
        <StyledCarSelectTitle>Сar mileage / km</StyledCarSelectTitle>
        <StyledSearchFormInputWrap>
          <StyledSearchFormInput
            className="left"
            name="start"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="From"
          />
          <StyledSearchFormInput
            className="right"
            name="end"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="To"
          />
        </StyledSearchFormInputWrap>
      </StyledCarSelectWrap> */}
      <StyledSearchBtn type="submit">Search</StyledSearchBtn>
    </StyledSearchForm>
  );
};
