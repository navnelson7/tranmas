import React, { Fragment, useContext } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import styled from "styled-components";
import FiltroDropdown from "../../Navegacion/Filtro";
import ContextInputSearch from "../../../context/ContextInputSearch";

function InputSearch({ setEnterSearch }) {
  const { StateSearch, setStateSearch, NombreField } = useContext(
    ContextInputSearch
  );
  const enterSubmit = (e) => {
    if (e.which === 13) {
      setEnterSearch(true);
    }
  };
  return (
    <Fragment>
      <StyleSearch>
        <div className="ml-search">
          <InputGroup>
            <FiltroDropdown />
            <FormControl
              placeholder={NombreField}
              value={StateSearch}
              onChange={(e) => setStateSearch(e.target.value)}
              onKeyPress={(e) => enterSubmit(e)}
            />
          </InputGroup>
        </div>
      </StyleSearch>
    </Fragment>
  );
}

export default InputSearch;

const StyleSearch = styled.div`
  /* INPUT SEARCH */
  .ml-search {
    margin-left: 5%;
  }
`;
