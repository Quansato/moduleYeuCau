Ext.define('Admin.store.quanli.sDMQuanLiOD', {
    extend: 'Ext.data.Store',

    alias: 'store.sdmquanliod',
    model: "Admin.model.quanli.mDMQuanLiOD",
    
    data: { items: [
        { 
            id: 1,
            tenNhom:'Nhóm 1',
        },{ 
            id: 2,
            tenNhom:'Nhóm 2',
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
