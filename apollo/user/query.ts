import { gql } from "@apollo/client";
 
 // Property
 export const GET_PROPERTIES = gql`
   query GetProperties($input: PropertiesInquiry!) {
     getProperties(input: $input) {
       list {
         _id
         propertyType
         propertyStatus
         propertyLocation
         memberId
         meLiked {
           memberId
           likeRefId
           myFavorite
         }
         propertyAddress
         propertySquare
         propertyPrice
         propertyTitle
         propertyBeds
         propertyRooms
         propertyDesc
       }
       metaCounter {
         total
       }
     }
   }
 `;