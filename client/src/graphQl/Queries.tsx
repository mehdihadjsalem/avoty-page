import { gql } from "@apollo/client";

export const GetTasks = gql
	` query GetTasks
{ GetTasks
{
    id
	firstName
	lastName
	photo
	action
} }`
