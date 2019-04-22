({
    getLabelForRecord : function(component, sObj){
        var action = component.get("c.getSObjectLabel");
        action.setParams({
            sObjName : sObj
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var label = response.getReturnValue();
            component.set("v.objLabel", label);
            } else if(state === "ERROR"){
                console.log('Error: ' + JSON.stringify(response.error));
            } else {
                console.log('Unknown problem, state: '+ state + ', error: ' + JSON.stringify(response.error));
            }
        });
        $A.enqueueAction(action);
    },
    //future code here
    getOwnerPhotoURL : function(component, strRecordId, sObj){
        console.log('$$$$$$$$$$$ strRecordId = ' + strRecordId);
        var action = component.get("c.getPhotoURL");
        action.setParams({
            thisRecordId:strRecordId,
            sObjName:sObj
        });
        console.debug('$$$$$$$$$$ action = ' + action);
        action.setCallback(this, function(response){
            console.log('$$$$$$$$$$ response = ' + response);
            var state = response.getState();
            if(state === "SUCCESS"){
                var theDamnURL = response.getReturnValue();
            component.set("v.ownerImageURL", theDamnURL);
            } else if(state === "ERROR"){
                console.log('Error: ' + JSON.stringify(response.error));
            } else {
                console.log('Unknown problem, state: '+ state + ', error: ' + JSON.stringify(response.error));
            }
        });
        $A.enqueueAction(action);
    },
})