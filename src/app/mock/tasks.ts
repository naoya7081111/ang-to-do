export type Task = {
  title: string;
  description: string;
  date: string;
  genre: string;
};

export const tasks: Task[] = [
  {
    title: 'Studying Angular',
    description:
      '次の転職先に向けて、SPAフレームワークであるAngularを学習する。まずはUdemyで学習し、その次にオリジナルのToDoアプリを作る。',
    date: '2022/7/23',
    genre: 'learning',
  },
  {
    title: 'Buying plates',
    description: 'お皿をかいます。なぜならお皿は必要であるからです。',
    date: '2022/8/3',
    genre: 'domestic affairs',
  },
  {
    title: 'Clear Room',
    description: '部屋が汚いので掃除をします',
    date: '2022/11/13',
    genre: 'domestic affairs',
  },
  {
    title: 'Playing My Son',
    description: '息子とたくさん遊んであげる',
    date: '2023/1/23',
    genre: 'leisure',
  },
];
