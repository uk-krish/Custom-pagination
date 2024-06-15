import { useEffect, useState } from "react";
import Table from "./Table";
import { GetData } from "./data";
import Pagination from "./Pagination";

function App() {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  useEffect(() => {
    const updateLimit = () =>{
      if (window.innerWidth < 768) {
        setLimit(5);
      } else {
        setLimit(10);
      }
    }
    updateLimit();
    window.addEventListener("resize", updateLimit);
    return () => {
      window.removeEventListener("resize", updateLimit);
    };
  }, []);

  const handlePageChange = (page: number) => {
    if (page < 1) return;
    if (page > Math.ceil(GetData().length / limit)) return;
    setPage(page);
  };

  const totalPage = Math.ceil(GetData().length / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const curentPageData = GetData().slice(startIndex, endIndex);

  return (
    <main className="text-white max-w-[1280px] mx-auto flex flex-col">
      <h1 className="text-green-300 font-medium  text-2xl mx-auto my-6">Responsive Table with Pagination</h1>
      <Table user={curentPageData} />
      <Pagination
        totalPage={totalPage}
        page={page}
        limit={limit}
        handlePageChange={handlePageChange}
      />
    </main>
  );
}

export default App;
