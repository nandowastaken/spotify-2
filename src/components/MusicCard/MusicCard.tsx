import * as S from "./Styles";
import Typography from "../Typography/Typography";
import { colors } from "../../constants/colors";

export default function MusicCard({ cover, name, artist }) {
  return (
    <S.TouchableArea>
      <S.MusicCard>
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

        <S.Menu>
          <S.Circle />
          <S.Circle />
          <S.Circle />
        </S.Menu>
      </S.MusicCard>
    </S.TouchableArea>
  );
}
