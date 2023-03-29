import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';
import { getName } from '@tauri-apps/api/app';

const appName = await getName();
let permissionGranted = await isPermissionGranted();

if (!permissionGranted) {
  const permission = await requestPermission();
  permissionGranted = permission === 'granted';
}

export async function notify(body) {
  console.log('permissionGranted', permissionGranted)

  if (permissionGranted) {
    sendNotification({
      title: appName,
      body: body,
    });
  }
}