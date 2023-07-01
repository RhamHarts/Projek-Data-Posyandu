import * as Notifications from "expo-notifications";
import { useEffect } from "react";

export async function getFCMRegistrationTokenAsync() {
  let token = null;

  try {
    const { status } = await Notifications.getPermissionsAsync();
    let finalStatus = status;

    if (status !== "granted") {
      const { status: askStatus } =
        await Notifications.requestPermissionsAsync();
      finalStatus = askStatus;
    }

    if (finalStatus !== "granted") {
      console.log("Permission to receive notifications was denied");
      return token;
    }

    const { data } = await Notifications.getExpoPushTokenAsync();
    token = data;
  } catch (error) {
    console.log("Failed to get FCM registration token:", error);
  }

  return token;
}
