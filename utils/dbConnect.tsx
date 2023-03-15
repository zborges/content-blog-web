import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import type { GetPostsQuery } from '../common/cms/types';

const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
  });

export async function getPosts() {
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
  