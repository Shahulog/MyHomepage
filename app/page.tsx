import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">しゃふろぐのホームページへようこそ！</h1>
      <p className="text-xl mb-8">
        ここでは、私の活動や制作物について紹介しています。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/youtube" className="bg-red-600 text-white p-6 rounded-lg shadow-md hover:bg-red-700 transition">
          <h2 className="text-2xl font-semibold mb-2">YouTube</h2>
          <p>私のYouTubeチャンネルで公開している動画をチェックしてください。</p>
        </Link>
        <Link href="/ymm4" className="bg-blue-600 text-white p-6 rounded-lg shadow-md hover:bg-blue-700 transition">
          <h2 className="text-2xl font-semibold mb-2">YMM4</h2>
          <p>YMM4のプラグイン開発やTipsなどの情報をご覧いただけます。</p>
        </Link>
      </div>
    </div>
  );
}