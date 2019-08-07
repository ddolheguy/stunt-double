import React, { Fragment, PureComponent } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { withTheme } from 'styled-components';
import { Actor } from '../../../../../types/actor';
import { RootState } from '../../../../redux/reducers/rootReducer';
import { ThemeProps } from '../../../../theme/types';
import { onFetchActorActions } from '../../actions/stuntDoubleActions';
import { stuntDoubleSelector } from '../../selectors/stuntDoubleSelectors';
import NoMoreCards from '../NoMoreCards/NoMoreCards';
import StuntDoubleCard from '../StuntDoubleCard/StuntDoubleCard';
import * as S from './StuntDoubleViewer.styled';

type Props = ThemeProps &
  ReturnType<typeof mapStateToProps> &
  typeof dispatchProps;

class StuntDoubleViewer extends PureComponent<Props> {
  state = {
    acceptedList: [],
    declinedList: [],
  };

  componentDidMount() {
    const { onFetchActors } = this.props;
    onFetchActors();
  }

  handleYes = (actor: Actor) => {
    const { acceptedList } = this.state;
    this.setState({ acceptedList: [...acceptedList, actor] });
  }

  handleNo = (actor: Actor) => {
    const { declinedList } = this.state;
    this.setState({ declinedList: [...declinedList, actor] });
  }

  renderNo = (props: any) => {
    const { theme } = this.props;
    if (props.x._value >= 0) {
      return null;
    }

    return (
      <S.DeclineContainer>
        <Icon name="times" size={30} color={theme.colours.decline} />
      </S.DeclineContainer>
    );
  }

  renderYes = (props: any) => {
    const { theme } = this.props;
    if (props.x._value <= 0) {
      return null;
    }

    return (
      <S.AcceptContainer>
        <Icon name="check" size={30} color={theme.colours.accept} />
      </S.AcceptContainer>
    );
  }

  render() {
    const { stuntDoubleState, theme } = this.props;
    return (
      <S.Container>
        <S.Logo />
        {stuntDoubleState.state === 'FETCHING' && (
          <ActivityIndicator
            color={theme.colours.black}
            animating={true}
            size="large"
          />
        )}
        {stuntDoubleState.state === 'SUCCESS' && (
          <Fragment>
            <S.Text>Position: Stunt double</S.Text>
            <S.SwipeCard
              cards={stuntDoubleState.data}
              cardKey="id"
              renderCard={(actor: Actor) => <StuntDoubleCard actor={actor} />}
              renderNoMoreCards={() => <NoMoreCards />}
              renderYup={this.renderYes}
              renderNope={this.renderNo}
              handleYup={this.handleYes}
              handleNope={this.handleNo}
              hasMaybeAction={false}
              stack={true}
              stackOffsetX={0}
              stackOffsetY={15}
              onClickHandler={() => {}}
            />
          </Fragment>
        )}
        {stuntDoubleState.state === 'FAILURE' && (
          <S.Text>An error has occurred...</S.Text>
        )}
      </S.Container>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  stuntDoubleState: stuntDoubleSelector(state),
});

const dispatchProps = {
  onFetchActors: onFetchActorActions.request,
};

export default connect(
  mapStateToProps,
  dispatchProps
)(withTheme(StuntDoubleViewer));
