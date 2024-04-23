import styled from "styled-components/native";
import { colors } from "../../constants/colors";

export const TouchableArea = styled.TouchableOpacity``;

export const MusicCard = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MusicInformation = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const MusicCover = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 8px;
`;

export const MusicNameAndArtist = styled.View`
  flex-direction: column;
`;

export const Menu = styled.View`
  flex-direction: column;
  gap: 4px;
`;

export const Circle = styled.View`
  background: ${colors.lightGray};
  width: 4px;
  height: 4px;
  border-radius: 2000px;
`;
