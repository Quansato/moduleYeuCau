Ext.define("Admin.model.widget.mDMWidget", {
    extend: "Ext.data.Model",
    idProperty: "maCV",
    fields: [
        { name: "maCV", type: "int" },
        { name: "title", type: "string" },
        { name: "subTitle", type: "string" },
        { name: "content", type: "int" },
        { name: "subContent", type: "string" },
        { name: "color", type: "string" },

    ]
});