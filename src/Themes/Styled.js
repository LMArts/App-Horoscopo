import styled from 'styled-components/native';
import { theme } from './Theme';

export const ContainerImage = styled.View`
  background-color: ${(props) => props.color || theme.colors.default};
  border-radius: 50px;
  height: 80px;
  width: 80px;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`;
export const Texto = styled.Text`
  color: ${(props) => props.color || theme.colors.black};
  font-size: ${(props) => props.size || '15px'};
  font-weight: ${(props) => props.bold || 100};
  text-align: center;
  line-height: 20px;
`;


