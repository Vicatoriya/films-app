import admin from 'firebase-admin';
import serviceAccount from '../../../serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: 'https://films-app-e67f0-default-rtdb.firebaseio.com',
});

export const db = admin.database();

