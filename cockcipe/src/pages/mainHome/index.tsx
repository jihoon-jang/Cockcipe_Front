import { RecipeBanner } from 'organisms/recipeBanner';
import { PopularRecipes } from 'organisms/popularRecipes';
import { CommunityPreview } from 'organisms/communityPreview';

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
  authorName: string;
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
      authorName: '칵테일러버',
      date: '2024-06-15',
    },
    {
      id: 2,
      title: '홈바 셋업 팁',
      authorName: '바텐더김',
      date: '2024-06-14',
    },
    {
      id: 3,
      title: '과일 가니쉬 아이디어',
      authorName: '과일마스터',
      date: '2024-06-13',
    },
    {
      id: 4,
      title: '논알콜 칵테일 레시피',
      authorName: '소버큐리어스',
      date: '2024-06-12',
    },
    {
      id: 5,
      title: '칵테일 글라스 가이드',
      authorName: '글라스킹',
      date: '2024-06-11',
    },
  ];

  return (
    <div className="app-container w-full">
      <main className="w-full flex-1">
        <RecipeBanner />
        <PopularRecipes popularRecipes={popularRecipes} />
        <CommunityPreview recentPosts={recentPosts} />
      </main>
    </div>
  );
}
