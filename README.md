# internet-monitor
This Node application automatically measures internet speed information at regular intervals (using the speedtest-net node package) and inserts the information into a MongoDB database.

I designed the application to run on my raspberry pi, which can stay up and running 24/7 on my home network.

### Setup

#### Requirements
- Node
- npm
- MongoDB

#### Setup
1. Run `npm install` to grab required node modules
2. Edit `config.json` with your desired parameters
    - db/collection names
    - frequency of speed measurements
3. Start MongoDB
4. Run `src/setup/setup.js`
    - This will create a database and collection in Mongo

#### Startup
To start the application, run `src/app/main.js`.

You will probably want to run this application on a remote device so that you can constantly monitor speeds without having to keep a personal or work machine online constantly. Given this, I recommend that the app be run through ssh using `nohup` (so that the process does not die when the ssh connection ends). To do that, run `ssh user@target "nohup ~/path/to/repo/src/app/main.js > app.out 2> app.err < /dev/null &"`.

#### Teardown
For convenience, I have also included a teardown script that will delete the database. To run the teardown, just execute `src/setup/teardown.js`.
