import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;

import com.google.firebase.messaging.FirebaseMessagingService;

public class MyFirebaseMessagingService extends FirebaseMessagingService {

    private static final String SHARED_PREFS_KEY = "FCM_TOKEN";
    private static final String TAG = "FCM Token";

    @Override
    public void onNewToken(String token) {
        super.onNewToken(token);
        Log.d(TAG, "Refreshed token: " + token);

        // Simpan token ke Shared Preferences
        saveTokenToSharedPreferences(token);

        // Lakukan tindakan lain yang Anda perlukan dengan token ini
        // Misalnya, kirim token ke server Anda atau simpan di database lokal
        sendTokenToServer(token);
    }

    private void saveTokenToSharedPreferences(String token) {
        SharedPreferences sharedPreferences = getSharedPreferences(SHARED_PREFS_KEY, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putString("token", token);
        editor.apply();
    }

    private void sendTokenToServer(String token) {
        // Implementasikan logika pengiriman token ke server di sini
        // Misalnya, menggunakan library HTTP seperti OkHttp atau Retrofit
        // atau menggunakan metode lain yang sesuai dengan kebutuhan aplikasi Anda
        // Anda dapat menggunakan metode getTokenFromSharedPreferences(Context context)
        // di bagian lain dari aplikasi untuk mendapatkan token yang tersimpan.
    }

    // Metode untuk mendapatkan token dari Shared Preferences
    public static String getTokenFromSharedPreferences(Context context) {
        SharedPreferences sharedPreferences = context.getSharedPreferences(SHARED_PREFS_KEY, Context.MODE_PRIVATE);
        return sharedPreferences.getString("token", null);
    }

    // ...
    // Implementasikan metode lain yang Anda butuhkan di sini
    // ...
}
