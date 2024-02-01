import  { useState } from "react";
import Pagination from "../components/Pagination";
import TbodyCandidates from "../components/TbodyCandidates";
import TheadCandidates from "../components/TheadCandidates";
import { tableHeader } from "../constants/tableHeader";
import { useFetchCandidates } from "../hooks/useFetch";
import { useDebounce } from "../hooks/useDebounce";

import Search from "../components/Search";

const TableCandidates = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const { debouncedValue, loadingDebounce } = useDebounce(inputValue, 500);
  const { candidates, totalPages, loading, error } = useFetchCandidates({
    user_id: 1,
    limit: currentPage,
    offset: 5,
    q: debouncedValue,
  });

  const handlePageChange = (paginationData) => {
    setCurrentPage(paginationData.currentPage);
  }

  const handleSearchInputChange = (value) => {
    setInputValue(value);
  }
  
  if (!loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="relative overflow-x-auto m-28">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <TheadCandidates tableHeader={tableHeader} />
        </thead>
        <tbody>
          <TbodyCandidates candidates={candidates} />
        </tbody>
      </table>
      <Pagination
        totalRecords={totalPages}
        pageLimit={1}
        pageNeighbours={1}
        onPageChanged={handlePageChange}
        className="inline-flex -space-x-px text-sm"
      />
      <Search onInputChange={handleSearchInputChange} loading={loadingDebounce} />
    </div>
  );
};

export default TableCandidates;
