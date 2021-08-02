import * as React from 'react';
import Styled from '@emotion/styled';
import { useSelect } from 'downshift';
import chevronDown from '../../icons/chevron-down.svg';

const StyledDropdown = Styled.div`
  & label {
    cursor: pointer;
    color: var(--text-color-headers);
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 8px;
    display: inline-block;
  }

  & button {
    display: block;
    padding: 8px 8px;
    min-width: 150px;
    border: 1px solid var(--border-dropdown-color);
    border-radius: 6px;
    font-size: 13px;
    text-align: start;
    background-image: url(${chevronDown});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 97% center;
    background-color: transparent;
    position: relative;

    @media (min-width: 992px) {
      min-width: 254px;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 3px rgba(81, 203, 238, 1);
    }
  }

  & ul {
      position: absolute;
      z-index: 2;
      margin-top: 8px;
      min-width: 254px;
      border-radius: 6px;
      background-color: white;
      border: ${({ isOpen }) =>
        isOpen ? '1px solid var(--border-color)' : undefined};

      & li {
        font-size: 13px;
        padding: 8px;
        cursor: pointer;
      }

      & li:first-of-type {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
      }

      & li:last-of-type {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
      }

      & li[aria-selected=true] {
        background-color: var(--light-blue);
      }
    }

     & ul:focus {
        outline: none;
        box-shadow: 0 0 3px rgba(81, 203, 238, 1);
      }

`;

export function Dropdown({ items, setToxicitySelection }) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps
  } = useSelect({ items });

  React.useEffect(() => {
    setToxicitySelection(selectedItem);
  }, [selectedItem, setToxicitySelection]);

  return (
    <StyledDropdown isOpen={isOpen}>
      <label {...getLabelProps()}>Toxicity</label>
      <button {...getToggleButtonProps()}>
        {selectedItem ? selectedItem : 'Select an option'}
      </button>
      <ul {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <li key={`${item}${index}`} {...getItemProps({ item, index })}>
              {item}
            </li>
          ))}
      </ul>
    </StyledDropdown>
  );
}
