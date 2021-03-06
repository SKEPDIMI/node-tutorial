var enviorments = {};

enviorments.staging={
    'httpPort':3000,
    'httpsPort':3001,
    'envName':'staging',
    'hashingSecret':'mySecret',
    'maxChecks':5,
    'twilio' : {
        'accountSid' : 'ACb32d411ad7fe886aac54c665d25e5c5d',
        'authToken' : '9455e3eb3109edc12e3d8c92768f7a67',
        'fromPhone' : '+15005550006'
    },
    'templateGlobals': {
        'title':'Upwork',
        'companyName' : 'Upwork INC',
        'description' : 'Online platform for students to share resources and ideas amongst each other.',
        'yearCreated' : '2002',
        'baseUrl' : 'http://localhost:3000/'
    }
};

enviorments.production={
    'httpPort':5000,
    'httpsPort':5001,
    'envName':'production',
    'hashingSecret':'mySecret',
    'maxChecks':5,
    'twilio' : {
        'accountSid' : 'ACb32d411ad7fe886aac54c665d25e5c5d',
        'authToken' : '9455e3eb3109edc12e3d8c92768f7a67',
        'fromPhone' : '+15005550006'
    },
    'templateGlobals': {
        'title':'WorkSpace',
        'companyName' : 'WorkSpace Inc',
        'yearCreated' : '2018',
        'baseUrl' : 'http://localhost:3001/'//IMPORTANT: Base Url makes it so that all html GET requests are based off this dir. Example, instead of the URL of a request being 'account/create/logo.png', since the baseURL is 'localhost', it will not look for logo.png inside account/create. I dont know why.
    }
}

var currentEnviorment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase():'staging';

var enviormentToExport = typeof(enviorments[currentEnviorment]) === 'object' ? enviorments[currentEnviorment] : {};

module.exports = enviormentToExport;