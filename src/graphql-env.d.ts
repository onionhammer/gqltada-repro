/* eslint-disable */
/* prettier-ignore */

export type introspection_types = {
    'AddImageInput': { kind: 'INPUT_OBJECT'; name: 'AddImageInput'; isOneOf: false; inputFields: [{ name: 'images'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Upload'; ofType: null; }; }; }; }; defaultValue: null }]; };
    'AddImagePayload': { kind: 'OBJECT'; name: 'AddImagePayload'; fields: { 'long': { name: 'long'; type: { kind: 'SCALAR'; name: 'Long'; ofType: null; } }; }; };
    'Boolean': unknown;
    'HelloInput': { kind: 'INPUT_OBJECT'; name: 'HelloInput'; isOneOf: false; inputFields: [{ name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }]; };
    'HelloPayload': { kind: 'OBJECT'; name: 'HelloPayload'; fields: { 'string': { name: 'string'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    'Long': unknown;
    'Mutation': { kind: 'OBJECT'; name: 'Mutation'; fields: { 'addImage': { name: 'addImage'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'AddImagePayload'; ofType: null; }; } }; 'hello': { name: 'hello'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'HelloPayload'; ofType: null; }; } }; }; };
    'Query': { kind: 'OBJECT'; name: 'Query'; fields: { 'hello': { name: 'hello'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'ping': { name: 'ping'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'problematic': { name: 'problematic'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'String': unknown;
    'Upload': unknown;
};

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: never;
  query: 'Query';
  mutation: 'Mutation';
  subscription: never;
  types: introspection_types;
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}