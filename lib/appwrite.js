import { Account, Client, ID } from 'react-native-appwrite';



export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.rn.aora',
    projectId: '66c0316d003bd88fd4f2',
    databaseId: '66c0334200249a0de66b',
    userCollectionId: '66c033720028c6235c06',
    videoCollectionId: '66c033b10036e188a10d',
    storageId: '66c035d4003aba53aec4',
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;


const account = new Account(client);


// Register User
export const createUser = () => {

    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}
