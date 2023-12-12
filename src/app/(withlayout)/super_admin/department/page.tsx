"use client";
import {
  useDeleteDepartmentMutation,
  useDepartmentsQuery,
} from "@/app/redux/api/departmentApi";
import { useDebounced } from "@/app/redux/hooks";
import Actionbar from "@/components/ui/Actionbar";
import UMModal from "@/components/ui/Modal";
import UMBBreadCrumb from "@/components/ui/UMBBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import {
  EditOutlined,
  ReloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, message } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

const ManageDepartmentPage = () => {
  const [deleteDepartment] = useDeleteDepartmentMutation();
  // const [modal, contextHolder] = Modal.useModal();

  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useDepartmentsQuery({ ...query });
  const departments = data?.departments;
  const meta = data?.meta;

  // ....👇.....DELETE HANDLER....👇...
  // ...............................
  const deleteHandler = async (id: string) => {
    try {
      message.loading("Deleting...");
      await deleteDepartment(id);
      message.success("Deleted succefully...");
      // console.log(id);
    } catch (error: any) {
      message.error(error?.message);
    }
  };

  // ..👇.......TABLE COLUMNS👇.......
  // ...............................
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt",
      sorter: true,
      render: (data: any) => {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      // sorter: (a: any, b: any) => b.age - a.age,
    },
    {
      title: "Action",

      // sorter:true
      render: (data: any) => {
        return (
          <>
            <Link href={`/super_admin/department/edit/${data?.id}`}>
              <Button style={{ margin: "0 10px" }} type="primary">
                <EditOutlined />
              </Button>
            </Link>
            <UMModal
              title="ARE YOU SURE!"
              content="This data is deleted permanatly?"
              okText="DELETE"
              key={data.id}
              primaryButtonText="DELETE"
              onOk={() => deleteHandler(data?.id)}></UMModal>
          </>
        );
      },
    },
  ];

  // ....👇.....TABLE PAGES ITEMS AND PAGINTION....👇...
  // ...........................................................
  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
    // console.log("page:", page, "pageSize:", pageSize);
  };

  // ....👇.....TABLE CHANGES FOR SORTER....👇...
  // ...........................................................
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;

    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
    // console.log(order, field);
  };

  // ....👇.....RESET BUTTON....👇...
  // ...........................................................
  const resetFilter = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };
  return (
    <div>
      <UMBBreadCrumb items={[{ label: "super_admin", link: `/super_admin` }]} />

      <Actionbar title="Department list">
        <Input
          style={{
            width: "25%",
          }}
          type="text"
          size="large"
          placeholder="Search... "
          prefix={<SearchOutlined />}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <div>
          {/* CHECKING,  AND  CONDITIONAL RENDERING 'RESET BUTTON' */}
          {(!!sortBy || !!sortOrder || searchTerm) && (
            <Button
              onClick={resetFilter}
              style={{ margin: "0 10px" }}
              type="primary"
              title="Reset">
              <ReloadOutlined />
            </Button>
          )}

          <Link href={`/super_admin/department/create`}>
            <Button type="primary">Create</Button>
          </Link>
        </div>
      </Actionbar>

      {/* ....👇.....TABLE ....👇.......................... */}
      <UMTable
        key={departments?.id}
        columns={columns}
        loading={isLoading}
        dataSource={departments}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}></UMTable>
    </div>
  );
};

export default ManageDepartmentPage;
