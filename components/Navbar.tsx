import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">しゃふろぐ</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-gray-300">ホーム</Link></li>
          <li><Link href="/youtube" className="hover:text-gray-300">YouTube</Link></li>
          <li><Link href="/ymm4" className="hover:text-gray-300">YMM4</Link></li>
        </ul>
      </div>
    </nav>
  );
}