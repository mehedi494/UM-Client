import { IDepartments, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";
const DEPARTMENT_URL = "/management-departments";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //GET MULTI DEPARTMENTS
    departments: build.query({
      query: (arg: Record<string, any>) => ({
        url: DEPARTMENT_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IDepartments, meta: IMeta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [tagTypes.DEPARTMENT],
    }),

    // GET SINGLE DEPARTMENT BY ID
    department: build.query({
      query: (id: string) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),

      providesTags: [tagTypes.DEPARTMENT],
    }),

    // UPDATE SINGLE DEPARTMENT
    updateDepartment: build.mutation({
      query: (data) => ({
        url: `${DEPARTMENT_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),

      invalidatesTags: [tagTypes.DEPARTMENT],
    }),

    // CREATE SINGLE DEPARTMENT
    addDepartment: build.mutation({
      query: (data) => ({
        url: DEPARTMENT_URL,
        method: "POST",
        data: data,
      }),
    }),
    // DELETE SINGLE DEPARTMENT BY ID
    deleteDepartment: build.mutation({
      query: (id: string) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.DEPARTMENT],
    }),
  }),
});

export const {
  useDepartmentsQuery,
  useAddDepartmentMutation,
  useUpdateDepartmentMutation,
  useDepartmentQuery,
  useDeleteDepartmentMutation
} = departmentApi;
