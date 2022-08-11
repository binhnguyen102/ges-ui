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
            transaction: "Hiển thị giao dịch"
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

    }, 
    "gm/admin/transaction": {
      name: "Thiết lập ứng dụng giao dịch",
      titles: {
        show: "Chi tiết ứng dụng giao dịch",
        list: "Danh sách ứng dụng giao dịch"
      },
      fields: {
        q: "Tìm kiếm",
        // id: 'Mã ứng dụng hiển thị',
        id: 'ID',
        appType:'Đối tượng áp dụng',
        totalPrice: "Mệnh giá (VND)",
        totalPoint: "Điểm quy đổi",
        providerTotalPaid: 'Nhà cung cấp Tổng số tiền đã trả',
        providerGiftCatTitle: "Tên quà",
        providerCodeExpire: "Mã nhà cung cấp Hết hạn",
        provider: "Nhà cung cấp",
        providerGiftPrice: "Mệnh giá (VND)",
        providerGiftImage: "Hình ảnh",
        clientTransactionId: "giao dịch khách hàng",
        providerGiftQuantity: "Tổng số quà",
        giftApply: "Ứng dụng hiển thị",
        catId: 'Phân loại',
        catName: 'Phân loại',
        status: "trạng thái",
        createdBy: "Được tạo bởi",
        show: 'Hành động',
        action: "Hành động",
        updatedAt: "Cập nhật tại",
        updatedBy: "Cập nhật ",
        createdAt: "Được tao bởi",
        createdBy: "Được tạo",
        tags: "tags",
        // providerGiftId: "ID nhà cung cấp quà tặng",
        providerCodeImage:"Mã hình ảnh nhà cung cấp",
        providerTransactionDetailId: "Id Chi tiết Giao dịch của nhà cung cấp",
        providerTotalPaid: "Tổng số tiền nhà cung cấp đã trả",
        billingTransactionId: "ID giao dịch thanh toán",
        balance:"Số dư",
        giftInfo:"Tên món quà",
        providerCode: "Mã nhà cung cấp",
        providerGiftId: "ID quà tặng của nhà cung cấp",
        billingBalance: "Số dư thanh toán",
        providerToken: "provider Token"

        
      }

    }
  },
  common: viCommon,
  errors: {
    pageNotFound:
      'Trang này không khả dụng. Xin vui lòng kiểm tra lại đường link'
  },
};
