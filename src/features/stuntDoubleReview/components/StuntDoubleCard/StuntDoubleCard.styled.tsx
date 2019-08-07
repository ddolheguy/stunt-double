import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { ThemeProps } from '../../../../theme/types';

export const Container = styled.View<ThemeProps>`
  background-color: white;
  padding: 30px 40px;
  border-radius: 10px;
  box-shadow: 1px 2px 2px #e1e1e1;
  flex: 1;
`;

export const Image = styled.Image`
  height: 300px;
  width: ${Dimensions.get('window').width - 120}px;
`;
