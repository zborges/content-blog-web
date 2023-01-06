
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:1337/graphql",
  documents: "app/**/*.tsx",
  generates: {
    "common/cms/types.ts": {
      "config": {
        avoidOptionals: false
      },
      "plugins": ["typescript", "typescript-operations"]
    }
  }
};

export default config;
