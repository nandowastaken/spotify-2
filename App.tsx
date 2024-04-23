import React, { useEffect } from "react";

import MusicPlayingMenu from "./src/components/MusicPlayingMenu/MusicPlayingMenu";
import { setupPlayer, addTracks } from "./src/utils/trackPlayer";

import * as S from "./Styles";

export default function App() {
  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();

      if (isSetup && queue.length <= 0) {
        await addTracks({
          url: "https://spotify2.s3.sa-east-1.amazonaws.com/ecstasy.m4a?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXNhLWVhc3QtMSJHMEUCIQCoWmxZh9vfu%2BIVyqgySWrXB0dyVD%2Bhsqbtajrxac3kFAIgYkQ8Ju5DJAGviEEKGrybWqwMZ%2FBfc53hu6rlG9oiaBkq6AIIdhAAGgw2NjY2Nzk5MzY1NzIiDHT81pE8Lz1EdRAyPCrFAj4buY%2FWXEEB%2BEqf8HxS0K7%2Fh2%2Bjt8xZcIT80%2B1%2FwNcMAGBXpWeGuCUV1j63vV%2FU59JVpcDQggFMHjg4PVPOKPyMJmjkjtGuEOpOwYaIKxseDEIJe7m0wGBkDnOQmZiVfOI8KLlFNYOWzXgkR9gsbV4NK8J1FtK8xKxmW5gYAVgdWvZwrTQFImwpW7fH%2FqEwZaLX0upzvk8ct0J46F%2FHJcWRnwbbQaxAu2m5CH8vBXuxcHCIjQs12QFLJhyE9pk8KVRawMpFJkeLtFKyMr2qlNF9RCxiu0zgSl%2BrKBgN9Y509rDPOTuhRzsMVHpN06XyjJXfOgBj6fAlkKmyJO6G4HrLoqxedUgC6vfDAuD7tqpw2j%2BMyvqELuYQqBUQ3mwYIfX6oTjNJ3B63SysH9c1ygp5i74vH5p03%2FrfpVtIubCxwaf7QOAwm%2BKesQY6swI8s5lwRkUZxr9IDDddSkU7jVFthLZzonii%2FtWJzpAXczhF4E48nyt8QfLpqEY7NgIiIhsHGlSoYSbg3ocsk4oR8gJs8mTJfZ3GlhzHCEOrOXwmMwHOj%2BC6wrXd4vmiU1AyGR2q6VdX6X6%2BDXaITdbuPKA%2FZ5JIslWJLz%2FfBnrzMqjh0Y4CQ8Ioy4cDsHWSSbsfm%2BbHhWvcrNqNX6dlLa10i0w2FqgVfZruTw5%2FwxNJ%2FeIsX3rsEn9kIYlnadoCPlQSx01h18G2QRZlO%2Bd7Kb6xnQxIuc2HP13QLZDZrDh1uCX9BbgqS8Z8R0cfRV1lRV1vKoD%2Fvbct%2FZMZyzkjlrVbv42rFKDw4pwwCYt%2FSwiLjd8MAgV02BCv3odE71sAFn2hvLNW21YB5Y%2BvX5FtoF18t433&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240423T130406Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZWOJYQY6MNV5DG4L%2F20240423%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Signature=02bad6d65ad6284bb9fc2baebc968c029b84b76a6ce449bd8c12bae17f6956c1", // Load media from the network
          title: "ecstasy",
          artist: "SUICIDAL-IDOL",
        });
      }
    }

    setup();
  }, []);

  return (
    <S.Screen>
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
