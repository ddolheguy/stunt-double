import React, { memo } from 'react';
import * as S from './NoMoreCards.styled';

const NoMoreCards: React.FC = () => {
  return (
    <S.Container>
      <S.Text>No more stunt doubles found...</S.Text>
    </S.Container>
  );
};

export default memo(NoMoreCards);
