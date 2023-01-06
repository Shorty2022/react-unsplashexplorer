import useSWR from "swr";

export default function useFetchData(url: string){

    const { data, error, isLoading } = useSWR(
        `${url}&client_id=${process.env.REACT_APP_UNSPLASH_API_CLIENT_ID}`
      )

    return {
        images: data,
        isLoading: isLoading,
        isError: error
    }
}