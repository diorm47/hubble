import React from "react";
import Stories from "react-insta-stories";

const StoriesCarousel = ({ stories }) => {

  return (
    <Stories
      stories={stories}
      defaultInterval={5000}
      width={"100%"}
      loop={true}
      keyboardNavigation={true}
      isPaused={true}
      currentIndex={() => {}}
      onStoryStart={() => {}}
      onStoryEnd={() => {}}
    />
  );
};

export default StoriesCarousel;
