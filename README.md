# Small example of a Picture Explorer by using the Unsplash API:

### Requirements 
  - Unsplash API Key


### React-Router-Dom: Routing
  - Configuration: BrowserRouter in index.tsx
  - Routes and Route: have to be configured (App.tsx)
  - Navlinks: are in the Navbar, check isActive (Navbar.tsx)
  - Link: https://reactrouter.com/en/main


### SWR: React Hooks for Data Fetching
  - Configuration: Fetcher and SWRConfig (index.tsx)
  - own Hook: useFetchData uses the hook useSWR (useFetchdata.ts)
  - useFetchData: is called for fetching the pictures from the API (ExplorerPage.tsx)
  - Link: https://swr.vercel.app/



### Zustand: state management solution
  - Storage: saving a pageNumber and updatePageNumber (useStorage)
  - Utilisation: Pagination and Explorerpage
  -Link: https://github.com/pmndrs/zustand

### Others:
- Readaxios: Simple and smaller Axios API.
- React Spinners: simple Spinner while isLoading
- Heroicons: Icons for the pagination
