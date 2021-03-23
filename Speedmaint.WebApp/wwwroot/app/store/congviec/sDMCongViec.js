Ext.define('Admin.store.congviec.sDMTrangThai', {
    extend: 'Ext.data.Store',

    alias: 'store.sdmcongviec-trangthai',
    model: "Admin.model.congviec.mDMTrangThai",
    
    data: { items: [
        { 
            maTT:1,
            tenTT:'Tất cả',
        },{ 
            maTT:2,
            tenTT:'Chưa phân công',
        },{ 
            maTT:3,
            tenTT:'Đã phân công',
        },{ 
            maTT:4,
            tenTT:'Đã nhận việc',
        },{
            maTT: 5,
            tenTT: 'Đang thực hiện',
        },{
            maTT: 6,
            tenTT: 'Hoàn thành',
        },{
            maTT: 7,
            tenTT: 'Hoàn thành quá hạn',
        },{
            maTT: 8,
            tenTT: 'Hoàn thành đúng hạn',
        },{
            maTT: 9,
            tenTT: 'Chưa hoàn thành',
        },{
            maTT: 10,
            tenTT: 'Tạm dừng',
        },{
            maTT: 11,
            tenTT: 'Hủy',
        }
            
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

//Loaicongviec

Ext.define('Admin.store.congviec.sDMLoaiCongViec', {
    extend: 'Ext.data.Store',

    alias: 'store.sdmcongviec-loaicv',
    model: "Admin.model.congviec.mDMLoaiCongViec",

    data: {
        items: [
            {
                maCV: 1,
                tenCV: 'Tất cả',
            }, {
                maCV: 2,
                tenCV: 'Công việc lặp lại',
            }, {
                maCV: 3,
                tenCV: 'Bảo trì',
            }, {
                maCV: 4,
                tenCV: 'ddd',
            }, {
                maCV: 5,
                tenCV: 'Kiểm tra',
            }, {
                maCV: 6,
                tenCV: 'Phòng ngừa',
            }, {
                maCV: 7,
                tenCV: 'Sửa chữa',
            },

        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

Ext.define('Admin.store.congviec.sDMNhomCongViec', {
    extend: 'Ext.data.Store',

    alias: 'store.sdmcongviec-nhomcv',
    model: "Admin.model.congviec.mDMNhomCongViec",

    data: {
        items: [
            {
                maNhom: 1,
                tenNhom: 'Tất cả',
            }, {
                maNhom: 2,
                tenNhom: 'Dự án cải tạo ADB',
            }, {
                maNhom: 3,
                tenNhom: 'Dự án cải tạo',
            }, {
                maNhom: 4,
                tenNhom: 'Dự án phát triển',
            }, 

        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

Ext.define('Admin.store.congviec.sDMDetailCongViec', {
    extend: 'Ext.data.Store',
    alias: 'store.sdmcongviec-detailcv',
    model: "Admin.model.congviec.mDMDetailCongViec",

    data: {
        items: [
            {
                maCVdetail: 1,
                title:'CV-ThemMoi',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen B',
                noiDung: 'test',
                tienDo:'10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc:'09/09/2020'
            }, {
                maCVdetail: 2,
                title: 'CV-0009',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen C',
                noiDung: 'Yêu cầu bảo trì',
                tienDo: '10%',

                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            }, {
                maCVdetail: 3,
                title: 'CV-KT23478',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen D',
                noiDung: 'Thử sản phẩm',
                tienDo: '10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            }, {
                maCVdetail: 4,
                title: 'CV-4149',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen E',
                noiDung: 'test',
                tienDo: '10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            }, {
                maCVdetail: 5,
                title: 'CV-00429',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen A',
                noiDung: 'test',
                tienDo: '10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            }, {
                maCVdetail: 6,
                title: 'CV-00429',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen A',
                noiDung: 'test',
                tienDo: '10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            }, {
                maCVdetail: 7,
                title: 'CV-00429',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen A',
                noiDung: 'test',
                tienDo: '10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            }, {
                maCVdetail: 8,
                title: 'CV-00429',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen A',
                noiDung: 'test',
                tienDo: '10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            }, {
                maCVdetail: 9,
                title: 'CV-00429',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen A',
                noiDung: 'test',
                tienDo: '10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            }, {
                maCVdetail: 10,
                title: 'CV-00429',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen A',
                noiDung: 'test',
                tienDo: '10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            }, {
                maCVdetail: 11,
                title: 'CV-00429',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen A',
                noiDung: 'test',
                tienDo: '10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            },

        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

Ext.define('Admin.store.congviec.sDMReportCongViec', {
    extend: 'Ext.data.Store',
    alias: 'store.sdmreportcv',
    model: "Admin.model.congviec.mDMReportCongViec",
    storeId: 'dataviewstore',
    data: {
        items: [
            {
                mareport: 1,
                hoanthanh: 8,
                hoanthanhMuon: 10,
                tilehoanThanh: '44.44 %',
                tilehoanthanhMuon: '55.55 %',
                thoigianhoanThanh: '22.5 hrs',
                mtbf: 'N/A',
                mttr: '7.6',
                downtime: '3.47',
                partused: '6.250',
            }

        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

Ext.define('Admin.store.congviec.sDMCostCongViec', {
    extend: 'Ext.data.Store',
    alias: 'store.sdmcostcv',
    fields: ['nameCost', 'data1'],
    data: {
        items: [
            {
                nameCost: 'Part Cost',
                data1:1231.4
            }, {
                nameCost: 'Labor Cost',
                data1: 231.4
            }, {
                nameCost: 'Invoice Cost',
                data1: 423.7
            }

        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

Ext.define('Admin.store.congviec.sDMCostDuKienCongViec', {
    extend: 'Ext.data.Store',
    alias: 'store.sdmcostdukiencv',
    fields: ['month', 'labor','parts'],
    data: {
        items: [
            { month: 'Jan, 2021', labor: 0, parts: 327},
            { month: 'Feb, 2021', labor: 0, parts: 244 },
            { month: 'Mar, 2021', labor: 0, parts: 211},
            { month: 'Apr, 2021', labor: 0, parts: 110 },
            { month: 'May, 2021', labor: 0, parts: 37 },
            { month: 'Jun, 2021', labor: 0, parts: 222 },
            { month: 'Jul, 2021', labor: 0, parts: 101 },
            { month: 'Aug, 2021', labor: 0, parts: 327 },
            { month: 'Sep, 2021', labor: 0, parts: 327 },
            { month: 'Oct, 2021', labor: 0, parts: 327 },
            { month: 'Nov, 2021', labor: 0, parts: 327 },
            { month: 'Dec, 2021', labor: 0, parts: 327 }

        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});