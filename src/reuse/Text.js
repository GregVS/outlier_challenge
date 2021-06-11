import styled from '@emotion/native';

export const AppText = styled.Text`
  color: ${props => props.color === 'secondary' ? '#ababab' : '#ffffff'};
  font-size: ${props => props.fontSize ? props.fontSize + 'px' : '16px'};
  font-family: RB-Medium;
  line-height: ${props => (props.fontSize ?? 16) * 1.4 + 'px'};
`;

export const TitleText = styled(AppText)`
  font-size: 16px;
  font-weight: bold;
  font-family: RB-Bold;
`;

export const BoldText = styled(AppText)`
  font-weight: bold;
  font-family: RB-Bold;
`;
