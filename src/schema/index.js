const typeDefs = `

    type User {
        id: Int!
        email: String!
        username: String!
        team: [Team!]!
    }

    type Team {
        id: Int!
        name: String!
        owner: User!
        membars: [User!]!
        channels: [Channel!]!
    }

    type Channel {
        id: Int!
        name: String!
        public: Boolean
        messages: [Message!]!
        user: [User!]!
    }

    type Message {
        id: Int!
        text: String!
        user: User!
        channel: Channel!
    }

    type Query {
    hi: String
}
`;

export default typeDefs;
