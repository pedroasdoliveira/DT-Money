import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

const SearchForm = () => {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transações" />

      <button>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
};

export default SearchForm;
