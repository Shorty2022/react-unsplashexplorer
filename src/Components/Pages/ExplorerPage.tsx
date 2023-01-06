import useFetchData from "../../Hooks/useFetchData";
import useStorage from "../../Hooks/useStorage";
import Spinner from "./Spinner";
import ErrorPage from "./ErrorPage";
import SingleImage from "../SingleImage";
import Pagination from "./Pagination";

type ExplorerPageProps = {
  order: string;
};

export default function ExplorerPage({ order }: ExplorerPageProps) {
  const state = useStorage((state) => state);

  // https://swr.vercel.app/docs/getting-started
  const { images, isError, isLoading } = useFetchData(
    `https://api.unsplash.com/photos?order_by=${order}&page=${state.currentPageNumber}`
  );

  if (isLoading) {
     return <Spinner />

  } else if (!isError && images.length === 0) {
    return <ErrorPage message="There are no images to display." />;

  } else if (isError) {
    return (
      <ErrorPage message="Something went wrong. Please check your internet connection." />
    );
  }

  return (
    <>
      <section className="grid w-6/12 grid-cols-5 grid-rows-2 place-items-center gap-4 mt-10 ml-10">
        {images.map((image: any) => (
          <SingleImage
            key={image.id}
            image={{
              url: image.urls.small,
              name: image.name,
            }} />
        ))}
      </section>

      <Pagination />
    </>
  );
}