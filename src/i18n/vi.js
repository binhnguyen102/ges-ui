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
            rate: "Quy đổi quà",
          }
        },
      }
    }
  },
  resources: {
    "gm/admin/rates": {
      name: "Tỷ lệ quy đổi",
      titles: {
        create: "Tạo mới tỷ lệ quy đổi",
        edit: "Chỉnh sửa tỷ lệ quy đổi",
        list: "Danh sách tỷ lệ quy đổi",
        show: "Thông tin tỷ lệ quy đổi",
      },
      fields: {
        q: "Tìm kiếm",
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
    "gm/admin/gifts": {
      name: "Danh sách quà",
      titles: {
        show: "Chi tiết thông tin quà",
        list: "Danh sách quà"
      },
      fields: {
        q: "Tìm kiếm",
        id: 'Mã quà',
        providerGiftTitle: 'Tên món quà',
        providerGiftCatTitle: "Tên quà",
        provider: "Nhà cung cấp",
        providerGiftPrice: "Mệnh giá (VND)",
        providerGiftImage: "Hình ảnh",
        providerGiftCodeDisplayType: "Phân loại",
        providerGiftQuantity: "Tổng số quà",
        giftApply: "Ứng dụng hiển thị",
        catId: 'Phân loại',
        catName: 'Phân loại',
        show: 'Hành động',
        action: "Hành động"
        
      }

    }
  },
  common: viCommon,
  errors: {
    pageNotFound:
      'Trang này không khả dụng. Xin vui lòng kiểm tra lại đường link'
  },
};
