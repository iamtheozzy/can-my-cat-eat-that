import Styled from '@emotion/styled';
import searchIcon from '../../icons/search-icon.svg';

const StyledInput = Styled.input`
  position: relative;
  width: 100%;
  padding: 18px 0 18px 14px;
  padding-left: 50px;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  color: var(--text-color-body);
  font-size: var(--font-size-input);
  line-height: var(--line-height-input);
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 15px center;
  outline: none;
  &::placeholder {
    color: var(--text-placeholder-color);
  }

  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  }
`;

export { StyledInput as SearchInput };
