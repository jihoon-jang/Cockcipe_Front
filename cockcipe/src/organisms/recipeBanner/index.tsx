import { Button } from 'components/button';
import { useNavigate } from 'react-router-dom';

export const RecipeBanner = () => {
  const navigate = useNavigate();
  return (
    <section className="mx-auto w-full max-w-screen-xl py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            나만의 칵테일을 발견하세요
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            수백 가지 레시피를 탐험하고, 나만의 레시피를 공유하세요. <br />
            칵테일 애호가들의 커뮤니티에 참여하세요.
          </p>
          <Button size="lg" onClick={() => navigate('/recipes')}>
            레시피 둘러보기
          </Button>
        </div>
      </div>
    </section>
  );
}
