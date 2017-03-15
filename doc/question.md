1.  Could not get batchedbridge, make sure your bundle is packaged correctly
    在当前android 目录下android/app/src/main/新建assets目录执行下面的
    react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
2.  Chrome下的Debug;
    http://localhost:8081/debugger-ui
3.  Cannot find entry file index.android.js in any of the roots
