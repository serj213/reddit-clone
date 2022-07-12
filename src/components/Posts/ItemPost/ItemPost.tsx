import React from 'react';

import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { Button } from '../../Common/Button/Button';
import { postT } from '../../../types/post';

import s from './itemPost.module.scss';

const ItemPost: React.FC<postT> = ({
  likes,
  img,
  channelName,
  author,
  datePost,
  name,
  content,
  comments,
}) => {
  return (
    <div className={s.post}>
      <div className={s.column}>
        <div className={s.post__likes}>
          <button>
            <ArrowUpwardRoundedIcon />
          </button>
          <span>{likes}</span>
          <button>
            <ArrowDownwardRoundedIcon />
          </button>
        </div>
      </div>

      <div className={s.column}>
        <div className={s.post__top}>
          <div className={s.post__channel}>
            <img src={img} alt="" />
            <p>{channelName}</p>
          </div>

          <p className={s.post__author}>
            Posted by {author} &nbsp {datePost} hours ago
          </p>

          <div className={s.post__join}>
            <Button small blue>
              join
            </Button>
          </div>
        </div>
        <div className={s.post__middle}>
          <h5 className={s.post__title}>{name}</h5>
          <div className={s.post__content}>
            {content.length &&
              content.map((text, index) => {
                return <p key={index}>{text}</p>;
              })}
          </div>
        </div>
        <div className={s.post__bottom}>
          <a>
            <ChatBubbleOutlineRoundedIcon />
            <p>{comments}k comments</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemPost;
