import { Form, Input, SearchButton } from './SearchBar.styled';
export const SearchBar = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" name="query" autoComplete="off" />
      <SearchButton type="submit">Search</SearchButton>
    </Form>
  );
};
