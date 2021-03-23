/*Ext.define("Admin.view.yeucau.dsDMYeuCauModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-dsdmyeucau",
    data: {
        rSelected: null
    },
    stores: {
        store: { type: "sdmyeucau" }
    }
});*/


Ext.define("Admin.view.map.mapVN", {
    extend: "Ext.container.Container",
    alias: "widget.mapVN",
    controller: "mapVN",
    layout:'fit',
    items: [{
        xtype: 'panel',
        padding: '5 5 5 5',
        width: '100%',
        items: [{
            xtype: 'component',
            height: '80%',
            width: 1600,
            html: '<div style="width: 100%;">' +
                '<div id="divMapId" class= "map" ></div>' +
                '<pre id="coordinates" class="coordinates"></pre>'+
                '</div>',
            listeners: {
                afterRender: 'onMap'
            }
        }]
    }]
});

Ext.define("Admin.view.map.mapVNController", {
    extend: "Ext.app.ViewController",
    alias: "controller.mapVN",
    storeInfo: null,
    refs: null,
    init: function () {
        var me = this;
        me.callParent(arguments);
    },
    onAfterrender: function () {
        var me = this;
        me.refs = me.getReferences();
        me.storeInfo = me.getViewModel().storeInfo;
        me.onSearch();
    },

    specialkey: function (field, e) {
        var me = this;
        if (e.getKey() == e.ENTER) {
            me.onSearch();
        }
    },

    onMap: function () {
        var map = new mapboxgl.Map({
            container: 'divMapId',
            center: [105.82397460937636, 21.03589385426021], // starting position
            zoom: 7 
        });
        var vnMap = new mapboxgl.ekmap.TiledVietNamMapLayer({
            token: tokenVN
        }).addTo(map);

        var marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([105.82397460937636, 21.03589385426021])
            .addTo(map);

        function onDragEnd() {
            var lngLat = marker.getLngLat();
            coordinates.style.display = 'block';
            coordinates.innerHTML =
                'Kinh độ: ' + lngLat.lng + '<br />Vĩ độ: ' + lngLat.lat;
        }

        marker.on('dragend', onDragEnd);

        map.addControl(new mapboxgl.NavigationControl(), "top-left");


    }
});
