import { gql } from 'apollo-server-express';

export default gql`
    type Query {
        me: User
        users: [User!]
        user(id: ID!): User

        messages: [Message!]!
        message(id: ID!): Message!
    }

    type Mutation {
        createMessage(text: String!): Message!
        deleteMessage(id: ID!): Boolean!
        updateMessage(id: ID! text: String!): Message!
    }

    type User {
        id: ID!
        username: String!
        age: Int!
        group: UserGroup!
        role: Role
        messages: [Message!]
    }

    enum UserGroup {
        ADMIN
        USER
        GUEST
    }

    scalar Role

    type Message {
        id: ID!
        text: String!
        user: User!
    }
`;