import React from 'react';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
  autoplay?: boolean;
  showControls?: boolean;
  className?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title = 'YouTube video',
  aspectRatio = '16:9',
  autoplay = false,
  showControls = true,
  className = ''
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [showPrivacy, setShowPrivacy] = React.useState(!isLoaded);

  const aspectRatioClass = {
    '16:9': 'pb-[56.25%]',
    '4:3': 'pb-[75%]',
    '1:1': 'pb-[100%]'
  }[aspectRatio];

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?${new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    autoplay: autoplay ? '1' : '0',
    controls: showControls ? '1' : '0',
  }).toString()}`;

  const handleLoad = () => {
    setIsLoaded(true);
    setShowPrivacy(false);
  };

  if (showPrivacy) {
    return (
      <div className={`relative bg-gray-900 rounded-lg overflow-hidden ${className}`}>
        <div className={`relative ${aspectRatioClass}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="mb-4">
                <div className="w-20 h-20 mx-auto bg-red-600 rounded-full flex items-center justify-center">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">
                Watch on YouTube
              </h3>
              <p className="text-gray-300 mb-4 max-w-md mx-auto">
                Click to load the YouTube video. By loading the video, you agree to YouTube's privacy policy.
              </p>
              <button
                onClick={handleLoad}
                className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Load Video
              </button>
              <div className="mt-4">
                <a
                  href={`https://www.youtube.com/watch?v=${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 text-sm underline"
                >
                  Open in YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative bg-black rounded-lg overflow-hidden ${className}`}>
      <div className={`relative ${aspectRatioClass}`}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default YouTubeEmbed;