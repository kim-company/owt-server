var config = {}

/*********************************************************
 COMMON CONFIGURATION
 It's used by Nuve, ErizoController, ErizoAgent and ErizoJS
**********************************************************/
config.rabbit = {};
config.rabbit.host = 'localhost'; //default value: 'localhost'
config.rabbit.port = 5672; //default value: 5672
config.logger = {};
config.logger.config_file = '../log4js_configuration.json'; //default value: "../log4js_configuration.json"

/*********************************************************
 CLOUD PROVIDER CONFIGURATION
 It's used by Nuve and ErizoController
**********************************************************/
config.cloudProvider = {};
config.cloudProvider.name = '';
//In Amazon Ec2 instances you can specify the zone host. By default is 'ec2.us-east-1a.amazonaws.com' 
config.cloudProvider.host = '';
config.cloudProvider.accessKey = '';
config.cloudProvider.secretAccessKey = '';

config.certificate = {};
// A string or Buffer containing the certificate key of the server in PEM format. (Required)
config.certificate.cert = "../../cert/cert.pem";
// A string or Buffer containing the private key of the server in PEM format. (Required)
config.certificate.key = "../../cert/key.pem";
// A string of passphrase for the private key or pfx
config.certificate.passphrase = "private password";
// An array of strings or Buffers of trusted certificates in PEM format. If this is omitted several well known "root" CAs will be used, like VeriSign. These are used to authorize connections.
config.certificate.ca = "";

/*********************************************************
 NUVE CONFIGURATION
**********************************************************/
config.nuve = {};
config.nuve.dataBaseURL = "localhost/nuvedb"; // default value: 'localhost/nuvedb'
config.nuve.superserviceID = '_auto_generated_ID_'; // default value: ''
config.nuve.superserviceKey = '_auto_generated_KEY_'; // default value: ''
config.nuve.testErizoController = 'localhost:8080'; // default value: 'localhost:8080'

/*********************************************************
 ERIZO CONTROLLER CONFIGURATION
**********************************************************/
config.erizoController = {};

//Use undefined to run clients without Stun 
config.erizoController.stunServerUrl = undefined; // default value: 'stun:stun.l.google.com:19302'

// Default and max video bandwidth parameters to be used by clients
config.erizoController.defaultVideoBW = 300; //default value: 300
config.erizoController.maxVideoBW = 300; //default value: 300

// Public erizoController IP for websockets (useful when behind NATs)
// Use '' to automatically get IP from the interface
config.erizoController.publicIP = ''; //default value: ''
// Use '' to use the public IP address instead of a hostname
config.erizoController.hostname = ''; //default value: ''
config.erizoController.port = 8080; //default value: 8080
// Use true if clients communicate with erizoController over SSL
config.erizoController.ssl = false; //default value: false

// Use the name of the inferface you want to bind to for websockets
// config.erizoController.networkInterface = 'eth1' // default value: undefined

//Use undefined to run clients without Turn
config.erizoController.turnServer = {}; // default value: undefined
config.erizoController.turnServer.url = ''; // default value: null
config.erizoController.turnServer.username = ''; // default value: null
config.erizoController.turnServer.password = ''; // default value: null

config.erizoController.warning_n_rooms = 15; // default value: 15
config.erizoController.limit_n_rooms = 20; // default value: 20
config.erizoController.interval_time_keepAlive = 1000; // default value: 1000

// Roles to be used by services
config.erizoController.roles =
{"presenter": {"publish": true, "subscribe": true, "record": true},
    "viewer": {"subscribe": true},
    "viewerWithData": {"subscribe": true, "publish": {"audio": false, "video": false, "screen": false, "data": true}}}; // default value: {"presenter":{"publish": true, "subscribe":true, "record":true}, "viewer":{"subscribe":true}, "viewerWithData":{"subscribe":true, "publish":{"audio":false,"video":false,"screen":false,"data":true}}}

// If true, erizoController sends stats to rabbitMQ queue "stats_handler" 
config.erizoController.sendStats = false; // default value: false

// If undefined, the path will be /tmp/
config.erizoController.recording_path = undefined; // default value: undefined

// If true, the streams from different clients in a room will be mixed by the media server.
config.erizoController.mixer = true;

// If true and the maxProcesses allows, the mixer will be run in a dedicated process.
config.erizoController.outOfProcessMixer = false;

/*********************************************************
 ERIZO AGENT CONFIGURATION
**********************************************************/
config.erizoAgent = {};

// Max processes that ErizoAgent can run
config.erizoAgent.maxProcesses 	  = 13; // default value: 13
// Number of precesses that ErizoAgent runs when it starts. Always lower than or equals to maxProcesses.
config.erizoAgent.prerunProcesses = 1; // default value: 1

/*********************************************************
 ERIZO JS CONFIGURATION
**********************************************************/
config.erizo = {};

//STUN server IP address and port to be used by the server.
//if '' is used, the address is discovered locally
config.erizo.stunserver = ''; // default value: ''
config.erizo.stunport = 0; // default value: 0

//note, this won't work with all versions of libnice. With 0 all the available ports are used
config.erizo.minport = 0; // default value: 0
config.erizo.maxport = 0; // default value: 0

// If true and the machine has the capability, the mixer will be accelerated by hardware graphic chips.
config.erizo.hardwareAccelerated = false;

// Config the mixed video layout. Default is "fluid" layout.
// Otherwise, "custom" layout can be used for video layout customization.
config.erizo.videolayout = {};
config.erizo.videolayout.type = "fluid";
config.erizo.videolayout.defaultrootsize = "vga"; // Default 640x480 root size. See docs for more details.
config.erizo.videolayout.defaultbackgroundcolor = "black"; // Default black root background color . See docs for more details.

/***** END *****/
// Following lines are always needed.
var module = module || {};
module.exports = config;
