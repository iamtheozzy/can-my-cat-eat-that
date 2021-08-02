import Styled from '@emotion/styled';

const Tag = Styled.div`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  border-radius: 48px;
  padding: .5rem .75rem;
  color: ${({ isToxic }) =>
    isToxic ? 'var(--text-color-body)' : 'var(--white)'};
  background-color: ${({ isToxic }) =>
    isToxic ? 'var(--yellow)' : 'var(--green)'};
  margin: ${({margin}) => margin};
  flex-shrink: 0;
`;

export { Tag };