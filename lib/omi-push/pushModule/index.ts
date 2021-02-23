import messaging, { FirebaseMessagingTypes} from "@react-native-firebase/messaging";
import firebase from 'react-native-firebase';

export class PushModule {
 public async requestUserPermission() {
  try {
   const authStatus = await messaging().requestPermission();
   const enabled =
       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
       authStatus === messaging.AuthorizationStatus.PROVISIONAL;
   if (enabled) {
    console.log('Authorization status:', authStatus);
   }
   return enabled
  }catch(error){
   console.log(error);
  }
 }

 public _updateTokenToServer = async (): Promise<string | null> => {
  try {
   await this.requestUserPermission();
   return await messaging().getToken();
  } catch (error) {
   console.log(error);
  }
  return null;
 };

 public backgroundMessage(){
  try{
   messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
   });
  }catch(error){

  }
 }

 public clickPushMessage(){
  try{
   messaging().onNotificationOpenedApp((remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
    //클릭 후 url 연동
   })
  }catch(error){

  }
 }

}
