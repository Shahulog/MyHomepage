import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function YMM4() {
  const tips = [
    { title: 'プラグイン開発の始め方', content: 'YMM4のプラグイン開発を始めるための基本的な手順を紹介します。' },
    { title: 'APIの使い方', content: 'YMM4のAPIを効果的に使用するためのTipsをご紹介します。' },
    { title: '便利なショートカット', content: 'YMM4を使用する際に知っておくと便利なショートカットキーの一覧です。' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">YMM4 Tips & プラグイン開発</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((tip, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{tip.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{tip.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}