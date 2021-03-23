
Ext.define('Admin.model.congviec.mDMCongViec', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.tree-list',
    stores: {
        navItems: {
            type: 'tree',
            root: {
                expanded: true,

                children: [{
                    text: 'Cơ cấu tổ chức gốc',
                    leaf: true,
                    iconCls: 'x-fa fa-users'
                }, {
                    text: 'Hành chính',
                    expanded: false,
                    iconCls: 'x-fa fa-users',
                    style: {
                        Color: '#efe0e0'
                    },
                    children: [{
                        text: 'KT-Kế toán',
                        leaf: true,
                        iconCls: 'x-fa fa-users',
                    }, {
                        text: 'NS-Nhân sự',
                        leaf: true,
                        iconCls: 'x-fa fa-users',
                    },
                    ]
                    }, {
                        text: 'Phòng kĩ thuật',
                        expanded: false,
                        iconCls: 'x-fa fa-users',
                        style: {
                            Color: '#efe0e0'
                        },
                        children: [{
                            text: 'Đội 1',
                            leaf: true,
                            iconCls: 'x-fa fa-users',
                        }
                        ]
                    }, {
                        text: 'VanHanh-Vận hành',
                        expanded: false,
                        iconCls: 'x-fa fa-users',
                        style: {
                            Color: '#efe0e0'
                        },
                        children: [{
                            text: 'Đội 1',
                            leaf: true,
                            iconCls: 'x-fa fa-users',
                        },{
                            text: 'Đội 2',
                            leaf: true,
                            iconCls: 'x-fa fa-user',
                        }, {
                            text: 'Đội 3',
                            leaf: true,
                            iconCls: 'x-fa fa-user',
                        },
                        ]
                    }]
            }
        }
    }
});
/////
Ext.define("Admin.model.congviec.mDMTrangThai", {
    extend: "Ext.data.Model",
    idProperty: "maTT",
    fields: [
        { name: "maTT", type: "int" },
        { name: "tenTT", type: "string" },
    ]
});

Ext.define("Admin.model.congviec.mDMLoaiCongViec", {
    extend: "Ext.data.Model",
    idProperty: "maCV",
    fields: [
        { name: "maCV", type: "int" },
        { name: "tenCV", type: "string" },
    ]
});

Ext.define("Admin.model.congviec.mDMNhomCongViec", {
    extend: "Ext.data.Model",
    idProperty: "maNhom",
    fields: [
        { name: "maNhom", type: "int" },
        { name: "tenNhom", type: "string" },
    ]
});

Ext.define("Admin.model.congviec.mDMDetailCongViec", {
    extend: "Ext.data.Model",
    idProperty: "maCVdetail",
    fields: [
        { name: "maCVdetail", type: "int" },
        { name: "title", type: "string" },
        { name: "nguoithucHien", type: "string" },
        { name: "nguoiGiao", type: "string" },
        { name: "noiDung", type: "string" },
        { name: "tienDo", type: "string" },
        { name: "ngaybatDau", type: "date", format: 'm/d/Y'},
        { name: "ngayketThuc", type: "date", format: 'm/d/Y' },
    ]
});

Ext.define("Admin.model.congviec.mDMReportCongViec", {
    extend: "Ext.data.Model",
    idProperty: "mareport",
    fields: [
        { name: "mareport", type: "int" },
        { name: "hoanthanh", type: "int" },
        { name: "hoanthanhMuon", type: "int" },
        { name: "tilehoanThanh", type: "string" },
        { name: "tilehoanthanhMuon", type: "string" },
        { name: "thoigianhoanThanh", type: "string" },
        { name: "mtbf", type: "string" },
        { name: "mttr",  type: "float" },
        { name: "downtime", type: "float" },
        { name: "partused", type: "string" },
        
    ]
});

/*Ext.define("Admin.model.congviec.mDMCostCongViec", {
    extend: "Ext.data.Model",
    idProperty: "maCost",
    fields: [
        { name: "maCost", type: "int" },
        { name: "nameCost", type: "string" },
        { name: "data1", type: "float" },
       *//* { name: "invoiceCost", type: "float" },
        { name: "partcostduKien", type: "float" },
        { name: "laborcostduKien", type: "float" },*//*
    ]
});*/