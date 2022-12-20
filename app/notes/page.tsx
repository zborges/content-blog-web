import '../../styles/globals.css';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import _ from 'lodash';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:1337/graphql',
  cache: new InMemoryCache(),
});

async function getPosts() {
  return await client.query({
    query: gql`
      query {
        posts {
          data {
            id
            attributes {
              Title
              Slug
              Body
            }
          }
        }
      }
    `
  });
}

export default async function NotesPage() {
  const posts = (await getPosts()).data.posts.data;

  return (
    <div className='bg-slate-500 h-screen w-screen flex-col justify-center items-center'>
      <div className='space-y-3'>
        {_.map(posts, (post: any) => (
          <div className='p-2 bg-slate-400' key={post.id}>
            <div>{post.attributes.Title}</div>
            <div>{post.attributes.Body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}