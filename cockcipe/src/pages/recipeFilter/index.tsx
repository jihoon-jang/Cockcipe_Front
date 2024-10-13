import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'components/card';
import { Input } from 'components/input';
import { Label } from 'components/label';
import { Button } from 'components/button';
import { Checkbox } from 'components/checkbox';
import { RadioGroup, RadioGroupItem } from 'components/radioGroup';

const cocktails = [
  {
    id: 1,
    name: '모히토',
    spirit: '럼',
    alcoholContent: 10,
    taste: '상큼한',
    image: '/placeholder.svg',
    isClassic: true,
  },
  {
    id: 2,
    name: '마티니',
    spirit: '진',
    alcoholContent: 30,
    taste: '드라이한',
    image: '/placeholder.svg',
    isClassic: true,
  },
  {
    id: 3,
    name: '피나 콜라다',
    spirit: '럼',
    alcoholContent: 15,
    taste: '달콤한',
    image: '/placeholder.svg',
    isClassic: true,
  },
  {
    id: 4,
    name: '올드 패션드',
    spirit: '위스키',
    alcoholContent: 35,
    taste: '쌉쌀한',
    image: '/placeholder.svg',
    isClassic: true,
  },
  {
    id: 5,
    name: '마가리타',
    spirit: '데킬라',
    alcoholContent: 20,
    taste: '상큼한',
    image: '/placeholder.svg',
    isClassic: true,
  },
  {
    id: 6,
    name: '커스텀 칵테일',
    spirit: '보드카',
    alcoholContent: 25,
    taste: '달콤한',
    image: '/placeholder.svg',
    isClassic: false,
  },
];

const allSpirits = [
  '럼',
  '진',
  '위스키',
  '보드카',
  '데킬라',
  '브랜디',
  '리큐어',
  '샴페인',
];

export const RecipeFilter: React.FC = () => {
  const [filters, setFilters] = useState({
    spirits: [] as string[],
    alcoholContent: [0, 40] as [number, number],
    taste: '',
    isClassic: null as boolean | null,
  });
  const [showAllSpirits, setShowAllSpirits] = useState(false);

  const handleSpiritChange = (spirit: string) => {
    setFilters((prev) => ({
      ...prev,
      spirits: prev.spirits.includes(spirit)
        ? prev.spirits.filter((s) => s !== spirit)
        : [...prev.spirits, spirit],
    }));
  };

  const handleAlcoholContentChange = (index: number, value: string) => {
    const newValue = parseInt(value) || 0;
    setFilters((prev) => ({
      ...prev,
      alcoholContent: prev.alcoholContent.map((v, i) =>
        i === index ? newValue : v,
      ) as [number, number],
    }));
  };

  const filteredCocktails = cocktails.filter(
    (cocktail) =>
      (filters.spirits.length === 0 ||
        filters.spirits.includes(cocktail.spirit)) &&
      cocktail.alcoholContent >= filters.alcoholContent[0] &&
      cocktail.alcoholContent <= filters.alcoholContent[1] &&
      (filters.taste === '' || filters.taste === cocktail.taste) &&
      (filters.isClassic === null || filters.isClassic === cocktail.isClassic),
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">칵테일 레시피</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>필터</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">술 종류</h3>
                <div className="space-y-2">
                  {allSpirits
                    .slice(0, showAllSpirits ? undefined : 5)
                    .map((spirit) => (
                      <div key={spirit} className="flex items-center">
                        <Checkbox
                          id={`spirit-${spirit}`}
                          checked={filters.spirits.includes(spirit)}
                          onCheckedChange={() => handleSpiritChange(spirit)}
                        />
                        <Label htmlFor={`spirit-${spirit}`} className="ml-2">
                          {spirit}
                        </Label>
                      </div>
                    ))}
                </div>
                {allSpirits.length > 5 && (
                  <Button
                    variant="ghost"
                    onClick={() => setShowAllSpirits(!showAllSpirits)}
                    className="mt-2 p-0"
                  >
                    {showAllSpirits ? '접기' : '더보기'}
                  </Button>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">도수 (알코올 %)</h3>
                <div className="flex items-center space-x-2">
                  <Input
                    type="number"
                    placeholder="최소"
                    value={filters.alcoholContent[0]}
                    onChange={(e) =>
                      handleAlcoholContentChange(0, e.target.value)
                    }
                    className="w-20"
                  />
                  <span>~</span>
                  <Input
                    type="number"
                    placeholder="최대"
                    value={filters.alcoholContent[1]}
                    onChange={(e) =>
                      handleAlcoholContentChange(1, e.target.value)
                    }
                    className="w-20"
                  />
                  <span>%</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">맛</h3>
                <RadioGroup
                  value={filters.taste}
                  onValueChange={(value) =>
                    setFilters((prev) => ({ ...prev, taste: value }))
                  }
                >
                  {['상큼한', '달콤한', '쌉쌀한', '드라이한'].map((taste) => (
                    <div key={taste} className="flex items-center space-x-2">
                      <RadioGroupItem value={taste} id={`taste-${taste}`} />
                      <Label htmlFor={`taste-${taste}`}>{taste}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">칵테일 유형</h3>
                <RadioGroup
                  value={
                    filters.isClassic === null
                      ? ''
                      : filters.isClassic.toString()
                  }
                  onValueChange={(value) =>
                    setFilters((prev) => ({
                      ...prev,
                      isClassic: value === '' ? null : value === 'true',
                    }))
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="" id="type-all" />
                    <Label htmlFor="type-all">전체</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="true" id="type-classic" />
                    <Label htmlFor="type-classic">클래식</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id="type-custom" />
                    <Label htmlFor="type-custom">커스텀</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() =>
                  setFilters({
                    spirits: [],
                    alcoholContent: [0, 40],
                    taste: '',
                    isClassic: null,
                  })
                }
              >
                필터 초기화
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCocktails.map((cocktail) => (
              <Card key={cocktail.id}>
                <CardHeader>
                  <CardTitle>{cocktail.name}</CardTitle>
                  <CardDescription>
                    {cocktail.spirit} | {cocktail.alcoholContent}% |{' '}
                    {cocktail.taste} |{' '}
                    {cocktail.isClassic ? '클래식' : '커스텀'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={cocktail.image}
                    alt={cocktail.name}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
