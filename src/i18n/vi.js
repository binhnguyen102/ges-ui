import vnMessage from './ra-vi';
import viCommon from './vi-common';
export default {
  ...vnMessage,
  pos: {
    search: 'Tìm kiếm',
    configuration: 'Cài đặt',
    language: 'Ngôn ngữ',
    theme: {
      name: 'Theme',
      light: 'Sáng',
      dark: 'Tối'
    },
    menu: {
      admin: {
        ges: {
          title: "Quản lý chung",
          children: {
            gift: "Danh sách quà",
            history: "Lịch sử giao dịch",
            rate: "Quy đổi",

          }
        },
      }
    }
  },
  resources: {
    "gm/rates": {
      name: "Tỷ lệ quy đổi",
      titles: {
        create: "Tạo mới tỷ lệ quy đổi",
        edit: "Chỉnh sửa tỷ lệ quy đổi",
        list: "Danh sách tỷ lệ quy đổi"
      },
      fields: {
        name: "Tên tỷ lệ",
        createdAt: "Ngày tạo",
        startDate: "Ngày áp dụng",
        endDate: "Ngày kết thúc",
        price: "Mệnh giá (VND)",
        point: "Điểm quy đổi",
        appType: "Đối tượng áp dụng",
        status: "Trạng thái",
        action: "Hành động"
      }
    },
    "gm/gifts": {
      
    }
  },
  common: viCommon,
  errors: {
    pageNotFound:
      'Trang này không khả dụng. Xin vui lòng kiểm tra lại đường link'
  },
};
