public with sharing class recordOwner {
    
    @AuraEnabled
    public static string ownerName (sObject sobj, string recOwnerName){
      
        Schema.sObjectType objType = sobj.getSObjectType();
        Schema.DescribeSObjectResult objDescribe =objType.getDescribe();
  map <string, schema.SObjectField> fieldMap = schema.getGlobalDescribe().get('sobj').getDescribe().fields.getMap();

        
         return(recOwnerName);
       
    }
}