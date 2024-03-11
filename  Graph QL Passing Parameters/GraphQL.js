import { gql } from "@apollo/client";

//CONTINENTS array
export const CONTINENT_QUERY = gql`
  query ContinentQuery {
    continents {
        code
        name
      }
  }
`;

//COUNTRY array
export default CONTINENT_QUERY_COUNTRY = gql`
  query CountryQuery {
      countries{
        code
        name
        native
        phone
    }
  }
`;

//Filter on LANGUAGE array
export const LANGUAGE_QUERY = gql`
query LanguageQuery {
    language(code: "af") {
      name
      native
    }
  }
`;

//COUNTRTY array
export const COUNTRY_QUERY = gql`
query CountryQuery {
    countries {
        code
        name
        phone
        continent{
          name
        }
        languages{
          native
        }
      }
  }
`;

