"use strict";
// Type definitions for gd-sprest
// Project: https://gunjandatta.github.io/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta>

/***************************************************************************************************
MIT License

Copyright (c) 2016 Dattabase, LLC.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
***************************************************************************************************/
import {IREST} from "./definitions";
import {
    ContextInfo,
    Email,
    Helper,
    List,
    PeopleManager,
    PeoplePicker,
    ProfileLoader,
    Search,
    Site,
    SocialFeed,
    UserProfile,
    Web
} from "./lib";
export {
    ContextInfo,
    Email,
    Helper,
    List,
    PeopleManager,
    PeoplePicker,
    ProfileLoader,
    Search,
    Site,
    SocialFeed,
    UserProfile,
    Web
}

/**
 * SharePoint REST Library
 */
const gd_sprest = {
    ContextInfo,
    DefaultRequestToHostFl: false,
    Email,
    Helper,
    List,
    PeopleManager,
    PeoplePicker,
    ProfileLoader,
    Search,
    Site,
    SocialFeed,
    UserProfile,
    Web
}

// Make the library globally available
window["$REST"] = gd_sprest;
export const $REST:IREST = <any>gd_sprest;