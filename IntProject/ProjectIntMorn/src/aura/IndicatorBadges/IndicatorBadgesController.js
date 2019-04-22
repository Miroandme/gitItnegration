({
    doInit : function(component, event, helper) {
        /*
        var sObj = component.get("v.sObjectName");
        if(sObj){
            helper.getLabelForRecord(component, sObj);
        }
        */
        
        var strRecordId = component.get("v.recordId");
        var sObj = component.get("v.sObjectName");
        if(strRecordId && sObj){
            helper.getOwnerPhotoURL(component, strRecordId, sObj);
        }
    },
})