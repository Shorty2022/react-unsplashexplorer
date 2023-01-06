import useStorage from "../../Hooks/useStorage";
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/solid'




export default function Pagination(){
    const pageNumber = useStorage((state) => state.currentPageNumber);
    const setPage = useStorage((state) => state.updatePageNumber);

    return (
        <section className="ml-10 mt-10">
            <button disabled={pageNumber === 1} onClick={() => setPage(pageNumber - 1)}
                className="w-10 h-8 px-3 mr-3 bg-gray-100">
                <ArrowLeftIcon className="w-5 "/>
            </button>

            <span>Current Page: {pageNumber}</span>

            <button onClick={() => setPage(pageNumber + 1)} className="w-10 h-8 px-3 ml-3 bg-gray-100">
                <ArrowRightIcon className="w-5"/>
            </button>
        </section>
    )
}