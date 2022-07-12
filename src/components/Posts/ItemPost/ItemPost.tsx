import React from 'react';

import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { Button } from '../../Common/Button/Button';
import s from './itemPost.module.scss';

const ItemPost: React.FC = () => {
  return (
    <div className={s.post}>
      <div className={s.column}>
        <div className={s.post__likes}>
          <button>
            <ArrowUpwardRoundedIcon />
          </button>
          <span>12</span>
          <button>
            <ArrowDownwardRoundedIcon />
          </button>
        </div>
      </div>

      <div className={s.column}>
        <div className={s.post__top}>
          <div className={s.post__channel}>
            <img
              src="https://b.thumbs.redditmedia.com/tz8au2E-Zye06uaHTykduXfl71kK0vHyKzoa4gFa8ss.png"
              alt=""
            />
            <p>r/self</p>
          </div>

          <p className={s.post__author}>Posted by u/ieatpusswa 21 hours ago</p>

          <div className={s.post__join}>
            <Button small blue>
              join
            </Button>
          </div>
        </div>
        <div className={s.post__middle}>
          <h5 className={s.post__title}>Нуууу очень крутой заголовок поста</h5>
          <div className={s.post__content}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi blanditiis numquam
              beatae quia voluptas, porro iste nam expedita facilis? Dolores reprehenderit minima
              quia nobis porro aliquam accusantium possimus molestiae!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi blanditiis numquam
              beatae quia voluptas, porro iste nam expedita facilis? Dolores reprehenderit minima
              quia nobis porro aliquam accusantium possimus molestiae!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi blanditiis numquam
              beatae quia voluptas, porro iste nam expedita facilis? Dolores reprehenderit minima
              quia nobis porro aliquam accusantium possimus molestiae!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi blanditiis numquam
              beatae quia voluptas, porro iste nam expedita facilis? Dolores reprehenderit minima
              quia nobis porro aliquam accusantium possimus molestiae!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi blanditiis numquam
              beatae quia voluptas, porro iste nam expedita facilis? Dolores reprehenderit minima
              quia nobis porro aliquam accusantium possimus molestiae!
            </p>
          </div>
        </div>
        <div className={s.post__bottom}>
          <a>
            <ChatBubbleOutlineRoundedIcon />
            <p>2.9k comments</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemPost;
