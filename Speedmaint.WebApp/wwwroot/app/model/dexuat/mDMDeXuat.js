Ext.define("Admin.model.dexuat.mDMDeXuat", {
    extend: "Ext.data.Model",
    idProperty: "maPhieu",
    fields: [
        { name: "maPhieu", type: "int" },
        { name: "ngayDeXuat", type: "date" },
        { name: "soPhieu", type: "string" },
        { name: "nguoiDeXuat", type: "string" },
        { name: "nguoiDuyet", type: "string" },
        { name: "lyDo", type: "string" },
        { name: "trangThai", type: "string" },
    ]
});
