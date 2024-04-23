import React, { useState } from "react";

import TrackPlayer from "react-native-track-player";
import Typography from "../Typography/Typography";
import Ionicons from "@expo/vector-icons/Ionicons";

import * as S from "./Styles";
import { colors } from "../../constants/colors";

export default function MusicPlayingMenu({ cover, name, artist }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSong = () => {
    if (isPlaying) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <S.MusicPlayingMenu>
      <S.MusicInformation>
        <S.MusicCover
          source={{
            uri: cover,
          }}
        />

        <S.MusicNameAndArtist>
          <Typography type="Primary" color={colors.brandWhite}>
            {name}
          </Typography>
          <Typography
            type="Secondary"
            color={colors.brandWhite}
            opacity={"0.7"}
          >
            {artist}
          </Typography>
        </S.MusicNameAndArtist>
      </S.MusicInformation>

      <S.PlayButton onPress={toggleSong}>
        <Ionicons
          name={isPlaying ? "pause" : "play"}
          size={24}
          color={colors.brandWhite}
        />
      </S.PlayButton>
    </S.MusicPlayingMenu>
  );
}
