import Typography from "../Typography/Typography";
import Ionicons from "@expo/vector-icons/Ionicons";

import * as S from "./Styles";
import { colors } from "../../constants/colors";

export default function MusicPlayingMenu() {
  return (
    <S.MusicPlayingMenu>
      <S.MusicInformation>
        <S.MusicCover
          source={{
            uri: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/fb/24/c3/fb24c3ae-fcb5-02bc-725d-7ad1009f421e/197876857118_Cover.jpg/1200x1200bf-60.jpg",
          }}
        />

        <S.MusicNameAndArtist>
          <Typography type="Primary" color={colors.brandWhite}>
            ecstasy
          </Typography>
          <Typography
            type="Secondary"
            color={colors.brandWhite}
            opacity={"0.7"}
          >
            SUICIDAL-IDOL
          </Typography>
        </S.MusicNameAndArtist>
      </S.MusicInformation>

      <Ionicons name="play" size={24} color={colors.brandWhite} />
    </S.MusicPlayingMenu>
  );
}
