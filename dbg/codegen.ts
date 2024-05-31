import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:7000/graphql",
  documents: ["src/**/*.tsx", "src/@graphql/**/*.graphql"],
  generates: {
    "./src/__generated__/graphql.ts": {
      // preset: "client",dont use with plugin otherwise it will generate duplicate types
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
      },
    },

    // "./graphql.schema.json": {
    //   plugins: ["introspection"]
    // }
  },
};

export default config;
