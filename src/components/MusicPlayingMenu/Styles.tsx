import styled from "styled-components/native";
import { colors } from "../../constants/colors";

export const MusicPlayingMenu = styled.View`
  height: 48px;
  width: 90%;
  background: ${colors.lightGray};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
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

export const PlayButton = styled.TouchableOpacity``;
