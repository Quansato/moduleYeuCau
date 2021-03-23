Ext.define('Admin.store.widget.sDMWidget', {
    extend: 'Ext.data.Store',

    alias: 'store.sdmwidget1',
    model: "Admin.model.widget.mDMWidget",

    data: {
        items: [
            {
                maCV: 1,
                title: 'PLANNED MAINTENANCE PERCENTAGE',
                subTitle: 'All Assets & All Groups',
                content: 350,
                subContent:'Offline 6 hour',
                color:'green'
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