import { Link } from 'react-router-dom';
import { Button } from 'components/button';
import { User } from 'lucide-react';
import { DialogTrigger } from 'components/dialog';
import { useAuth } from 'context/AuthContext';
import { useEffect } from 'react';

export const HeaderActionButton = () => {
  const { isLogined, user, logout, login } = useAuth();
  const loginedUser = 'loginedUser';

  // 페이지 로드 시 로그인 정보 복구
  useEffect(() => {
    const storedUser = getStoredUser();
    if (storedUser) {
      login(storedUser);
    }
  }, []);

  const getStoredUser = () => {
    const user = localStorage.getItem(loginedUser);

    if (user) {
      return JSON.parse(user);
    }
    return null;
  };

  const getCurrentFormattedDateTime = (): string => {
    const now = new Date();

    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    return `${month}-${day} ${hours}:${minutes}`;
  };

  const handleLogin = (name: string) => {
    const userInfo = { name: name };
    localStorage.setItem(loginedUser, JSON.stringify(userInfo));

    login(userInfo);
  };

  const handleLogout = () => {
    localStorage.removeItem(loginedUser);

    logout();
  };

  return (
    <nav className="ml-auto flex items-center space-x-4 sm:space-x-6">
      {/* 화면 이동 */}
      <Link to="/recipes" className="text-sm font-medium hover:underline">
        레시피
      </Link>
      <Link to="/community" className="text-sm font-medium hover:underline">
        커뮤니티
      </Link>
      <Link to="/events" className="text-sm font-medium hover:underline">
        이벤트
      </Link>

      {/* 로그인 */}
      {isLogined ? (
        <DialogTrigger>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center justify-center whitespace-nowrap px-3"
            onClick={() => handleLogout()}
          >
            <User className="mr-2 h-4 w-4" />
            {user?.name} 로그아웃
          </Button>
        </DialogTrigger>
      ) : (
        <DialogTrigger>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center justify-center whitespace-nowrap px-3"
            onClick={() => handleLogin(getCurrentFormattedDateTime())}
          >
            <User className="mr-2 h-4 w-4" />
            로그인
          </Button>
        </DialogTrigger>
      )}
      {/* <Button variant="ghost">
        <Menu className="h-5 w-5" />
        <span className="sr-only">메뉴 열기</span>
      </Button> */}
    </nav>
  );
};
