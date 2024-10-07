import { YouTubeEmbed } from '@/components/YouTubeEmbed';

export default function YouTube() {
  const videos = [
    { id: 'dQw4w9WgXcQ', title: 'サンプル動画 1' },
    { id: 'dQw4w9WgXcQ', title: 'サンプル動画 2' },
    { id: 'dQw4w9WgXcQ', title: 'サンプル動画 3' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">YouTube 動画</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <YouTubeEmbed videoId={video.id} />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}