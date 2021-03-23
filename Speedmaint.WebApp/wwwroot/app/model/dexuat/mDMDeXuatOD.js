Ext.define("Admin.model.dexuat.mDMDeXuatOD", {
    extend: "Ext.data.Model",
    idProperty: "maVatTu",
    fields: [
        { name: "maPhieu", type: 'int' ,reference: 'mDMDeXuat'},
        { name: "maVatTu", type: "string" },
        { name: "donViTinh", type: "string" },
        { name: "deXuat", type: "int" },
        { name: "pheDuyet", type: "int" },
        { name: "donGia", type: "int" },
        { name: "thanhTien", type: "int" },
        { name: "ghiChu", type: "string" },

    ]
});
