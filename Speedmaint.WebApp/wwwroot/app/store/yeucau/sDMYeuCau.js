Ext.define("Admin.store.yeucau.sDMYeuCau", {
    extend: "Ext.data.Store",
    alias: "store.sdmyeucau",
    model: "Admin.model.yeucau.mDMYeuCau",
    autoLoad: true,
    pageSize: 5,
    sorters: {
        direction: 'ASC',
        property: 'ngayTiepNhan'
    },

    proxy: {
        type: "rest",
        api: {
            read: "",
            create: "",
            update: "",
            destroy: ""
        },
        reader: {
            type: "json",
            rootProperty: "items",
            successProperty: 'success',
            totalProperty: "totalRecord"
        },
        appendId: true,
        writer: {
            writeAllFields: true,
            type: "json"
        },
        listeners: {
            exception: function (proxy, response, op) {
                var error = JSON.parse(response.responseText).error;
                if (response.status == 401) {
                    /* abp.ajax.handleUnAuthorizedRequest(
                         abp.ajax.showError({ message: error.message }),
                         abp.appPath*/
                    // );
                }
                else {
                    // abp.ajax.showError({ message: error.message });
                }
            }
        }
    }
});
