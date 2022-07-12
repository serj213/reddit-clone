import React from 'react';

import ItemPost from './ItemPost/ItemPost';

const data = [
  {
    id: 0,
    likes: 12,
    img: 'https://b.thumbs.redditmedia.com/tz8au2E-Zye06uaHTykduXfl71kK0vHyKzoa4gFa8ss.png',
    channelName: 'r/self',
    author: 'u/ieatpusswa',
    datePost: 21,
    name: 'Нуууу очень крутой заголовок поста',
    content: [
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi blanditiis numquam
    beatae quia voluptas, porro iste nam expedita facilis? Dolores reprehenderit minima
    quia nobis porro aliquam accusantium possimus molestiae!`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi blanditiis numquam
    beatae quia voluptas, porro iste nam expedita facilis? Dolores reprehenderit minima
    quia nobis porro aliquam accusantium possimus molestiae!`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi blanditiis numquam
    beatae quia voluptas, porro iste nam expedita facilis? Dolores reprehenderit minima
    quia nobis porro aliquam accusantium possimus molestiae!`,
    ],
    comments: 2.9,
  },

  {
    id: 1,
    likes: 30,
    img: 'https://b.thumbs.redditmedia.com/tz8au2E-Zye06uaHTykduXfl71kK0vHyKzoa4gFa8ss.png',
    channelName: 'r/self',
    author: 'u/ieatpusswa',
    datePost: 21,
    name: 'Второй ооочень крутой заголовок',
    content: [
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi blanditiis numquam
    beatae quia voluptas, porro iste nam expedita facilis? Dolores reprehenderit minima
    quia nobis porro aliquam accusantium possimus molestiae!`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi blanditiis numquam
    beatae quia voluptas, porro iste nam expedita facilis? Dolores reprehenderit minima
    quia nobis porro aliquam accusantium possimus molestiae!`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi blanditiis numquam
    beatae quia voluptas, porro iste nam expedita facilis? Dolores reprehenderit minima
    quia nobis porro aliquam accusantium possimus molestiae!`,
    ],
    comments: 5.2,
  },
];

const Posts: React.FC = () => {
  return (
    <>
      {data.length &&
        data.map((post) => {
          return <ItemPost key={post.id} {...post} />;
        })}
    </>
  );
};

export default Posts;
