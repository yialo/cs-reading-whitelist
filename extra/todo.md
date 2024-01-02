# Todo list

- Add `useTransition` to text input
- [feat] Save search query in search param
- Add extended favicon set
- Rename PROCESS's LOADING to FETCHING (look to Tanstack Query)
- Split selectors to global & local ones (to allow model reexport via index module)
- Format LinkList item as card
  - Add optional **author** field section (name, links) and sorting by author name
  - Add optional **mediaType** field and sorting by media (video, audio etc.)
- Add request cancellation with AbortController
- Migrate to Vite/SWC
- (After migration to TS 5) Apply verbatim syntax and get rid of separate 'import type {}'
- Migrate dropdown to Portal
- (After update of my ESLint config) Restore esLint and eslint-config-prettier
  ```json
  "lint": "npm-run-all --parallel lint:styles lint:scripts typecheck",
  "lint:scripts": "eslint \"./*.cjs\" \"./src/**/*.{j,t}s?(x)\"",
  "publish": "npm run lint:styles && npm run lint:scripts && npm run build && npm run deploy",
  ```
