import '../../styles/globals.css';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import _ from 'lodash';

import type { GetPostsQuery, PostEntity } from '../../common/cms/types';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:1337/graphql',
  cache: new InMemoryCache(),
});

// read up on different code gen types
async function getPosts() {
  return await client.query<GetPostsQuery>({
    query: gql`
      query getPosts {
        posts {
          data {
            id
            attributes {
              Title
              Body
            }
          }
        }
      }
    `
  });
}

export default async function NotesPage() {
  const queryResult = await getPosts();

  const posts = queryResult.data.posts?.data

  console.log('posts', posts);

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