// @mui icons
import Icon from "@mui/material/Icon";
import * as React from "react";

const settingsRoutes = [
  {
    title: "الاعدادات العامة",
    details: [
      {
        name: "الخدمات",
        key: "service",
        icon: <Icon fontSize="small">dashboard</Icon>,
        tableName: "services",
        headers: [
          { name: "الرقم", type: "" },
          { name: "الاسم", type: "" },
          { name: "عدد الخطوات", type: "docs", table: "clearance_steps" },
          { name: "الحالة", type: "status" },
        ],
        model: { id: "0", name: "", steps: [], is_active: "" },
      },
      {
        name: "الخطوات",
        key: "steps",
        icon: <Icon fontSize="small">dashboard</Icon>,
        tableName: "clearance_steps",
        headers: [
          { name: "الرقم", type: "" },
          { name: "الاسم", type: "" },
          { name: "المستندات الضرورية", type: "data", table: "clearance_docs" },
          { name: "البيانات الضرورية", type: "docs", table: "clearance_data" },
          { name: "الحالة", type: "status" },
        ],
        model: {
          id: "0",
          name: "",
          necessary_docs: "",
          necessary_data: "",
          is_active: "0",
        },
      },
      {
        name: "المستندات",
        key: "documents",
        icon: <Icon fontSize="small">dashboard</Icon>,
        tableName: "clearance_docs",
        headers: [
          { name: "الرقم", type: "" },
          { name: "الاسم", type: "" },
          { name: "نوع المستند", type: "badge" },
          { name: "الحالة", type: "status" },
        ],
        model: {
          id: "0",
          name: "",
          type: "0",
          is_active: "0",
        },
      },
      {
        name: "البيانات",
        key: "clearance_data",
        icon: <Icon fontSize="small">dashboard</Icon>,
        tableName: "clearance_data",
        headers: [
          { name: "الرقم", type: "" },
          { name: "الاسم", type: "" },
          { name: "الحالة", type: "status" },
        ],
        model: {
          id: "0",
          name: "",
          is_active: "0",
        },
      },
      {
        name: "الخطوط الملاحية",
        key: "shipping_lines",
        icon: <Icon fontSize="small">dashboard</Icon>,
        tableName: "shipping_lines",
        headers: [
          { name: "الرقم", type: "" },
          { name: "الاسم", type: "" },
          { name: "رقم الهاتف", type: "" },
          { name: "الايميل", type: "" },
          { name: "العنوان", type: "" },
          { name: "الموقع", type: "" },
          { name: "الحالة", type: "status" },
        ],
        model: {
          id: "0",
          name: "",
          phone: "",
          email: "",
          address: "",
          website: "",
          is_active: "0",
        },
      },
      {
        name: "المستخدمون",
        key: "users",
        icon: <Icon fontSize="small">dashboard</Icon>,
        tableName: "users",
        headers: [
          { name: "الرقم", type: "" },
          { name: "الاسم", type: "" },
          { name: "رقم الهاتف", type: "" },
          { name: "اسم المستخدم", type: "" },
          { name: "كلمة المرور", type: "" },
          { name: "نوع الحساب",
            type: "local_select",
            selectList: [
              {
                value: 0,
                label: "متابع",
              },
              {
                value: 1,
                label: "مدير",
              },
            ]
          },
          { name: "الحالة", type: "status" },
        ],
        // model: { id: "0", name: "", steps: [], is_active: "" },
        model: {
          id:"1",
          name:"",
          phone:"",
          username:"",
          password:"",
          type:[],
          status:"0"},
      }
    ],
  },
  {
    title: "التبنيد",
    details: [
      {
        name: "فئات السلع",
        key: "clearance_categs",
        icon: <Icon fontSize="small">dashboard</Icon>,
        tableName: "clearance_categs",
        headers: [
          { name: "الرقم", type: "" },
          { name: "الاسم", type: "" },
          { name: "الحالة", type: "status" },
        ],
        model: {
          id: "0",
          name: "",
          is_active: "0",
        },
      },
      {
        name: "بنود السلعة",
        key: "clearance_items",
        icon: <Icon fontSize="small">dashboard</Icon>,
        tableName: "clearance_items",
        customFetch: {table:"clearance_items",
          table3:"clearance_categs", field3:"clearance_categ_id"
        },
        headers: [
          { name: "الرقم", type: "" },
          { name: "الفئة", type: "data", table: "clearance_categs", single: true },
          { name: "الاسم", type: "" },
          { name: "الكود", type: "" },
          { name: "الحالة", type: "status" },
        ],
        model: {
          id: "0",
          clearance_categ_id: [],
          name: "",
          code: "",
          is_active: "0",
        },
      },
    ],
  },
];

export default settingsRoutes;
