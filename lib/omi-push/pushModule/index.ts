import messaging, { FirebaseMessagingTypes} from "@react-native-firebase/messaging";



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

 public _updateTokenToServer = async (): Promise<string | undefined> => {
  try {
   await this.requestUserPermission();
   return await messaging().getToken();
  } catch (error) {
   console.log(error);
  }
  return;
 };

 public _backMessageHandler = () => {
  try{
   messaging().setBackgroundMessageHandler(async remoteMessage => {
    // 앱이 background 일경우
    console.log('Message handled in the background!', JSON.stringify(remoteMessage));
   });
  }catch(error){
   console.log("[messageHandler]", error)
  }
  return;
 }

 public _frontMessageHandler = () => {
  try{
   messaging().onMessage(async remoteMessage => {
    // 앱이 foreground 일경우
    console.log('onMessage', JSON.stringify(remoteMessage));
   });
  }catch(error){
   console.log("[messageHandler]", error)
  }
 }

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
   console.log("[clickPushMessage]", error)
  }
 }

}
