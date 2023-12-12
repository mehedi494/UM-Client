"use client";
import { Table } from "antd";

type UMtableProps = {
  loading?: boolean;
  columns?: any;
  dataSource?: any;
  pageSize?: number;
  totalPages?: number;
  showSizeChanger?: boolean;
  showPagination?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
  children?: React.ReactNode;
};

const UMTable: React.FC<UMtableProps> = ({
  loading = false,
  columns,
  dataSource,
  pageSize,
  totalPages,
  showSizeChanger = true,
  onPaginationChange,
  onTableChange,
  showPagination = true,
}: UMtableProps) => {
  const paginationConfig = showPagination
    ? {
        pageSize,
        total: totalPages,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default UMTable;
