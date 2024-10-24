import { Button } from 'components/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Recipe {
  id: number;
  name: string;
  image: string;
}

interface PopularRecipesProps {
  popularRecipes: Recipe[];
}

export const PopularRecipes = ({ popularRecipes }: PopularRecipesProps) => {
  return (
    <section className="w-full relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gray-100 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            인기 레시피
          </h2>
          <Button variant="ghost" className="text-primary">
            <Link to="/popular-recipes" className="flex items-center">
              더보기
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

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
              <p className="mt-2 text-center ">{recipe.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
