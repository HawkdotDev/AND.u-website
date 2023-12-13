import { useEffect, useRef, useCallback } from 'react';

const HeroSection = (vidStart, vidEnd) => {
  const videoRef = useRef();
  const startTime = vidStart;
  const endTime = vidEnd; 

  const handleResize = useCallback(() => {
    const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
    videoRef.current.style.width = `${screenWidth}px`;
    videoRef.current.style.height = `${screenHeight}px`;
  }, []);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current.currentTime >= endTime) {
      videoRef.current.currentTime = startTime;
      videoRef.current.play();
    }
  }, [startTime, endTime]);

  const handleLoadedMetadata = useCallback(() => {
    videoRef.current.currentTime = startTime;
    videoRef.current.play();
  }, [startTime]);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);
    videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
    videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      window.removeEventListener('resize', handleResize);
      videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [handleResize, handleTimeUpdate, handleLoadedMetadata]);

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="object-cover w-full h-full">
        <source src="assets/retro.webm" type="video/webm" />
        - Your browser does not support the video tag -
      </video>
    </div>
  );
};

export default HeroSection;
