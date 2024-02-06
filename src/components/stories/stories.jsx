import React from "react";
import Stories from "react-insta-stories";

function StoriesCarousel() {
  const stories = [
    {
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      type: "video",
      header: {
        heading: "MASTERPIECES",
      },
    },
    {
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      type: "video",
      header: {
        heading: "MASTERPIECES",
      },
    },
    {
      url: "https://picsum.photos/1080/1920",

      header: {
        heading: "MASTERPIECES",
      },
    },
  ];
  return (
    <Stories
      stories={stories}
      defaultInterval={5000}
      width={432}
      height={768}
      // loop={true}
      keyboardNavigation={true}
      isPaused={true}
      currentIndex={() => {}}
      onStoryStart={() => {}}
      onStoryEnd={() => {}}
    />
  );
}

export default StoriesCarousel;
