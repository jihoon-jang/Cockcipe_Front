import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'components/table';
import { Button } from 'components/button';

// 이미지 경로 수정 또는 온 라인 이미지 사용
const placeholderImage =
  'https://github.com/user-attachments/assets/5382fabd-6cfc-482f-bc3d-7a0c4763a7d6';

interface Recipe {
  id: number;
  name: string;
  image: string;
}

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
}

export default function MainHome() {
  const popularRecipes: Recipe[] = [
    { id: 1, name: '모히토', image: placeholderImage },
    { id: 2, name: '마가리타', image: placeholderImage },
    { id: 3, name: '피나 콜라다', image: placeholderImage },
    { id: 4, name: '블러디 메리', image: placeholderImage },
    { id: 5, name: '올드 패션드', image: placeholderImage },
  ];

  const recentPosts: Post[] = [
    {
      id: 1,
      title: '여름 칵테일 추천',
      author: '칵테일러버',
      date: '2024-06-15',
    },
    { id: 2, title: '홈바 셋업 팁', author: '바텐더김', date: '2024-06-14' },
    {
      id: 3,
      title: '과일 가니쉬 아이디어',
      author: '과일마스터',
      date: '2024-06-13',
    },
    {
      id: 4,
      title: '논알콜 칵테일 레시피',
      author: '소버큐리어스',
      date: '2024-06-12',
    },
    {
      id: 5,
      title: '칵테일 글라스 가이드',
      author: '글라스킹',
      date: '2024-06-11',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                나만의 칵테일을 발견하세요
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                수백 가지 레시피를 탐험하고, 나만의 레시피를 공유하세요. <br />
                칵테일 애호가들의 커뮤니티에 참여하세요.
              </p>
              <Button size="lg">레시피 둘러보기</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              인기 레시피
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {popularRecipes.map((recipe) => (
                <div key={recipe.id} className="flex flex-col items-center">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    width={200}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <p className="mt-2 text-center font-medium">{recipe.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              최신 커뮤니티 활동
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>제목</TableHead>
                  <TableHead>작성자</TableHead>
                  <TableHead>날짜</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentPosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>{post.title}</TableCell>
                    <TableCell>{post.author}</TableCell>
                    <TableCell>{post.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © 2024 CocktailCraft. All rights reserved.
            </p>
            <nav className="flex gap-4">
              <Link to="#" className="text-sm font-medium hover:underline">
                이용약관
              </Link>
              <Link to="#" className="text-sm font-medium hover:underline">
                개인정보처리방침
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
