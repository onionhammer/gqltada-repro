import { initGraphQLTada } from "gql.tada";
import type { introspection } from "./graphql-env.d.ts";

export const graphql = initGraphQLTada<{
  disableMasking: true; // Disable masking
  introspection: introspection;
  scalars: {
    DateTime: string;
    JSON: unknown;
    Upload: File;
    Long: number;
    Int: number;
  }
}>();
