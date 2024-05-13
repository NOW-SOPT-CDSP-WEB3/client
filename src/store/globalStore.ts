import { atom } from 'jotai';

//atom 예시 선언
export const countAtom = atom<number>(0);

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const todoListAtom = atom<Todo[]>([]);
