Ext.define("Admin.model.yeucau.mDMYeuCau", {
    extend: "Ext.data.Model",
    idProperty: "maYeuCau",
    fields: [
        { name: "maYeuCau", type: "int" },
        { name: "maLoai", type: "int" },
        { name: "maTrangThai", type: "int" },
        { name: "maMucDo", type: "int" },
        { name: "maNV", type: "int" },
        { name: "maKH", type: "int" },
        { name: "tenTrangThai", type: "string" },
        { name: "tenLoai", type: "string" },
        { name: "tenMucDo", type: "string" },
        { name: "tenKH", type: "string" },
        { name: "sdt", type: "string" },
        { name: "email", type: "string" },
        { name: "tenNV", type: "string" },
        { name: "ngayTiepNhan", type: "date" },
        { name: "noidung", type: "string" },
        { name: "diaDiem", type: "string" },
        { name: "moTa", type: "string" }
    ]
});
