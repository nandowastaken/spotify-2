import React, { useEffect } from "react";

import TrackPlayer from "react-native-track-player";
import MusicCard from "./src/components/MusicCard/MusicCard";
import MusicPlayingMenu from "./src/components/MusicPlayingMenu/MusicPlayingMenu";

import { setupPlayer, addTracks } from "./src/utils/trackPlayer";
import { tracks } from "./src/utils/tracks";

import * as S from "./Styles";

export default function App() {
  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();

      if (isSetup && queue.length <= 0) {
        await addTracks(tracks);
      }
    }

    setup();
  }, []);

  const renderSong = ({ item }) => {
    return (
      <MusicCard cover={item.cover} name={item.title} artist={item.artist} />
    );
  };

  const test = async () => {
    const tracks = await TrackPlayer.getQueue();
    console.log(tracks);
    await TrackPlayer.skipToNext();
  };

  test();
  console.log("hi");

  return (
    <S.Screen>
      <S.SongsContainer>
        <S.Songs
          ItemSeparatorComponent={<S.SongsSeparator />}
          keyExtractor={(item) => item.name}
          data={tracks}
          renderItem={renderSong}
        />
      </S.SongsContainer>

      <MusicPlayingMenu
        name={"ecstasy"}
        artist={"SUICIDAL-IDOL"}
        cover={
          "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/fb/24/c3/fb24c3ae-fcb5-02bc-725d-7ad1009f421e/197876857118_Cover.jpg/1200x1200bf-60.jpg"
        }
      />
    </S.Screen>
  );
}
