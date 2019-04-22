public class INDICATOR_Controller {
    @AuraEnabled
    public static String getSObjectLabel(String sObjName){
        String label = Schema.getGlobalDescribe().get(sObjName).getDescribe().getLabel();
       
               return label;
    }    
    @AuraEnabled
    public static String getPhotoURL(String thisRecordId, String sObjName){
        
        String strURLPhoto = '';

		Map<String, Schema.SObjectType> gd = Schema.getGlobalDescribe();
        Schema.SObjectType st = gd.get(sObjName);
        Sobject s = st.newSobject();
        
		s = Database.query('SELECT OwnerId FROM ' + sObjName + ' WHERE Name = :thisRecordId');
                
        String strUserId = (string)s.get('OwnerId');
        
        User u = Database.query('SELECT SmallPhotoUrl FROM USER Where Id = :strUserId LIMIT 1');
        
        if(u.SmallPhotoUrl != NULL){
            strURLPhoto = u.SmallPhotoUrl;
        }
        
        return strURLPhoto;
    }
}