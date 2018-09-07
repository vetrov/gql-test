import express from 'express';
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();

app.use(cors());

const schema = gql`
  type Query {
    me: User
  }

  type User {
    username: String!
    age: Int!
    group: UserGroup!
    role: Role
  }

  enum UserGroup {
    ADMIN
    USER
    GUEST
  }

  scalar Role
`;

const resolvers = {
  Query: {
    me: () => {
      return {
        username: 'Robin Wieruch',
        age: 77,
        group: 'ADMIN'
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});