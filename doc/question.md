1.  Could not get batchedbridge, make sure your bundle is packaged correctly
    �ڵ�ǰandroid Ŀ¼��android/app/src/main/�½�assetsĿ¼ִ�������
    react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
2.  Chrome�µ�Debug;
    http://localhost:8081/debugger-ui
3.  Cannot find entry file index.android.js in any of the roots
