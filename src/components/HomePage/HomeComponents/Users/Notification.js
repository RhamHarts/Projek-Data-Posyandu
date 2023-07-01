import * as Notifications from "expo-notifications";

export function registerNotificationHandlers() {
  useEffect(() => {
    // Menangani pesan notifikasi yang diterima saat aplikasi berjalan di foreground
    Notifications.addNotificationReceivedListener(handleNotification);

    // Menangani tindakan pengguna pada notifikasi saat aplikasi berjalan di latar belakang
    Notifications.addNotificationResponseReceivedListener(
      handleNotificationResponse
    );

    return () => {
      // Membersihkan listener saat komponen unmount
      Notifications.removeNotificationReceivedListener(handleNotification);
      Notifications.removeNotificationResponseReceivedListener(
        handleNotificationResponse
      );
    };
  }, []);

  function handleNotification(notification) {
    console.log("Notifikasi diterima:", notification);
    // Lakukan sesuatu saat notifikasi diterima saat aplikasi berjalan di foreground
  }

  function handleNotificationResponse(response) {
    console.log("Tindakan notifikasi:", response);
    // Lakukan sesuatu saat pengguna berinteraksi dengan notifikasi saat aplikasi berjalan di latar belakang
  }
}
