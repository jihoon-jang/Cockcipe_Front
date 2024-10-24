import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'components/table';

interface Post {
  id: number;
  title: string;
  authorName: string;
  date: string;
}

interface CommunityPreviewProps {
  recentPosts: Post[];
}

export const CommunityPreview = ({ recentPosts }: CommunityPreviewProps) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          커뮤니티 최신 게시글
        </h2>

        {/* 테이블이 큰 화면에서는 넓게 표시되도록 max-w-full과 w-full 사용 */}
        <div className="w-full max-w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>제목</TableHead>
                <TableHead>작성자</TableHead>
                <TableHead>작성 시간</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {recentPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>{post.authorName}</TableCell>
                  <TableCell>{post.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};
