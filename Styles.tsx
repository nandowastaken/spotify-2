import styled from "styled-components/native";
import { colors } from "./src/constants/colors";

export const Screen = styled.View`
  flex: 1;
  background: ${colors.brandBlack};
  align-items: center;
  justify-content: center;
  padding-bottom: 48px;
`;

export const SongsContainer = styled.View`
  flex: 1;
  width: 100%;
  padding-top: 80px;
  gap: 32px;
  align-items: center;
`;

export const Songs = styled.FlatList``;

export const SongsSeparator = styled.View`
  width: 100%;
  height: 16px;
`;
