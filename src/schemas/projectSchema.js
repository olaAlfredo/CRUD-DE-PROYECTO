const { gql } = require('apollo-server');

const typeDefs = gql`
    type Project {
        _id: ID!
        name: String!
        description: String!
        startDate: String!
        endDate: String!
        status: String!
        budget: Int!
    }

    type Query {
        projects: [Project]!
    }

    type Mutation {
        createProject(name: String!, description: String!, startDate: String!, endDate: String!, status: String!, budget: Int!): Project!
        updateProject(_id: ID!, name: String!, description: String!,startDate: String!,endDate: String!,status: String!,budget: Int!): Project!
        deleteProject(_id: ID!): Project!
    }

`;

module.exports = typeDefs;
    