import React, { memo } from 'react';
import { Actor } from '../../../../../types/actor';
import * as S from './StuntDoubleCard.styled';

type Props = {
  actor: Actor;
};

const StuntDoubleCard: React.FC<Props> = ({ actor }) => {
  return (
    <S.Container key={actor.id}>
      <S.Image source={actor.image} />
    </S.Container>
  );
};

export default memo(StuntDoubleCard);
