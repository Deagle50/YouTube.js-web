export = Innertube;
declare class Innertube {
    /**
     * ```js
     * const Innertube = require('youtubei.js');
     * const youtube = await new Innertube();
     * ```
     *
     * @param {object} [config]
     * @param {string} [config.gl]
     * @param {string} [config.cookie]
     * @param {boolean} [config.debug]
     *
     * @returns {Innertube}
     * @constructor
     */
    constructor(config?: {
        gl?: string;
        cookie?: string;
        debug?: boolean;
    });
    config: {
        gl?: string;
        cookie?: string;
        debug?: boolean;
    };
    key: any;
    version: any;
    context: any;
    logged_in: boolean;
    player_url: any;
    sts: any;
    /**
     * @fires Innertube#auth - fired when signing in to an account.
     * @fires Innertube#update-credentials - fired when the access token is no longer valid.
     * @type {EventEmitter}
     */
    ev: EventEmitter;
    auth_apisid: any;
    request: Request;
    actions: Actions;
    account: {
        info: () => Promise<{
            name: string;
            photo: Array<object>;
            country: string;
            language: string;
        }>;
        getTimeWatched: () => void;
        settings: {
            notifications: {
                /**
                 * Notify about activity from the channels you're subscribed to.
                 *
                 * @param {boolean} new_value - ON | OFF
                 * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
                 */
                setSubscriptions: (new_value: boolean) => Promise<{
                    success: boolean;
                    status_code: number;
                    data: object;
                }>;
                /**
                 * Recommended content notifications.
                 *
                 * @param {boolean} new_value - ON | OFF
                 * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
                 */
                setRecommendedVideos: (new_value: boolean) => Promise<{
                    success: boolean;
                    status_code: number;
                    data: object;
                }>;
                /**
                 * Notify about activity on your channel.
                 *
                 * @param {boolean} new_value - ON | OFF
                 * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
                 */
                setChannelActivity: (new_value: boolean) => Promise<{
                    success: boolean;
                    status_code: number;
                    data: object;
                }>;
                /**
                 * Notify about replies to your comments.
                 *
                 * @param {boolean} new_value - ON | OFF
                 * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
                 */
                setCommentReplies: (new_value: boolean) => Promise<{
                    success: boolean;
                    status_code: number;
                    data: object;
                }>;
                /**
                 * Notify when others mention your channel.
                 *
                 * @param {boolean} new_value - ON | OFF
                 * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
                 */
                setMentions: (new_value: boolean) => Promise<{
                    success: boolean;
                    status_code: number;
                    data: object;
                }>;
                /**
                 * Notify when others share your content on their channels.
                 *
                 * @param {boolean} new_value - ON | OFF
                 * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
                 */
                setSharedContent: (new_value: boolean) => Promise<{
                    success: boolean;
                    status_code: number;
                    data: object;
                }>;
            };
            privacy: {
                /**
                 * If set to true, your subscriptions won't be visible to others.
                 *
                 * @param {boolean} new_value - ON | OFF
                 * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
                 */
                setSubscriptionsPrivate: (new_value: boolean) => Promise<{
                    success: boolean;
                    status_code: number;
                    data: object;
                }>;
                /**
                 * If set to true, saved playlists won't appear on your channel.
                 *
                 * @param {boolean} new_value - ON | OFF
                 * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
                 */
                setSavedPlaylistsPrivate: (new_value: boolean) => Promise<{
                    success: boolean;
                    status_code: number;
                    data: object;
                }>;
            };
        };
    };
    interact: {
        /**
         * Likes a given video.
         *
         * @param {string} video_id
         * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
         */
        like: (video_id: string) => Promise<{
            success: boolean;
            status_code: number;
            data: object;
        }>;
        /**
         * Diskes a given video.
         *
         * @param {string} video_id
         * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
         */
        dislike: (video_id: string) => Promise<{
            success: boolean;
            status_code: number;
            data: object;
        }>;
        /**
         * Removes a like/dislike.
         *
         * @param {string} video_id
         * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
         */
        removeLike: (video_id: string) => Promise<{
            success: boolean;
            status_code: number;
            data: object;
        }>;
        /**
         * Posts a comment on a given video.
         *
         * @param {string} video_id
         * @param {string} text
         * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
         */
        comment: (video_id: string, text: string) => Promise<{
            success: boolean;
            status_code: number;
            data: object;
        }>;
        /**
         * Translates a given text using YouTube's comment translate feature.
         *
         * @param {string} text
         * @param {string} target_language
         * @param {object} [args] - optional arguments
         * @param {string} [args.video_id]
         * @param {string} [args.comment_id]
         *
         * @returns {Promise.<{ success: boolean; status_code: number; translated_content: string; data: object; }>}
         */
        translate: (text: string, target_language: string, args?: {
            video_id?: string;
            comment_id?: string;
        }) => Promise<{
            success: boolean;
            status_code: number;
            translated_content: string;
            data: object;
        }>;
        /**
         * Subscribes to a given channel.
         *
         * @param {string} channel_id
         * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
         */
        subscribe: (channel_id: string) => Promise<{
            success: boolean;
            status_code: number;
            data: object;
        }>;
        /**
         * Unsubscribes from a given channel.
         *
         * @param {string} channel_id
         * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
         */
        unsubscribe: (channel_id: string) => Promise<{
            success: boolean;
            status_code: number;
            data: object;
        }>;
        /**
         * Changes notification preferences for a given channel.
         * Only works with channels you are subscribed to.
         *
         * @param {string} channel_id
         * @param {string} type PERSONALIZED | ALL | NONE
         * @returns {Promise.<{ success: boolean; status_code: number; data: object; }>}
         */
        setNotificationPreferences: (channel_id: string, type: string) => Promise<{
            success: boolean;
            status_code: number;
            data: object;
        }>;
    };
    playlist: {
        /**
         * Creates a playlist.
         *
         * @param {string} title
         * @param {Array.<string>} video_ids
         *
         * @returns {Promise.<{ success: boolean; status_code: number; playlist_id: string; data: object; }>}
         */
        create: (title: string, video_ids: Array<string>) => Promise<{
            success: boolean;
            status_code: number;
            playlist_id: string;
            data: object;
        }>;
        /**
         * Deletes a given playlist.
         *
         * @param {string} playlist_id
         * @returns {Promise.<{ success: boolean; status_code: number; playlist_id: string; data: object; }>}
         */
        delete: (playlist_id: string) => Promise<{
            success: boolean;
            status_code: number;
            playlist_id: string;
            data: object;
        }>;
        /**
         * Adds an array of videos to a given playlist.
         *
         * @param {string} playlist_id
         * @param {Array.<string>} video_ids
         * @returns {Promise.<{ success: boolean; status_code: number; playlist_id: string; data: object; }>}
         */
        addVideos: (playlist_id: string, video_ids: Array<string>) => Promise<{
            success: boolean;
            status_code: number;
            playlist_id: string;
            data: object;
        }>;
        /**
         * Removes videos from a given playlist.
         *
         * @param {string} playlist_id
         * @param {Array.<string>} video_ids
         *
         * @returns {Promise.<{ success: boolean; status_code: number; playlist_id: string; data: object; }>}
         */
        removeVideos: (playlist_id: string, video_ids: Array<string>) => Promise<{
            success: boolean;
            status_code: number;
            playlist_id: string;
            data: object;
        }>;
    };
    /**
     * Signs-in to a google account.
     *
     * @param {object} auth_info
     * @param {string} auth_info.access_token - Token used to sign in.
     * @param {string} auth_info.refresh_token - Token used to get a new access token.
     * @param {Date} auth_info.expires - Access token's expiration date, which is usually 24hrs-ish
     * @returns {Promise.<void>}
     */
    signIn(auth_info?: {
        access_token: string;
        refresh_token: string;
        expires: Date;
    }): Promise<void>;
    access_token: any;
    refresh_token: any;
    /**
     * Signs out of an account.
     * @returns {Promise.<{ success: boolean; status_code: number }>}
     */
    signOut(): Promise<{
        success: boolean;
        status_code: number;
    }>;
    /**
     * Retrieves account details.
     * @returns {Promise.<{ name: string; photo: Array<object>; country: string; language: string; }>}
     */
    getAccountInfo(): Promise<{
        name: string;
        photo: Array<object>;
        country: string;
        language: string;
    }>;
    /**
     * Searches on YouTube.
     *
     * @param {string} query - search query.
     * @param {object} [options] - search options.
     * @param {string} [options.client] - client used to perform the search, can be: `YTMUSIC` or `YOUTUBE`.
     * @param {object} [options.filters] - search filters.
     * @param {string} [options.filters.upload_date] - filter videos by upload date, can be: any | last_hour | today | this_week | this_month | this_year
     * @param {string} [options.filters.type] - filter results by type, can be: any | video | channel | playlist | movie
     * @param {string} [options.filters.duration] - filter videos by duration, can be: any | short | medium | long
     * @param {string} [options.filters.sort_by] - filter video results by order, can be: relevance | rating | upload_date | view_count
     *
     * @returns {Promise.<{ query: string; corrected_query: string; estimated_results: number; videos: [] } |
     * { results: { songs: []; videos: []; albums: []; community_playlists: [] } }>}
     */
    search(query: string, options?: {
        client?: string;
        filters?: {
            upload_date?: string;
            type?: string;
            duration?: string;
            sort_by?: string;
        };
    }): Promise<{
        query: string;
        corrected_query: string;
        estimated_results: number;
        videos: [];
    } | {
        results: {
            songs: [];
            videos: [];
            albums: [];
            community_playlists: [];
        };
    }>;
    /**
     * Retrieves search suggestions.
     *
     * @param {string} input - the search query.
     * @param {object} [options] - search options.
     * @param {string} [options.client='YOUTUBE'] - client used to retrieve search suggestions, can be: `YOUTUBE` or `YTMUSIC`.
     *
     * @returns {Promise.<[{ text: string; bold_text: string }]>}
     */
    getSearchSuggestions(input: string, options?: {
        client?: string;
    }): Promise<[{
        text: string;
        bold_text: string;
    }]>;
    /**
     * Retrieves video info.
     *
     * @param {string} video_id - video id
     * @return {Promise.<{ title: string; description: string; thumbnail: []; metadata: object }>}
     */
    getDetails(video_id: string): Promise<{
        title: string;
        description: string;
        thumbnail: [];
        metadata: object;
    }>;
    /**
     * Retrieves comments for a video.
     *
     * @param {string} video_id - video id
     * @param {string} [sort_by] - can be: `TOP_COMMENTS` or `NEWEST_FIRST`.
     * @return {Promise.<{ page_count: number; comment_count: number; items: []; }>}
     */
    getComments(video_id: string, sort_by?: string): Promise<{
        page_count: number;
        comment_count: number;
        items: [];
    }>;
    /**
     * Retrieves contents for a given channel. (WIP)
     *
     * @param {string} id - channel id
     * @return {Promise.<{ title: string; description: string; metadata: object; content: object }>}
     */
    getChannel(id: string): Promise<{
        title: string;
        description: string;
        metadata: object;
        content: object;
    }>;
    /**
     * Retrieves watch history.
     * @returns {Promise.<{ items: [{ date: string; videos: [] }] }>}
     */
    getHistory(): Promise<{
        items: [{
            date: string;
            videos: [];
        }];
    }>;
    /**
     * Retrieves YouTube's home feed (aka recommendations).
     * @returns {Promise.<{ videos: [{ id: string; title: string; description: string; channel: string; metadata: object }] }>}
     */
    getHomeFeed(): Promise<{
        videos: [{
            id: string;
            title: string;
            description: string;
            channel: string;
            metadata: object;
        }];
    }>;
    /**
     * Retrieves trending content.
     *
     * @returns {Promise.<{ now: { content: [{ title: string; videos: []; }] };
     * music: { getVideos: Promise.<Array>; }; gaming: { getVideos: Promise.<Array>; };
     * movies: { getVideos: Promise.<Array>; } }>}
     */
    getTrending(): Promise<{
        now: {
            content: [{
                title: string;
                videos: [];
            }];
        };
        music: {
            getVideos: Promise<any[]>;
        };
        gaming: {
            getVideos: Promise<any[]>;
        };
        movies: {
            getVideos: Promise<any[]>;
        };
    }>;
    /**
     * WIP
     */
    getLibrary(): Promise<any>;
    /**
     * Retrieves subscriptions feed.
     * @returns {Promise.<{ items: [{ date: string; videos: [] }] }>}
     */
    getSubscriptionsFeed(): Promise<{
        items: [{
            date: string;
            videos: [];
        }];
    }>;
    /**
     * Retrieves your notifications.
     * @returns {Promise.<{ items: [{ title: string; sent_time: string; channel_name: string; channel_thumbnail: {}; video_thumbnail: {}; video_url: string; read: boolean; notification_id: string }] }>}
     */
    getNotifications(): Promise<{
        items: [{
            title: string;
            sent_time: string;
            channel_name: string;
            channel_thumbnail: {};
            video_thumbnail: {};
            video_url: string;
            read: boolean;
            notification_id: string;
        }];
    }>;
    /**
     * Retrieves unseen notifications count.
     * @returns {Promise.<number>}
     */
    getUnseenNotificationsCount(): Promise<number>;
    /**
     * Retrieves lyrics for a given song if available.
     *
     * @param {string} video_id
     * @returns {Promise.<string>}
     */
    getLyrics(video_id: string): Promise<string>;
    /**
     * Retrieves a given playlist.
     *
     * @param {string} playlist_id - playlist id.
     * @param {object} options - { client: YOUTUBE | YTMUSIC }
     * @param {string} options.client - client used to parse the playlist, can be: `YTMUSIC` | `YOUTUBE`
     * @returns {Promise.<
     *  { title: string; description: string; total_items: string; last_updated: string; views: string; items: [] } |
     *  { title: string; description: string; total_items: number; duration: string; year: string; items: [] }>}
     */
    getPlaylist(playlist_id: string, options?: {
        client: string;
    }): Promise<{
        title: string;
        description: string;
        total_items: string;
        last_updated: string;
        views: string;
        items: [];
    } | {
        title: string;
        description: string;
        total_items: number;
        duration: string;
        year: string;
        items: [];
    }>;
    /**
     * An alternative to {@link download}.
     * Returns deciphered streaming data.
     *
     * @param {string} video_id - video id
     * @param {object} options - download options.
     * @param {string} options.quality - video quality; 360p, 720p, 1080p, etc...
     * @param {string} options.type - download type, can be: video, audio or videoandaudio
     * @param {string} options.format - file format
     *
     * @returns {Promise.<{ selected_format: {}; formats: [] }>}
     */
    getStreamingData(video_id: string, options?: {
        quality: string;
        type: string;
        format: string;
    }): Promise<{
        selected_format: {};
        formats: [];
    }>;
    /**
     * Downloads a given video. If you only need the direct download link take a look at {@link getStreamingData}.
     *
     * @param {string} video_id - video id
     * @param {object} options - download options.
     * @param {string} [options.quality] - video quality; 360p, 720p, 1080p, etc...
     * @param {string} [options.type] - download type, can be: video, audio or videoandaudio
     * @param {string} [options.format] - file format
     *
     * @return {Stream.PassThrough}
     */
    download(video_id: string, options?: {
        quality?: string;
        type?: string;
        format?: string;
    }): Stream.PassThrough;
    #private;
}
import EventEmitter = require("events");
import Request = require("./utils/Request");
import Actions = require("./core/Actions");
import Stream = require("stream");
