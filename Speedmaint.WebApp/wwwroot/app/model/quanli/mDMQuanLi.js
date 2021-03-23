Ext.define("Admin.model.quanli.mDMQuanLi", {
    extend: "Ext.data.Model",
    idProperty: "maVatTu",
    fields: [
        { name: "vtId", type: "int" ,
        reference:{
            parent: 'mDMQuanLiOD',
            inverse: {
                autoLoad: false
            }
        }
    },
        { name: "maVatTu", type: "int" },
        { name: "tenVatTu", type: "string" },
        { name: "khoDeXuat", type: "string" },
        { name: "donViTinh", type: "string" },
        { name: "soLuong", type: "int" },
        { name: "dinhMucTon", type: "string" },
    ]
});
