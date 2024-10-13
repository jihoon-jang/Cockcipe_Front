import React from 'react';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Label } from 'components/label';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">로그인</h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <div>
            <Label htmlFor="password">비밀번호</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit">로그인</Button>
        </form>
        <Button variant="ghost" onClick={onClose} className="mt-4">
          닫기
        </Button>
      </div>
    </div>
  );
};
