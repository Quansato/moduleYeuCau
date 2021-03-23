Ext.define('Admin.store.dexuat.sDMDeXuatOD', {
    extend: 'Ext.data.Store',

    alias: 'store.sdmdexuatod',
    model: "Admin.model.dexuat.mDMDeXuatOD",
    
    data: { items: [
        { 
            maPhieu:1,
            maVatTu:'B1',
            donViTinh:'C',
            deXuat:1,
            pheDuyet:5,
            donGia:1000000,
            thanhTien:5000000,
            
        },{ 
            maPhieu:1,
            maVatTu:'B2',
            donViTinh:'C',
            deXuat:1,
            pheDuyet:5,
            donGia:1000000,
            thanhTien:5000000,
        },{ 
            maPhieu:2,
            maVatTu:'B4',
            donViTinh:'C',
            deXuat:1,
            pheDuyet:5,
            donGia:1000000,
            thanhTien:5000000,
        },

    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
