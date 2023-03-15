import '../../styles/globals.css';
import _ from 'lodash';
import { getPosts } from '../../utils/dbConnect';
import type { PostEntity } from '../../common/cms/types';

export default async function NotesPage() {
  const queryResult = await getPosts();

  const posts = queryResult.data.posts?.data

  return (
    <div className='bg-slate-500 h-screen w-screen flex-col justify-center items-center'>
      <div className='space-y-3'>
      {_.map(posts, (post: PostEntity) => (
          <div className='p-2 bg-slate-400' key={post.id}>
            <div>{post.attributes?.Title}</div>
            <div>{post.attributes?.Body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}