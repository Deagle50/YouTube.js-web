<p>
  Run the app with ```node .\lib\Innertube.js```
  Go to:
  [localhost](http://localhost:6746/buscar/{yoursearch}) with the api running and enjoy it from a web
</p>

<!-- Hi there, fellow coder :) -->
<!-- Deagle50: Hi! -->

<h1 align=center>
  YouTube.js
</h1>

<p align=center>
  <!-- SHORT DESCRIPTION -->
  <i>
    A full-featured wrapper around the Innertube API, which is what YouTube itself uses.
  </i>
</p>

<p align=center>
  <!-- SHORTCUTS -->
  <a href="https://github.com/LuanRT/YouTube.js/issues">
     Report Bug
  </a>
    ·
  <a href="https://github.com/LuanRT/YouTube.js/issues">
    Request Feature
  </a>
  
  <br>
  <br>
 
  <!-- PROJECT SHIELDS -->
  <a href='https://github.com/LuanRT/YouTube.js/actions'>
    <img src='https://github.com/LuanRT/YouTube.js/actions/workflows/node.js.yml/badge.svg' alt='Tests'>
  </a>

  <a href='https://www.npmjs.com/package/youtubei.js?activeTab=versions'>
    <img src='https://img.shields.io/npm/v/youtubei.js?color=%2335C757' alt='Latest version'>
  </a>

  <a href='https://www.codefactor.io/repository/github/luanrt/youtube.js'>
    <img src='https://www.codefactor.io/repository/github/luanrt/youtube.js/badge' alt='Code factor'>
  </a>

  <a href='https://www.npmjs.com/package/youtubei.js'>
    <img src='https://img.shields.io/npm/dm/youtubei.js' alt='Monthly downloads'>
  </a>

  <a href="https://saythanks.io/to/LuanRT">
    <img src="https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg">
  </a>
  <br>

  <!-- DONATE BUTTON -->
  <a href="https://ko-fi.com/luanrt">
    <img src="https://img.shields.io/badge/donate-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#white" alt="Donate">
  </a>
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#interactions">Interactions</a></li>
        <li><a href="#live-chats">Livechats</a></li>
        <li><a href="#downloading-videos">Downloading videos</a></li>
        <li><a href="#signing-in">Signing in</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#disclaimer">Disclaimer</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About

Innertube is an API used across all YouTube clients, it was created [to simplify](https://gizmodo.com/how-project-innertube-helped-pull-youtube-out-of-the-gu-1704946491) the internal structure of the platform in a way that updates, tweaks, and experiments can be easily made. This library handles all the low-level communication with Innertube, providing a simple and efficient way to interact with YouTube programmatically.

And huge thanks to [@gatecrasher777](https://github.com/gatecrasher777/ytcog) for his research on the workings of the Innertube API!

### Features

- Search videos, playlists, music, albums, artists, etc.
- Subscribe, unsubscribe, like, dislike, post comments, replies, and etc.
- Get subscriptions/home feed, notifications, watch history, and more.
- Easily sign in to any Google Account.
- Fetch live chat & live stats.
- Manage account settings.
- Manage playlists.
- Download videos.

~ And more!

Do note that you must be signed in to perform actions that involve an account; such as commenting, liking/disliking videos, sending messages to a live chat, etc.

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
- [NodeJS](https://nodejs.org) v14 or greater

  To verify things are set up
properly, you can run this:
  ```bash
  node --version
  ```


### Installation
- NPM:
  ```bash
  npm install youtubei.js@latest
  ```
- Yarn:
  ```bash
  yarn add youtubei.js@latest
  ```
- Git (bleeding-edge version):
  ```bash
  npm install git+https://github.com/LuanRT/YouTube.js.git
  ```

<!-- USAGE -->
## Usage

Create an Innertube instance (or session):
```js
const Innertube = require('youtubei.js');
const youtube = await new Innertube({ gl: 'US' }); // all parameters are optional.
```

### A simple search:

Options:
  * client: `YOUTUBE` | `YTMUSIC`
  
  * filters (youtube only):
    * upload_date: `any` | `last_hour` | `today` | `this_week` | `this_month` | `this_year`
    
    * type: `any` | `video` | `channel` | `playlist` | `movie`
    
    * duration: `any` | `short` | `medium` | `long`
    
    * sort_by: `relevance` | `rating` | `upload_date` | `view_count`
  
```js
const search = await youtube.search('QUERY', { client: 'YOUTUBE' });
```

<details>
<summary>YouTube Output</summary>
<p>

```js
{
   query: string,
   corrected_query: string,
   estimated_results: number,
   videos: [
      {
         id: string,
         url: string,
         title: string,
         description: string,
         metadata:{
            view_count: string,
            short_view_count_text: {
               simple_text: string,
               accessibility_label: string
            },
            thumbnails: [Array],
            duration: {
               seconds: number,
               simple_text: string,
               accessibility_label: string
            },
            published: string,
            badges:[Array],
            owner_badges:[Array]
         }
      }
      //...
   ]
}
```

</p>
</details> 

<details>
<summary>YTMusic Output</summary>
<p>


```js
{
   query:string,
   corrected_query:string,
   results:{
      top_result:[Array],  // Can be anything; video, playlist, artist etc..
      songs:[
         {
            id:string,
            title:string,
            artist:string,
            album:string,
            duration:string,
            thumbnails:[
               Array
            ]
         },
         //...
      ],
      videos:[
         {
            id:string,
            title:string,
            author:string,
            views:string,
            duration:string,
            thumbnails:[Array]
         },
         //...
      ],
      albums:[
         {
            id:string,
            title:string,
            author:string,
            year:string,
            thumbnails:[Array]
         },
         //...
      ],
      featured_playlists:[
         {
            id:string,
            title:string,
            author:string,
            channel_id:string,
            total_items:number
         },
         //...
      ],
      community_playlists:[
         {
            id:string,
            title:string,
            author:string,
            channel_id:string,
            total_items:number
         },
         //...
      ],
      artists:[
         {
            id:string,
            name:string,
            subscribers:string,
            thumbnails:[Array]
         },
         //...
      ]
   }
}
```

</p>
</details> 
<br>

### Search suggestions:
```js
const suggestions = await youtube.getSearchSuggestions('QUERY', { client: 'YOUTUBE' })
```

<details>
<summary>Output</summary>
<p>

```js
[
  {
     text: string, bold_text: string
  },
  //...
]
```

</p>
</details> 

### Video info:

```js
const video = await youtube.getDetails('VIDEO_ID');
```

<details>
<summary>Output</summary>
<p>

```js
{
   title: string,
   description: string,
   thumbnail: {
      url: string,
      width: number,
      height: number
   },
   metadata: {
      embed: {
         iframeUrl: string,
         flashUrl: string,
         width: number,
         height: number,
         flashSecureUrl: string
      },
      likes: number,
      dislikes: number,
      view_count: number,
      average_rating: number,
      length_seconds: number,
      channel_id: string,
      channel_url: string,
      external_channel_id: string,
      allow_ratings: boolean,
      is_live_content: boolean,
      is_family_safe: boolean,
      is_unlisted: boolean,
      is_private: boolean,
      is_liked: boolean,
      is_disliked: boolean,
      is_subscribed: boolean,
      subscriber_count: string,
      current_notification_preference: string,
      likes: { count: number, short_count_text: string },
      publish_date_text: string,
      has_ypc_metadata: boolean,
      category: string,
      channel_name: string,
      publish_date: string,
      upload_date: string,
      keywords: [Array]
   }
}
```

</p>
</details>

### Comments:

Sorting options: `TOP_COMMENTS` | `NEWEST_FIRST`

```js
const comments = await youtube.getComments('VIDEO_ID', 'TOP_COMMENTS');
```
Alternatively, you can use:

```js
const video = await youtube.getDetails('VIDEO_ID');
const comments = await video.getComments(); 
```
<details>
<summary>Output</summary>
<p>

```js
{
   page_count: number,
   comment_count: number,
   items: [
      {
         text: string,
         author: {
            name: string,
            thumbnails: [
               {
                  url: string,
                  width: number,
                  height: number
               }
            ],
            channel_id: string
         },
         metadata:{
            published: string,
            is_liked: boolean,
            is_disliked: boolean,
            is_pinned: boolean,
            is_channel_owner: boolean,
            is_reply: boolean,
            like_count: number,
            reply_count: number,
            id: string
         }
      },
      //...
   ]
}
```

</p>
</details>

Reply to, like/dislike, translate and report a comment:
```js
const top_comment = comments.items[0];

await top_comment.like();
await top_comment.dislike();
await top_comment.report();
await top_comment.reply('Nice comment!'); 

// Note: only ISO language codes are accepted
await top_comment.translate('ru');  
```

Comment replies:
```js
const replies = await top_comment.getReplies();
```

Comments/replies continuation:
```js
const continuation = await comments.getContinuation();
const replies_continuation = await replies.getContinuation();
```

### Home feed:
```js
const homefeed = await youtube.getHomeFeed();
```
<details>
<summary>Output</summary>
<p>

```js
{
   videos: [
     {
        id: string,
        title: string,
        description: string,
        channel: {
          id: string,
          name: string,
          url: string
        },
        metadata: {
           view_count: string,
           short_view_count_text: { simple_text: string, accessibility_label: string },
           thumbnail: {
              url: string,
              width: number,
              height: number
            },
            moving_thumbnail: {
              url: string,
              width: number,
              height: number
            },
            published: string,
            duration: {
              seconds: number,
              simple_text: string,
              accessibility_label: string
            },
            badges: string,
            owner_badges: [Array]
        }
     },
     // ...
  ]
}
```

</p>
</details>

Continuation:
```js
const continuation = await homefeed.getContinuation();
````

### Watch history:
```js
const history = await youtube.getHistory();
```


<details>
<summary>Output</summary>
<p>

```js
{
   items: [
      {
         date: string,
         videos: [
            {
               id: string,
               title: string,
               channel: {
                  id: string,
                  name: string,
                  url: string
               },
               metadata: {
                  view_count: string,
                  short_view_count_text: {
                     simple_text: string,
                     accessibility_label: string
                  },
                  thumbnail: {
                     url: string,
                     width: number,
                     height: number
                  },
                  moving_thumbnail: {
                     url: string,
                     width: number,
                     height: number
                  },
                  published: string,
                  badges: [Array],
                  owner_badges: [Array]
               }
            },
            //...
         ]
      },
      //...
   ]
}
```

</p>
</details>

Continuation:
```js
const continuation = await history.getContinuation();
````

### Subscriptions feed:
```js
const mysubsfeed = await youtube.getSubscriptionsFeed();
```

<details>
<summary>Output</summary>
<p>

```js
{
   items: [
      {
         date: string,
         videos: [
            {
               id: string,
               title: string,
               description: string,
               channel: {
                  id: string,
                  name: string,
                  url: string
               },
               metadata: {
                  view_count: string,
                  short_view_count_text: {
                     simple_text: string,
                     accessibility_label: string
                  },
                  thumbnail: {
                     url: string,
                     width: number,
                     height: number
                  },
                  moving_thumbnail: {
                     url: string,
                     width: number,
                     height: number
                  },
                  published: string,
                  badges: [Array],
                  owner_badges: [Array]
               }
            },
            //...
         ]
      },
      //...
   ]
}
```

</p>
</details>

Continuation:
```js
const continuation = await mysubsfeed.getContinuation();
````

### Trending content:

```js
const trending = await youtube.getTrending();
```

<details>
<summary>Output</summary>
<p>

```js
{
  now: {
    content: [
      {
        title: string,
        videos: [] 
      },
      //...
    ]
  },
  // Other categories require an additional call to fetch videos
  music: { getVideos: Promise.<Array> },
  gaming: { getVideos: Promise.<Array> },
  movies: { getVideos: Promise.<Array> }
}
```

</p>
</details>

### Song lyrics:
```js
const search = await youtube.search('Never give you up', { client: 'YTMUSIC' });
const lyrics = await youtube.getLyrics(search.results.songs[0].id); 
```

### Notifications:

```js
const notifications = await youtube.getNotifications();
```

<details>
<summary>Output</summary>
<p>

```js
{
  items: [  
    {
      title: string,
      sent_time: string,
      channel_name: string,
      channel_thumbnail: {
         url: string,
         width: number,
         height: number
      },
      video_thumbnail: { 
         url: string,
         width: number,
         height: number
      },
      video_url: string,
      read: boolean,
      notification_id: string
    },
    //...
  ]
}
```

</p>
</details>

Continuation:
```js
const continuation = await notifications.getContinuation();
````

Unseen notifications count:

```js
const unread_notis_count = await youtube.getUnseenNotificationsCount();
```

### Get playlist: 
Client: `YOUTUBE` | `YTMUSIC`

```js
const playlist = await youtube.getPlaylist('PLAYLIST_ID', { client: 'YOUTUBE' });
```

<details>
  <summary>YouTube Output</summary>
<p>

```js
{
  title: string,
  description: string,
  total_items: string,
  last_updated: string,
  views: string,
  items: [
    {
      id: string,
      title: string,
      author: string,
      duration: {
         seconds: number,
         simple_text: string,
         accessibility_label: string
      },
      thumbnails: [Array]
    },
    //...
  ]
}
```

</p>
</details>

<details>
  <summary>YouTube Music Output</summary>
<p>

```js
{
  title: string,
  description: string,
  total_items: number,
  duration: string,
  year: string,
  items: [
    {
      id: string,
      title: string,
      author: string,
      duration: {
         seconds: number,
         simple_text: string
      },
      thumbnails: [Array]
    },
    //...
}
```

</p>
</details>

### Interactions:
---

Don't forget that you must be signed in to use some of the following methods!

* Subscribe/Unsubscribe:
  ```js
  await youtube.interact.subscribe('CHANNEL_ID');
  await youtube.interact.unsubscribe('CHANNEL_ID');
  ```

* Like/Dislike:
  ```js
  await youtube.interact.like('VIDEO_ID');
  await youtube.interact.dislike('VIDEO_ID');
  await youtube.interact.removeLike('VIDEO_ID');
  ```

* Comment:
  ```js
  await youtube.interact.comment('VIDEO_ID', 'Haha, nice video!');
  ```

* Playlists:
  ```js
  const videos = [
    'VIDEO_ID1',
    'VIDEO_ID2',
    'VIDEO_ID3'
    //...
  ];

  // Create and delete a playlist:
  await youtube.playlist.create('My Playlist', videos);
  await youtube.playlist.delete('PLAYLIST_ID');
   
  // Add and remove videos from a playlist:
  await youtube.playlist.addVideos('PLAYLIST_ID', videos);
  await youtube.playlist.removeVideos('PLAYLIST_ID', videos);
  ```

* Translate (does not require sign in)
  ```js
  await youtube.interact.translate('Hi mom!', 'ru');
  ```

* Change notification preferences:
  
  Options: `ALL` | `NONE` | `PERSONALIZED`
  
  ```js
  await youtube.interact.setNotificationPreferences('CHANNEL_ID', 'ALL'); 
  ```

Response schema:
```js 
{
  success: boolean, 
  status_code: number, 
  playlist_id?: string,
  translated_content?: string,
  data?: object
}
```

### Account Settings
It is also possible to manage account settings:

* Get account info:
  ```js
  await youtube.account.info();
  ```

  <details>
  <summary>Output</summary>
  <p>

  ```js
  {
      name: string,
      photo: [
         {
            url: string,
            width: number,
            height: number
         }
      ],
      country: string,
      language: string;
  }
  ```
  </p>
  </details>

<br>

#### Notification settings:

Options: `ON` | `OFF`

* Subscription notifications:
  ```js
  await youtube.account.settings.notifications.setSubscriptions('ON'); 
  ```

* Recommended content notifications:
  ```js
  await youtube.account.settings.notifications.setRecommendedVideos('ON'); 
  ```

* Channel activity notifications:
  ```js
  await youtube.account.settings.notifications.setChannelActivity('ON'); 
  ```

* Comment replies notifications:
  ```js
  await youtube.account.settings.notifications.setCommentReplies('ON'); 
  ```

* Channel mention notifications:
  ```js
  await youtube.account.settings.notifications.setSharedContent('ON'); 
  ```

#### Privacy settings:

Options: `ON` | `OFF`

* Subscriptions privacy:
  ```js
  await youtube.account.settings.privacy.setSubscriptionsPrivate('ON'); 
  ```

* Saved playlists privacy:
  ```js
  await youtube.account.settings.privacy.setSavedPlaylistsPrivate('ON'); 
  ```

### Live chats:
---

Currently, the library can retrieve live chat messages, stats and also send messages.

```js
const Innertube = require('youtubei.js');

async function start() {
  const youtube = await new Innertube();

  const search = await youtube.search('Lofi girl live');
  const video = await youtube.getDetails(search.videos[0].id);
  
  const livechat = video.getLivechat();

  // Updated stats about the livestream
  livechat.on('update-metadata', (data) => {
    console.info('Info:', data);
  });
   
  // Fired whenever there is a new message or other chat events
  livechat.on('chat-update', (message) => {
    console.info(`- ${message.author.name}\n${message.text}\n\n`);
    
    if(message.text == '!info') {
      livechat.sendMessage('Hello! This message was sent from YouTube.js');
    }
  });
}

start();
```
Stop fetching the live chat:
```js
livechat.stop();
```

Delete a message:
```js
const msg = await livechat.sendMessage('Nice livestream!');
await msg.deleteMessage();
```

### Downloading videos:
---
```js
const options = {
  format: string,
  quality: string,
  type: string,
  range: { start: number, end: number }
};

const stream = youtube.download('VIDEO_ID', options);
```

Options:

* format: 
  `mp4` | `webm` etc.. (note: only formats provided by YouTube are available) 

* quality: 
  `144p`, `240p`, `360p`, `480p`, `720p`, `1080p` etc..
   
* type:
  `video` | `audio` | `videoandaudio`

* range: indicates which bytes should be downloaded 
  * start: an integer indicating the beginning of the range
  * end: an integer indicating the end of the range

Cancel a download:
```js
stream.cancel();
```

Example:
```js
const fs = require('fs');
const Innertube = require('youtubei.js');

async function start() {
  const youtube = await new Innertube();
 
  const search = await youtube.search('Looking for life on Mars - documentary');
  
  const stream = youtube.download(search.videos[0].id, {
    format: 'mp4', // Optional, defaults to mp4 and I recommend to leave it as it is unless you know what you're doing
    quality: '360p', // if a video doesn't have a specific quality it'll fall back to 360p, also ignored when type is set to audio
    type: 'videoandaudio' // can be “video”, “audio” and “videoandaudio”
  });
  
  stream.pipe(fs.createWriteStream(`./${search.videos[0].title}.mp4`));
 
  stream.on('start', () => {
    console.info('[DOWNLOADER]', 'Starting download now!');
  });
  
  stream.on('info', (info) => {
    // { video_details: {..}, selected_format: {..}, formats: {..} }
    console.info('[DOWNLOADER]', `Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
  });
  
  stream.on('progress', (info) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`[DOWNLOADER] Downloaded ${info.percentage}% (${info.downloaded_size}MB) of ${info.size}MB`);
  });
  
  stream.on('end', () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.info('[DOWNLOADER]', 'Done!');
  });
  
  stream.on('error', (err) => console.error('[ERROR]', err)); 
}

start();
```

Alternatively, you can get the deciphered streaming data and handle the download yourself:

```js
const streaming_data = await youtube.getStreamingData('VIDEO_ID', options);
```

<details>
<summary>Output</summary>
<p>

```js
{
   selected_format: {
      itag: number,
      mimeType: string,
      bitrate: number,
      initRange: { start: string, end: string },
      indexRange: { start: string, end: string },
      lastModified: string,
      contentLength: string,
      quality: string,
      projectionType: string,
      averageBitrate: number,
      highReplication: boolean,
      audioQuality: string,
      approxDurationMs: string,
      audioSampleRate: string,
      audioChannels: number,
      loudnessDb: number,
      url: string, 
      has_audio: boolean,
      has_video: boolean
  },
  formats: [
    {
      itag: number,
      mimeType: string,
      bitrate: number,
      initRange: { start: string, end: string },
      indexRange: { start: string, end: string },
      lastModified: string,
      contentLength: string,
      quality: string,
      projectionType: string,
      averageBitrate: number,
      highReplication: boolean,
      audioQuality: string,
      approxDurationMs: string,
      audioSampleRate: string,
      audioChannels: number,
      loudnessDb: number,
      url: string, 
      has_audio: boolean,
      has_video: boolean
    }
    //...
  ]
}
```
</p>
</details>

### Signing in:
---

When signing in to your account, you have two options:

- Use OAuth 2.0; easy, simple & reliable.
- Cookies; usually more complicated to get and unreliable.

#### OAuth:

```js
const fs = require('fs');
const Innertube = require('youtubei.js');
const creds_path = './yt_oauth_creds.json'; 

async function start() {
  const creds = fs.existsSync(creds_path) && JSON.parse(fs.readFileSync(creds_path).toString()) || {};
  const youtube = await new Innertube();
  
  youtube.ev.on('auth', (data) => {
    if (data.status === 'AUTHORIZATION_PENDING') {
      console.info(`Hello!\nOn your phone or computer, go to ${data.verification_url} and enter the code ${data.code}`);
    } else if (data.status === 'SUCCESS') {
      fs.writeFileSync(creds_path, JSON.stringify(data.credentials));
      console.info('Successfully signed-in, enjoy!');
    }
  });
  
  youtube.ev.on('update-credentials', (data) => {
    fs.writeFileSync(creds_path, JSON.stringify(data.credentials));
    console.info('Credentials updated!', data);
  });
  
  await youtube.signIn(creds);
  
  //...
}

start();
```
Sign out:
```js
const response = await youtube.signOut();
if (response.success) {
  console.log('You have successfully signed out');
}
```

#### Cookies:

```js
const Innertube = require('youtubei.js');

async function start() {
  const youtube = await new Innertube({ cookie: '...' }); 
  //...
}

start();
```

<!-- CONTRIBUTING -->
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

<!-- CONTRIBUTORS -->
## Contributors
<a href="https://github.com/LuanRT/YouTube.js/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=LuanRT/YouTube.js" />
</a>

<!-- CONTACT -->
## Contact

LuanRT  - [@lrt_nooneknows](https://twitter.com/lrt_nooneknows) - luan.lrt4@gmail.com

Project Link: [https://github.com/LuanRT/YouTube.js](https://github.com/LuanRT/YouTube.js)

<!-- DISCLAIMER -->
## Disclaimer
This project is not affiliated with, endorsed, or sponsored by YouTube or any of their affiliates or subsidiaries. 
All trademarks, logos and brand names are the property of their respective owners. 

Should you have any questions or concerns please contact me directly via email.

<!-- LICENSE -->
## License
Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.

<p align="right">
  (<a href="#top">back to top</a>)
</p>
