import { gql } from "@apollo/client";

export const AddCandidat = gql
	`mutation AddCandidat ( 
	$firstName:String!,  
	$lastName:String!,
	 $photo: String!, 
	$action: Boolean!  ){
	 AddCandidat ( 
		 firstName : $firstName , 
		 lastName : $lastName ,
		 photo:$photo, 
		 action:$action
	 ) {
	   id
	   firstName
	   lastName
	   photo
	   action
 }
	 }`
