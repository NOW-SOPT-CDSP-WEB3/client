import { atom } from 'jotai';

//atom 연습: memberIdAtom
export const memberIdAtom = atom<number>(1);

// readonly atom 연습
export const readMemberIdAtom = atom((get) => get(memberIdAtom));

//read write atom 연습 : readWriteMemberIdAtom
export const readWriteMemberIdAtom = atom(
  // 읽기 부분
  (get) => get(memberIdAtom),

  // 쓰기 부분
  (get, set, newValue: number) => {
    set(memberIdAtom, newValue);
  },
);
