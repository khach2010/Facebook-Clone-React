import React from 'react';
import StoryRow from './StoryRow';
import MessageSender from './MessageSender';
import Post from './Post';
import './Feed.css';

function Feed() {
  return (
    <div className='feed'>
      <StoryRow />
      <MessageSender profilePic=' https://occ-0-768-769.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABb0AVJ_8F8uelJaOyFuybu4cAJAKEuul8P16h5qihQdUD5zu3p7JkRP1mwKRYyvXgYERct-jnz_0BtWPEwQv91JZkAC-LncDr5kHuazRqvWh_c4a.jpg' />

      <Post
        profilePic='https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg'
        message='wow that work'
        timestamp="10h 30' ago"
        username='hdakjhdkajh'
        image='https://media.insiders.nl/maa/files/image/1706f6d131728dc07b909cc9fb7f4f8b98f4e798.jpeg'
      />
      <Post
        profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOZI8JlSyXNVqLvzkb6Vx3C4_ElctDLLzuA&usqp=CAU'
        message='wow that work'
        timestamp="10h 30' ago"
        username='hdakjhdkajh'
        image='https://app.ongehinderd.nl/Images/Spot/20262a14-2168-4726-9c37-3b19005f0b3f.jpg?w=800&h=600&scale=both&mode=Crop&Bgcolor=white'
      />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
