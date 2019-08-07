import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SwipeCards from 'react-native-swipe-cards';
import styled from 'styled-components/native';
import logo from '../../../../assets/images/logo.png';
import { ThemeProps } from '../../../../theme/types';

export const Container = styled(KeyboardAwareScrollView).attrs({
  bounces: false,
})<ThemeProps>`
  flex: 1;
  padding: 80px 20px 20px 20px;
  background-color: ${({ theme }) => theme.colours.appBackground};
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  align-self: center;
  height: 68px;
  width: 300px;
`;

// This should come from the shared components
export const Text = styled.Text<ThemeProps>`
  font-size: 26px;
  text-align: center;
  color: ${({ theme }) => theme.colours.black};
  padding: 20px 0;
`;

export const SwipeCard = styled(SwipeCards).attrs({
  containerStyle: {
    alignSelf: 'center',
    marginLeft: 100,
    width: 100,
  },
})``;

export const AcceptContainer = styled.View<ThemeProps>`
  justify-content: center;
  align-items: center;
  border-width: 4px;
  border-color: ${({ theme }) => theme.colours.accept};
  border-radius: 25px;
  position: absolute;
  top: 400px;
  right: 10px;
  height: 50px;
  width: 50px;
`;

export const DeclineContainer = styled.View<ThemeProps>`
  justify-content: center;
  align-items: center;
  border-width: 4px;
  border-color: ${({ theme }) => theme.colours.decline};
  border-radius: 25px;
  position: absolute;
  top: 400px;
  left: 10px;
  height: 50px;
  width: 50px;
`;
