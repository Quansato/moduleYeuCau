Ext.define('Admin.store.quanli.sDMQuanLi', {
    extend: 'Ext.data.Store',

    alias: 'store.sdmquanli',
    model: "Admin.model.quanli.mDMQuanLi",
    
    data: { items: [
        { 
            vtId: 1,
            maVatTu: 1,
            tenVatTu:'Máy bơm',
            khoDeXuat:'Kho 1',
            donViTinh:'số cái',
            soLuong:6,
            dinhMucTon:'Muc 1',
        },{ 
            vtId: 2,
            maVatTu: 2,
            tenVatTu:'Tủ lạnh',
            khoDeXuat:'Kho 3',
            donViTinh:'số cái',
            soLuong:6,
            dinhMucTon:'Muc 1',
        },{ 
            vtId: 1,
            maVatTu: 3,
            tenVatTu:'Máy khoan',
            khoDeXuat:'Kho 1',
            donViTinh:'số cái',
            soLuong:4,
            dinhMucTon:'Muc 1',
        },{ 
            vtId: 1,
            maVatTu: 4,
            tenVatTu:'Máy phát điện',
            khoDeXuat:'Kho 1',
            donViTinh:'số cái',
            soLuong:5,
            dinhMucTon:'Muc 1',
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
