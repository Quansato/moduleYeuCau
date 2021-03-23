Ext.define('Admin.view.dexuat.custom',{
    extend: "Ext.Component",
    xtype: 'alias.datepicker',
    controller: "custom",
    items:[{
        xtype:'component',
        html:'<div id="reportrange" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 200px;height:30px">'+
            '<i class="fa fa-calendar"></i>&nbsp;'+
            '<span></span>'+
            '</div>',
        listeners:{
            afterRender:'onJQ'
        }
    }]
})



Ext.define("Admin.view.yeucau.cnDMYeuCauController", {
    extend: "Ext.app.ViewController",
    alias: "controller.custom",

    init: function () {
        var me = this;
        me.callParent(arguments);
    },
    onJQ:function(){
        $(function() {
    
            var start = moment().subtract(29, "days");
            var end = moment();
        
            function cb(start, end) {
                $("#reportrange span").html(start.format("DD/MM/YYYY") + " - " + end.format("DD/MM/YYYY"));
            }
        
            $("#reportrange").daterangepicker({
                startDate: start,
                endDate: end,
                ranges: {
                   "Hôm nay": [moment(), moment()],
                   "Hôm qua": [moment().subtract(1, "days"), moment().subtract(1, "days")],
                   "7 ngày trước": [moment().subtract(6, "days"), moment()],
                   "30 ngày trước": [moment().subtract(29, "days"), moment()],
                   "Tháng này": [moment().startOf("month"), moment().endOf("month")],
                   "Tháng trước": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
                }
            }, cb);
        
            cb(start, end);
        
        });
    },
})