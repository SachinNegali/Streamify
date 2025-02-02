import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "../ui/card";
import { TableProps } from "@/types/componentTypes";
import React, { useMemo, useState } from "react";
import { ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import DropDownSelect from "../core/dropDownSelect";
import { Input } from "../ui/input";

const dropDownOptions = [
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "50", label: "50" },
  { value: "100", label: "100" },
];

const StreamsTable = ({ data }: TableProps) => {
  const [sortKey, setSortKey] = useState<"dateStreamed" | "streamCount" | null>(
    null
  );
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchKey, setSearchKey] = useState("");

  const handleSearch = (value: string) => {
    setSearchKey(value);
    setCurrentPage(1);
  };

  const filteredData = useMemo(() => {
    if (!searchKey) return data;
    return data.filter(
      (item) =>
        item.songName.toLowerCase().includes(searchKey.toLowerCase()) ||
        item.artist.toLowerCase().includes(searchKey.toLowerCase())
    );
  }, [data, searchKey]);

  const sortedData = useMemo(() => {
    const searchRes = [...filteredData];
    const updateArr = [...searchRes];
    if (!sortKey) return updateArr;

    if (sortKey === "streamCount") {
      updateArr.sort((a, b) =>
        sortDirection === "asc"
          ? a[sortKey] - b[sortKey]
          : b[sortKey] - a[sortKey]
      );
    } else {
      updateArr.sort((a, b) =>
        sortDirection === "asc"
          ? a[sortKey].localeCompare(b[sortKey])
          : b[sortKey].localeCompare(a[sortKey])
      );
    }
    return updateArr;
  }, [filteredData, sortDirection, sortKey]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedData.slice(startIndex, startIndex + pageSize);
  }, [sortedData, currentPage, pageSize]);

  const requestSort = (key: "dateStreamed" | "streamCount") => {
    setSortKey(key);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const totalPages = Math.ceil(data.length / pageSize);

  const handlePageSizeChange = (value: string) => {
    setPageSize(Number(value));
    setCurrentPage(1);
  };
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Streams</h2>
        <Input
          value={searchKey}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-3/12"
          placeholder="Search for Artist or Song..."
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Song Name</TableHead>
            <TableHead>Artist</TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => requestSort("dateStreamed")}
                className="p-0"
              >
                Date Streamed <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => requestSort("streamCount")}
                className="p-0"
              >
                Stream Count <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>User ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{row.songName}</TableCell>
              <TableCell>{row.artist}</TableCell>
              <TableCell>{row.dateStreamed}</TableCell>
              <TableCell>{row.streamCount}</TableCell>
              <TableCell>{row.userId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={12} className="text-right">
              <div className="flex items-center justify-end gap-2">
                <DropDownSelect
                  value={pageSize.toString()}
                  onValueChange={handlePageSizeChange}
                  label={"Page Size"}
                  defaultOption={"10"}
                  options={dropDownOptions}
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    currentPage > 1 && setCurrentPage(currentPage - 1)
                  }
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    currentPage < totalPages && setCurrentPage(currentPage + 1)
                  }
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Card>
  );
};

export default StreamsTable;
