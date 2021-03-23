Ext.define('Admin.store.dexuat.sDMDeXuat', {
    extend: 'Ext.data.Store',

    alias: 'store.sdmdexuat',
    model: "Admin.model.dexuat.mDMDeXuat",
    
    data: { items: [
        { 
            maPhieu:1,
            ngayDeXuat:'08/07/2020',
            soPhieu:'KX88888',
            nguoiDeXuat:'admin',
            nguoiDuyet:'admin',
            lyDo:'Muc 1',
            trangThai:'Chờ duyệt'
        },{ 
            maPhieu:2,
            ngayDeXuat:'08/07/2020',
            soPhieu:'KX88888',
            nguoiDeXuat:'admin',
            nguoiDuyet:'admin',
            lyDo:'Muc 1',
            trangThai:'Đã duyệt'
        },{ 
            maPhieu:3,
            ngayDeXuat:'08/07/2020',
            soPhieu:'KX88888',
            nguoiDeXuat:'admin',
            nguoiDuyet:'admin',
            lyDo:'Muc 1',
            trangThai:'Đã xử lý'
        },{ 
            maPhieu:4,
            ngayDeXuat:'08/07/2020',
            soPhieu:'KX88888',
            nguoiDeXuat:'admin',
            nguoiDuyet:'admin',
            lyDo:'Muc 1',
            trangThai:'Đã xử lý'
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
